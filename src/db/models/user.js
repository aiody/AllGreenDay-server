'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    toJSON() {
      const values = Object.assign({}, this.get());
      return {
        id: values.id,
        oAuthId: values.oAuthId
      };
    }

    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      oAuthId: {
        allowNull: true,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'user'
    }
  );
  return user;
};
