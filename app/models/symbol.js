module.exports = (sequelize, DataTypes) => {
  const Symbol = sequelize.define('Symbol', {
    symbol: DataTypes.STRING,
    name: DataTypes.STRING,
    path: DataTypes.STRING,
  });

  return Symbol;
}