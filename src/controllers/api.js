exports.health = (req, res) => {
  res.json({
    status: 'OK'
  });
};

exports.root = (req, res) => {
  res.json({
    response: res.locals.responseText
  });
};
