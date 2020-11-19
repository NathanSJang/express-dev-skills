const skills = [
  {id: 125223, skill: 'HTML', done: true},
  {id: 127904, skill: 'CSS', done: true},
  {id: 139608, skill: 'Java Script', done: true},
  {id: 139695, skill: 'Node Js', done: false},
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getAll() {
  return skills;
}

function getOne(id) {
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skill.done = false;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex(s => s.id === id);
  skills.splice(idx, 1);
}

function update(id, upadatedSkill) {
  id = parseInt(id);
  const skill = skills.find(skill => skill.id);
  Object.assign(skill, upadatedSkill);
}