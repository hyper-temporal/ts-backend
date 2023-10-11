import express from 'express';
import User from './database/user.model';
//c'est la que nos routes se separent lol...
//https://github.com/kriasoft/node-sqlite 
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.json(user);
});

router.post('/', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.create({ name, email });
  res.json(user);
});

router.put('/:id', async (req, res) => {
  const { name, email } = req.body;
  const user = await User.findByPk(req.params.id);
  await user?.update({ name, email });
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id);
  await user?.destroy();
  res.json({ message: 'User deleted successfully!' });
});

export default router;
