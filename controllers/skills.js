const Skills = require('../models/skill');

module.exports = {
  index,
  show,
  new: newSkills,
  create,
  delete: deleteSkill,
  edit,
  update,
};

function index(req, res) {
  res.render('skills/index', {
    skills: Skills.getAll()
  });
}

function show(req, res) {
  const skills = Skills.getOne(req.params.id);
  res.render('skills/show', { skills });
}

function newSkills(req, res) {
  res.render('skills/new');
}

function create(req, res) {
  console.log(req.body);
  Skills.create(req.body);
  res.redirect('/skills');
}

function deleteSkill(req, res) {
  Skills.deleteOne(req.params.id);
  res.redirect('/skills');
}

function edit(req, res) {
  const skills = Skills.getOne(req.params.id);
  res.render('skills/edit', { skills });
}

function update(req, res) {
  req.body.done === !!req.body.done;
  Skills.update(req.params.id, req.body);
  res.redirect(`/skills/${req.params.id}`);
}