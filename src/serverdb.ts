import express from 'express';
import userRoutes from './user.routes';
import sequelize from './database/index';


const app = express();
app.use(express.json());
app.use('/users', userRoutes);

const initDB = (resetter : boolean)=>{
  (async () => 
  {
    await sequelize
    .sync({ force: resetter }) //base vide au dem
    //.then(() => { User.create({ name: 'user1',email: 'email1', }) })  
  })();
}
initDB(false)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
