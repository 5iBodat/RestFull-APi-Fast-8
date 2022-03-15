import { Sequelize } from "sequelize"
import db from "../config/Database.js"
import Companies from "./CompaniesModel.js";

const { DataTypes } = Sequelize;

const Employees = db.define("employees", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone_number: {
        type: DataTypes.STRING(16),
        defaultValue: null,
        allowNull: true,
    },
    jobtitle: {
        type: DataTypes.ENUM('manager', 'director', 'staff'),
        defaultValue: 'staff',
        allowNull: false
    },
    company_id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    }
}, {
    freezeTableName: true,
})

Companies.hasMany(Employees, { foreignKey: 'company_id' })

export default Employees;