module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Symbols', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      symbol: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      path: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tick: {
        type: DataTypes.FLOAT,
        defaultValue: 1
      },
      tickValue: {
        type: DataTypes.FLOAT,
        defaultValue: 1
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

  down: (queryInterface) => {
    return queryInterface.dropTable('Symbols');
  }
};