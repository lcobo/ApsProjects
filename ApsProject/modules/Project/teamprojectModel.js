/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teamproject', {
    tpoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    proid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'project',
        key: 'proid'
      }
    },
    usoidleader: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'user',
        key: 'usoid'
      }
    },
    usoidtech: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'user',
        key: 'usoid'
      }
    }
  }, {
    tableName: 'teamproject'
  });
};
