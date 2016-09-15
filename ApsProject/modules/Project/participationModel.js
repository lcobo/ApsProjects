/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('participation', {
    proid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    faoid: {
      type: 'NUMERIC',
      allowNull: false
    },
    phoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'PHCPhase',
        key: 'phoid'
      }
    }
  }, {
    tableName: 'participation'
  });
};
