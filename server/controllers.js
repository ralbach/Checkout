const model = require('./models.js');
module.exports = {

  get: (req, res) => {
    model.getPage((err, result) => {
      if (err){
        res.status(404).json(err);
      } else {
        res.status(200).send(result);
      }
    });
  },

  post: (req, res) => {
    model.postData(req, (err, result) => {
      if(err){
        res.status(404).json(err);
      } else {
        res.status(201).json(result);
      }
    });
  }

}