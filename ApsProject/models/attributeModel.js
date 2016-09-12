/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('attribute', {
    atoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    atname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sfoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'subfeature',
        key: 'sfoid'
      }
    }
  }, {
    tableName: 'attribute'
  });
};
