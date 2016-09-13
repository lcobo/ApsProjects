/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('optionquestion', {
    oqoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    quoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'question',
        key: 'quoid'
      }
    },
    oqdescription: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'optionquestion'
  });
};
