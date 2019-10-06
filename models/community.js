module.exports = function(sequelize, DataTypes) {
    var Resources = sequelize.define("Resources", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false
      },
      resourceLink: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          isUrl:true
        }
      },
      photoLink: {
        type: DataTypes.STRING,
        allowNull: true,
        validate:{
          isUrl:true
        }
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false
      },
      dateCreated: {
        type: DataTypes.DATE,
        allowNull:false
      },
    });
    return Resources;
  };
  