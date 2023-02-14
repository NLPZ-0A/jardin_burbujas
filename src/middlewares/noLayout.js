const noLayout = (req, res, next) => {
    res.locals.layout = false;
    next();
  }

module.exports = {noLayout}