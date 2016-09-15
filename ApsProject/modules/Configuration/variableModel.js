/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('variable', {
    vaoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    meoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'metric',
        key: 'meoid'
      }
    },
    vaname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    vatypevalue: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'variable'
  });
};
