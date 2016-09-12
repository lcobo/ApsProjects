/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rolesubdimension', {
    rsoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    suoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'subdimension',
        key: 'suoid'
      }
    },
    rooid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'role',
        key: 'rooid'
      }
    }
  }, {
    tableName: 'rolesubdimension'
  });
};
