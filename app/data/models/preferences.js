module.exports = (sequelize, DataTypes) => {
  return sequelize.define('preference', {
    sbi: { type: DataTypes.INTEGER, primaryKey: true },
    preference: DataTypes.STRING
  },
  {
    tableName: 'preferences',
    freezeTableName: true,
    timestamps: false
  })
}
