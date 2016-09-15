/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('metric', {
    meoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    atoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'attribute',
        key: 'atoid'
      }
    },
    mename: {
      type: DataTypes.STRING,
      allowNull: false
    },
    meformula: {
       type: DataTypes.STRING,
      allowNull: false
    },
    mevaluemax: {
      type: 'NUMERIC',
      allowNull: false
    },
    mevaluemin: {
      type: 'NUMERIC',
      allowNull: false
    },
    melinebasevalref: {
      type: DataTypes.STRING,
      allowNull: true
    },
    metipeindicador: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'metric'
  });
};
