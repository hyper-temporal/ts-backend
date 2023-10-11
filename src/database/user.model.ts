import { Model, DataTypes } from 'sequelize';
import sequelize from './index';
'use strict';

class User extends Model { }

User
.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  },{
    sequelize,
    modelName: 'User',
    tableName: 'users',
  },
)
.afterSave(()=> { console.log('db saved') });
//if db not initialized ...

(async () => 
{
  await sequelize
  .sync({ force: false }) //base vide au dem
  //.then(() => { User.create({ name: 'user1',email: 'email1', }) })  
})();

  

export default User;
