import express from 'express';
import User from './database/user.model';
import { Sequelize,Op,Utils, QueryTypes,TableHints, IndexHints, DataTypes, Deferrable } from 'sequelize';
import fs from 'fs';
//https://github.com/kriasoft/node-sqlite 
const router = express.Router();

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const data = fs.readFileSync('info.txt', 'utf-8')
  const rr = req.query.query_string
  //ça donne une base
  let  cuser = await User
  .findOne({
    where : {
     [Op.or]: [
      { name: { [Op.like]: `%${req.params.id}%` } },
     ]
   }
   }) 
  
  if (cuser ) {
    console.log(cuser)
    res.json(cuser)
  }else{
    const count = await User.count();
    const str = "User_" + String(count) 
    const user = await User.create({name : req.params.id, email : str+data });
    res.json(user);
  }
 
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
