/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('person', {
    peoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    peidentify: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pename: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pesurname: {
      type: DataTypes.STRING,
      allowNull: true
    },
    pestudies: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    peprofdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    pemail: {
      type: DataTypes.STRING,
      allowNull: true
    },
    petelephon: {
      type: 'NUMERIC',
      allowNull: true
    }
  }, {
    tableName: 'person'
  });
};
