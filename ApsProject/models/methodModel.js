/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('method', {
    mtoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    mtname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mtdescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    meoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'methodology',
        key: 'meoid'
      }
    }
  }, {
    tableName: 'method'
  });
};
