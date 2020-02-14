const Symbol = require("./symbol");

module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    buy: DataTypes.FLOAT,
    sell: DataTypes.FLOAT,
  });

  //Wallet.hasMany(Symbol);
  return Wallet;
}