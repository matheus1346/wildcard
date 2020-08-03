module.exports = (sequelize, DataTypes) => {
  const Symbol = sequelize.define('Symbol', {
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    tick: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    tickValue: {
      type: DataTypes.FLOAT,
      defaultValue: 1
    }
  });

  return Symbol;
}