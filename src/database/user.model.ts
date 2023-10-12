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





export default User
