import express from "express";
import db from "./config/Database.js";
import Employees from "./models/EmployeesModel.js";
import Companies from "./models/CompaniesModel.js";
import router from "./router/router.js";
import dotenv from "dotenv";
const app = express();

dotenv.config();

try {
    await db.authenticate();
    console.log('db connected');
    // await db.sync(Employees);
    // await db.sync(Companies);

} catch (error) {
    console.log(error);
}
app.use(express.json());
app.use(router)

app.listen(5000, () => console.log("Server started on port 5000"));