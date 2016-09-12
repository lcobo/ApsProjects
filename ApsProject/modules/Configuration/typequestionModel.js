/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('typequestion', {
    tqoid: {
      type: 'NUMERIC',
      allowNull: false,
      defaultValue: 'nextval(tipequestion_seq::regclass)'
    },
    tqdescription: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tqstate: {
      type: 'NUMERIC',
      allowNull: false
    }
  }, {
    tableName: 'typequestion'
  });
};
