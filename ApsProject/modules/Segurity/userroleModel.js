/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userrole', {
    uroid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    usoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'user',
        key: 'usoid'
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
    tableName: 'userrole'
  });
};
