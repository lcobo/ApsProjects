/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    quoid: {
      type: 'NUMERIC',
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    qucode: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ququestion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    mtoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'method',
        key: 'mtoid'
      }
    },
    suoid: {
      type: 'NUMERIC',
      allowNull: false,
      references: {
        model: 'subdimension',
        key: 'suoid'
      }
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
    tableName: 'question'
  });
};
