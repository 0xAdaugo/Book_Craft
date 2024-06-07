const chai = require('chai');
const chaiHttp = require('chai-http');
const { app, server } = require('../server.js'); 
const User = require('../models/User');

const { expect } = chai;

chai.use(chaiHttp);

describe('Auth API', () => {
  beforeEach(async function () {
    this.timeout(5000);
    try {
      await User.deleteMany({});
    } catch (err) {
      console.error(err);
    }
  });

  after((done) => {
    // Close the server after all tests are done
    server.close(done);

  });

  describe('/POST register', () => {
    it('should register a new user', async () => {
      const user = {
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456'
      };

      const res = await chai.request(app)
        .post('/auth/register')
        .send(user);

      expect(res).to.have.status(201);
      expect(res.body).to.be.an('object');
      expect(res.body.message).to.equal('User registered successfully');
    });

    it('should not register a user with missing fields', async () => {
      const user = {
        email: 'bookcraft24@gmail.com',
        password: '123456'
      };

      const res = await chai.request(app)
        .post('/auth/register')
        .send(user);

      expect(res).to.have.status(400);
      expect(res.body).to.be.an('object');
      expect(res.body.error).to.equal('Validation failed');
    });

    it('should not register a user with an existing email', async () => {
      const existingUser = new User({
        username: 'existinguser',
        email: 'bookcraft24@gmail.com',
        password: 'password123'
      });
      await existingUser.save();

      const user = {
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456'
      };

      const res = await chai.request(app)
        .post('/auth/register')
        .send(user);

      expect(res).to.have.status(400);
      expect(res.body).to.be.an('object');
      expect(res.body.error).to.equal('Email already exists');
    });
  });

  describe('/POST login', () => {
    it('should login a user', async () => {
      const user = new User({
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456'
      });
      await user.save();

      const res = await chai.request(app)
        .post('/auth/login')
        .send({ email: 'bookcraft24@gmail.com', password: '123456' });

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.token).to.be.a('string');
    });

    it('should not login a user with incorrect password', async () => {
      const user = new User({
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456'
      });
      await user.save();

      const res = await chai.request(app)
        .post('/auth/login')
        .send({ email: 'bookcraft24@gmail.com', password: 'incorrectpassword' });

      expect(res).to.have.status(401);
      expect(res.body).to.be.an('object');
      expect(res.body.error).to.equal('Incorrect password');
    });

    it('should not login a non-existent user', async () => {
      const res = await chai.request(app)
        .post('/auth/login')
        .send({ email: 'bookcraft24@gmail.com', password: '123456' });

      expect(res).to.have.status(404);
      expect(res.body).to.be.an('object');
      expect(res.body.error).to.equal('User not found');
    });
  });

  describe('/POST request-password-reset', () => {
    it('should request a password reset', async () => {
      const user = new User({
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456'
      });
      await user.save();

      const res = await chai.request(app)
        .post('/auth/request-password-reset')
        .send({ email: 'testuser@example.com' });

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.message).to.equal('Password reset email sent');
    });

    it('should not request a password reset for a non-existent user', async () => {
      const res = await chai.request(app)
        .post('/auth/request-password-reset')
        .send({ email: 'nonexistent@example.com' });

      expect(res).to.have.status(404);
      expect(res.body).to.be.an('object');
      expect(res.body.error).to.equal('User not found');
    });
  });

  describe('/POST reset-password', () => {
    it('should reset the password', async function () {
      this.timeout(5000);

      const user = new User({
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456',
        resetPasswordToken: 'validtoken',
        resetPasswordExpires: Date.now() + 3600000 // 1 hour
      });
      await user.save();

      const res = await chai.request(app)
        .post('/auth/reset-password')
        .send({ token: 'validtoken', password: 'newpassword' });

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.message).to.equal('Password reset successful');
    });

    it('should not reset the password with an invalid token', async () => {
      const user = new User({
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456',
        resetPasswordToken: 'validtoken',
        resetPasswordExpires: Date.now() + 3600000 // 1 hour
      });
      await user.save();

      const res = await chai.request(app)
        .post('/auth/reset-password')
        .send({ token: 'invalidtoken', password: 'newpassword' });

      expect(res).to.have.status(400);
      expect(res.body).to.be.an('object');
      expect(res.body.error).to.equal('Password reset token is invalid or has expired');
    });

    it('should not reset the password with an expired token', async () => {
      const user = new User({
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456',
        resetPasswordToken: 'validtoken',
        resetPasswordExpires: Date.now() - 3600000 // 1 hour ago
      });
      await user.save();

      const res = await chai.request(app)
        .post('/auth/reset-password')
        .send({ token: 'validtoken', password: 'newpassword' });

      expect(res).to.have.status(400);
      expect(res.body).to.be.an('object');
      expect(res.body.error).to.equal('Password reset token is invalid or has expired');
    });
  });

  describe('/POST logout', () => {
    it('should logout a user', async () => {
      const user = new User({
        username: 'testuser',
        email: 'bookcraft24@gmail.com',
        password: '123456'
      });
      await user.save();

      const loginRes = await chai.request(app)
        .post('/auth/login')
        .send({ email: 'bookcraft24@gmail.com', password: '123456' });

      const token = loginRes.body.token;

      const res = await chai.request(app)
        .post('/auth/logout')
        .set('Authorization', `Bearer ${token}`);

      expect(res).to.have.status(200);
      expect(res.body).to.be.an('object');
      expect(res.body.message).to.equal('Logged out successfully');
    });

    it('should not logout a user without token', async () => {
      const res = await chai.request(app)
        .post('/auth/logout');

      expect(res).to.have.status(401);
      expect(res.body).to.be.an('object');
      expect(res.body.error).to.equal('No token provided');
    });
  });
});
