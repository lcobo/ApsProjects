/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('subfeature', {
    sfoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    sfname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    feoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'feature',
        key: 'feoid'
      }
    }
  }, {
    tableName: 'subfeature'
  });
};
