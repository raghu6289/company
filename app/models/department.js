module.exports=(Sequelize,DataTypes)=>{
    const department=Sequelize.define("department",{
        // id:{
        //     type:DataTypes.INTEGER,
        //     allowNull:false,
        //     primaryKey:true,
        //     autoIncrement:true
        // },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    },{
        paranoid:true,
        timestamp: true,
        underscored:true
    })
    return department
}