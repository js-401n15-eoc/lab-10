'use strict';

module.exports = (req, res, next) => {
  let modelName = req.params.model;
  // should probably use fs.readdir instead, but this will hve to do for now
  req.model = require(`../models/${modelName}/${modelName}-collection.js`);
  next();
};
