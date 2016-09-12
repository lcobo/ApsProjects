/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subdimension', {
    suoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    suname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dioid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'dimension',
        key: 'dioid'
      }
    }
  }, {
    tableName: 'subdimension'
  });
};
