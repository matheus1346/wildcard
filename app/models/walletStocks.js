module.exports = (sequelize, DataTypes) => {
  const WalletStocks = sequelize.define('WalletStocks', {
    symbol_id: DataTypes.INTEGER,
    buy: DataTypes.FLOAT,    
    sell: DataTypes.FLOAT,
    direction: {
      type: DataTypes.TINYINT,
      defaultValue: 1
    },
    quantity: DataTypes.FLOAT,
    closedAt: DataTypes.DATE
  });

  return WalletStocks;
}