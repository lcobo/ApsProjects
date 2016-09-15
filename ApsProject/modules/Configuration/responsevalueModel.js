/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('responsevalue', {
    rvoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    vaoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'variable',
        key: 'vaoid'
      }
    },
    rvvalue: {
      type: 'NUMERIC',
      allowNull: false
    },
    rvdate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'user',
        key: 'usoid'
      }
    }
  }, {
    tableName: 'responsevalue'
  });
};
