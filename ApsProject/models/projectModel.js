/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('project', {
    proid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    prname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    prstatus: {
      type: DataTypes.STRING,
      allowNull: true
    },
    prdateend: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'project'
  });
};
