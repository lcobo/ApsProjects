/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dimension', {
    dioid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    diname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'dimension'
  });
};
