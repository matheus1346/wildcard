module.exports = (sequelize, DataTypes) => {
  const Wallet = sequelize.define('Wallet', {
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
  });

  //Wallet.hasMany(Symbol);
  return Wallet;
}