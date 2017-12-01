module.exports = (req, res, next) => {
  res.locals.responseText = 'Hello World!';
  next();
};
