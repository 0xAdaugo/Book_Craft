const redisClient = require('../config/redisConfig');

const checkCache = (req, res, next) => {
  const { id } = req.params;

  redisClient.get(id, (err, data) => {
    if (err) throw err;

    if (data) {
      res.send(JSON.parse(data));
    } else {
      next();
    }
  });
};

module.exports = checkCache;
