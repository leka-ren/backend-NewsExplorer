const Article = require('../models/article');
const BadRequest = require('../customErrors/badRequest');

module.exports.getArticles = (req, res, next) => {
  Article.find({})
    .then((articles) => res.status(200).send({ data: articles }))
    .catch(next);
};

module.exports.createArticle = (req, res, next) => {
  // eslint-disable-next-line object-curly-newline
  const { keyword, title, text, date, source, link, image } = req.body;
  const owner = req.user._id;

  // eslint-disable-next-line object-curly-newline
  Article.create({ keyword, title, text, date, source, link, image, owner })
    .then((article) => res.status(200).send({ data: 'Article create' }))
    // eslint-disable-next-line no-unused-vars
    .catch((e) => {
      next(new BadRequest('validation link failed'));
    });
};

module.exports.deleteArticle = (req, res, next) => {
  Article.findByIdAndRemove(req.params.id)
    .then((article) => {
      if (article !== null) res.send({ data: article });
    })
    .catch(next);
};
