const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const User = require('../models/User');
const Book = require('../models/Book');
const mongoose = require('mongoose');

chai.should();
chai.use(chaiHttp);

describe('Book API', () => {
  let token;
  let userId;

  // Setup before running tests
  before((done) => {
    // Clear users and books from database
    User.deleteMany({}, (err) => {
      Book.deleteMany({}, (err) => {
        // Create a new user and obtain a token
        const user = new User({
          username: 'testuser',
          email: 'testuser@example.com',
          password: '123456'
        });

        user.save((err, savedUser) => {
          userId = savedUser._id;

          chai.request(server)
            .post('/auth/login')
            .send({ email: 'testuser@example.com', password: '123456' })
            .end((err, res) => {
              token = res.body.token;
              done();
            });
        });
      });
    });
  });

  // Cleanup after running tests
  after((done) => {
    User.deleteMany({}, (err) => {
      Book.deleteMany({}, (err) => {
        mongoose.disconnect();
        done();
      });
    });
  });

  describe('/POST book', () => {
    it('it should create a new book', (done) => {
      const book = {
        title: 'Test Book',
        author: 'Test Author',
        genre: 'Test Genre',
        description: 'Test Description',
        publicationYear: 2022,
        coverUrl: 'http://example.com/cover.jpg'
      };
      chai.request(server)
        .post('/books')
        .set('Authorization', `Bearer ${token}`)
        .send(book)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('title').eql('Test Book');
          done();
        });
    });

    it('it should not create a book without a title', (done) => {
      const book = {
        author: 'Test Author',
        genre: 'Test Genre',
        description: 'Test Description',
        publicationYear: 2022,
        coverUrl: 'http://example.com/cover.jpg'
      };
      chai.request(server)
        .post('/books')
        .set('Authorization', `Bearer ${token}`)
        .send(book)
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          done();
        });
    });
  });

  describe('/GET books', () => {
    it('it should GET all the books', (done) => {
      chai.request(server)
        .get('/books')
        .set('Authorization', `Bearer ${token}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          done();
        });
    });

    it('it should GET a book by the given id', (done) => {
      const book = new Book({
        title: 'Test Book',
        author: 'Test Author',
        genre: 'Test Genre',
        description: 'Test Description',
        publicationYear: 2022,
        coverUrl: 'http://example.com/cover.jpg'
      });
      book.save((err, book) => {
        chai.request(server)
          .get(`/books/${book.id}`)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql('Test Book');
            done();
          });
      });
    });
  });

  describe('/PUT/:id book', () => {
    it('it should UPDATE a book given the id', (done) => {
      const book = new Book({
        title: 'Test Book',
        author: 'Test Author',
        genre: 'Test Genre',
        description: 'Test Description',
        publicationYear: 2022,
        coverUrl: 'http://example.com/cover.jpg'
      });
      book.save((err, book) => {
        chai.request(server)
          .put(`/books/${book.id}`)
          .set('Authorization', `Bearer ${token}`)
          .send({ title: 'Updated Book' })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('title').eql('Updated Book');
            done();
          });
      });
    });
  });

  describe('/DELETE/:id book', () => {
    it('it should DELETE a book given the id', (done) => {
      const book = new Book({
        title: 'Test Book',
        author: 'Test Author',
        genre: 'Test Genre',
        description: 'Test Description',
        publicationYear: 2022,
        coverUrl: 'http://example.com/cover.jpg'
      });
      book.save((err, book) => {
        chai.request(server)
          .delete(`/books/${book.id}`)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            res.body.should.have.property('message').eql('Book deleted successfully');
            done();
          });
      });
    });
  });
});
