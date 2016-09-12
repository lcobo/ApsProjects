/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('facility', {
    faoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    faname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tfoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'typefacility',
        key: 'tfoid'
      }
    }
  }, {
    tableName: 'facility'
  });
};
