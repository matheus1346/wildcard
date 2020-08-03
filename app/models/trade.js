module.exports = (sequelize, DataTypes) => {
  const Trade = sequelize.define('Trade', {
    symbol_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    buy: DataTypes.FLOAT,
    sell: DataTypes.FLOAT,
    direction: DataTypes.TINYINT,
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1
    },
    takeProfit: DataTypes.FLOAT,
    stopLoss: DataTypes.FLOAT,
    dateStart: DataTypes.DATE,
    dataEnd: DataTypes.DATE,
    commentary: DataTypes.TEXT,
    screenshot: DataTypes.BLOB
  });

  return Trade;
}