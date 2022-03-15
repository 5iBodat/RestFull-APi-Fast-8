import Employees from '../models/EmployeesModel.js'
import { employeesScema } from '../config/Validation.js';

export const getEmployeesById = async (req, res) => {
    try {
        const result = await Employees.findOne({
            where: {
                id: req.params.id
            },
            attributes: ['id', 'name', 'email', 'phone_number', 'job_title']
        });
        if (!result)
            return res.status(422).json({
                status: 422,
                code: '422',
                data: null,
                message: 'Data is not found'
            })
        res.status(200).json({
            status: 200,
            code: '200',
            data: result,
            message: 'success'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: error.message
        })
    }
}

export const addEmployees = async (req, res) => {
    const id = req.params.id
    try {
        const result = await employeesScema.validateAsync(req.body);
        const checkEmail = await Employees.findOne({
            where: {
                email: result.email
            }
        })
        if (checkEmail)
            return res.status(409).json({
                status: 409,
                code: '409',
                data: null,
                message: 'Email already exist'
            })

        const newEmployees = await Employees.create({
            name: result.name,
            email: result.email,
            phone_number: result.phone_number,
            job_title: result.job_title,
            company_id: id
        })
        res.status(201).json({
            status: 201,
            code: '201',
            data: { id: newEmployees.id, company_id: newEmployees.company_id },
            message: 'success'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: error.message
        })
    }
}

export const deleteEmployees = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Employees.destroy({
            where: {
                id: id
            }
        })
        if (!result)
            return res.status(422).json({
                status: 422,
                code: '422',
                data: null,
                message: 'Data is not found'
            })
        res.status(200).json({
            status: 200,
            code: '200',
            data: null,
            message: 'success'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: error.message
        })
    }
}

