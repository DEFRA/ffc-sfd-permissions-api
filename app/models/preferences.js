module.exports = (sequelize, DataTypes) => {
  return sequelize.define('preferences', {
    sbi: { type: DataTypes.INTEGER, primaryKey: true },
    preferenceType: DataTypes.STRING
  },
  {
    tableName: 'preferences',
    freezeTableName: true,
    timestamps: false
  })
}
