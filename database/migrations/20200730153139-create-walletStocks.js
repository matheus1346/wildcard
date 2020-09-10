module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('WalletStocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      wallet_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      symbol_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },      
      buy: {
        type: DataTypes.FLOAT
      },
      sell: {
        type: DataTypes.FLOAT
      },      
      direction: {
        type: DataTypes.TINYINT
      },      
      quantity: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      dateStart: {
        type: DataTypes.DATE
      },
      dateEnd: {
        type: DataTypes.DATE
      },      
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('WalletsStocks');
  }
};
