
import Companies from '../models/CompaniesModel.js'
import Employees from '../models/EmployeesModel.js';
import { companiesScema, employeesScema } from '../config/Validation.js';

export const createCompanies = async (req, res) => {
    try {
        const result = await companiesScema.validateAsync(req.body);

        const checkCompany = await Companies.findOne({
            where: {
                company_name: result.company_name
            }
        })
        if (checkCompany)
            return res.status(409).json({
                status: 409,
                code: '409',
                data: null,
                message: 'Company name already exist'
            })

        const newCompany = await Companies.create({
            company_name: result.company_name,
            telephone_number: result.telephone_number,
            address: result.address
        })

        res.status(201).json({
            status: 201,
            code: '201',
            data: { id: newCompany.id },
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

export const getCompanies = async (req, res) => {
    try {
        const result = await Companies.findAll({
            attributes: ['id', 'company_name', 'telephone_number', 'address', 'is_active']
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
            data: {
                count: result.length,
                rows: result
            },
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

export const setActive = async (req, res) => {
    const id = req.params.id
    try {
        const status = await Companies.findOne({
            where: {
                id: id
            }
        })
        if (!status)
            return res.status(422).json({
                status: 422,
                code: '422',
                data: null,
                message: 'Data is not found'
            })
        if (status.is_active == true)
            return res.status(400).json({
                status: 400,
                code: '400',
                data: null,
                message: 'Company is already active'
            })

        const result = await Companies.update({
            is_active: true
        }, {
            where: {
                id: id
            }
        })
        res.status(200).json({
            status: 200,
            code: '200',
            data: {
                id: id,
                is_active: true
            },
            message: 'success'
        })
    } catch (err) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: err.message
        })
    }
}

export const getEmployeesByCompanyId = async (req, res) => {
    const id = req.params.id
    try {
        const result = await Companies.findOne({
            include: [{
                model: Employees,
                as: 'employees',
                attributes: ['id', 'name', 'email', 'phone_number', 'jobtitle']
            }],
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
            data: result,
            message: 'success'
        })
    } catch (err) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: err.message
        })
    }
}

export const updateEmployees = async (req, res) => {
    const { company_id, employee_id } = req.params
    try {
        const validate = await employeesScema.validateAsync(req.body);
        const result = await Companies.findOne({
            include: [{
                model: Employees,
                as: 'employees',
                where: {
                    id: employee_id
                }
            }],
            where: {
                id: company_id
            }
        })
        if (!result)
            return res.status(422).json({
                status: 422,
                code: '422',
                data: null,
                message: 'Data is not found'
            })

        const checkEmail = await Employees.findOne({
            where: {
                email: validate.email
            }
        })
        if (checkEmail)
            return res.status(409).json({
                status: 409,
                code: '409',
                data: null,
                message: 'Email already exist'
            })

        const updateEmployee = await Employees.update({
            name: validate.name,
            email: validate.email,
            phone_number: validate.phone_number,
            jobtitle: validate.jobtitle
        }, {
            where: {
                id: employee_id
            }
        })
        res.status(201).json({
            status: 201,
            code: '201',
            data: {
                id: employee_id,
                company_id: company_id,
            },
            message: 'success'
        })
    } catch (err) {
        res.status(400).json({
            status: 400,
            code: '400',
            data: null,
            message: err.message
        })
    }
}