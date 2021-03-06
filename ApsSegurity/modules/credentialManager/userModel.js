module.exports = function (sequelize, DataTypes) {
    var user = sequelize.define("user", {
      
usoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    uspassword: {
      type: DataTypes.STRING,
      allowNull: false
    },
    peoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'person',
        key: 'peoid'
      }
    },
    usstatus: {
      type: 'NUMERIC',
      allowNull: false
    }
      });
    return user;
};