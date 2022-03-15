import Joi from 'joi';

export const companiesScema = Joi.object({
    company_name: Joi.string().required().min(3).max(50).messages({
        'string.empty': 'company_name is required',
        'string.min': 'company_name must be at least 3 characters',
        'string.max': 'company_name must be less than 50 characters',
    }),
    telephone_number: Joi.string().required().min(8).max(16).messages({
        'string.empty': 'telephone_number is required',
        'string.min': 'telephone_number must be at least 8 characters',
        'string.max': 'telephone_number must be less than 16 characters',
    }),
    address: Joi.string().required().min(10).max(50).messages({
        'string.empty': 'address is required',
        'string.min': 'address must be at least 10 characters',
        'string.max': 'address must be less than 50 characters',
    }),
})

export const employeesScema = Joi.object({
    name: Joi.string().required().min(2).max(50).messages({
        'string.empty': 'name is required',
        'string.min': 'name must be at least 2 characters',
        'string.max': 'name must be less than 50 characters',
    }),
    email: Joi.string().required().email().min(5).max(255).messages({
        'string.empty': 'email is required',
        'string.email': 'email is invalid',
        'string.min': 'email must be at least 5 characters',
        'string.max': 'email must be less than 255 characters',
    }),
    phone_number: Joi.string().required().min(8).max(16).messages({
        'string.empty': 'phone_number is required',
        'string.min': 'phone_number must be at least 8 characters',
        'string.max': 'phone_number must be less than 16 characters',
    }),
    jobtitle: Joi.string().valid('manager', 'director', 'staff').messages({
        'string.valid': 'job_title must be one of the following: manager, director, staff',
    })
})
