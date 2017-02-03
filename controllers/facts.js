var Student = require('../models/student');

module.exports = {
  create: create,
  delete: del
};

function create(req, res) {
  Student.findById(req.user.id, function(err,student) {
    student.facts.push({text: req.body.fact});
    student.save(function(err) {
      res.json(student);
    });
  });
}

function del(req, res) {
  req.user.facts.remove(req.params.id);
  req.user.save(function(err) {
    res.json({msg: 'deleted fact'});
  });
}
