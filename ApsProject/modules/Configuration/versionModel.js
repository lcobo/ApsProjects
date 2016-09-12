/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('version', {
    veoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    venumber: {
      type: 'NUMERIC',
      allowNull: false
    }
  }, {
    tableName: 'version'
  });
};
