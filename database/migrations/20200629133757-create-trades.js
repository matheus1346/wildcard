module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Trades', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      symbol_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      user_id: {
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
      takeProfit: {
        type: DataTypes.FLOAT
      },
      stopLoss: {
        type: DataTypes.FLOAT
      },
      dateStart: {
        type: DataTypes.DATE
      },
      dateEnd: {
        type: DataTypes.DATE
      },
      commentary: {
        type: DataTypes.TEXT
      },
      screenshot:{
        type: DataTypes.BLOB
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
    return queryInterface.dropTable('Trades');
  }
};
