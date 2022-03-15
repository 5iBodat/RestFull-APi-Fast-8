import { Sequelize } from "sequelize"
import db from "../config/Database.js"
import Employees from "./EmployeesModel.js";

const { DataTypes } = Sequelize;

const Companies = db.define("companies", {
    id: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    company_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    telephone_number: {
        type: DataTypes.STRING(16),
        defaultValue: null,
        allowNull: true

    },
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
}, {
    freezeTableName: true,
})

export default Companies;