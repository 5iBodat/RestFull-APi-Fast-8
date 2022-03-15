import express from 'express';
import { Combination } from '../controllers/combination.js';
import { Fibonacci } from '../controllers/fibonacci.js';
import { createCompanies, getCompanies, getEmployeesByCompanyId, setActive, updateEmployees } from '../controllers/companies.js'
import { getEmployeesById, addEmployees, deleteEmployees } from '../controllers/employees.js';
import { getCountry } from '../controllers/country.js';
const router = express.Router();

router.get('/', () => {
    console.log('hallo world');
});

router.post('/api/fibonaci', Fibonacci)
router.post('/api/combination', Combination)

router.get('/api/companies', getCompanies)
router.post('/api/companies', createCompanies)
router.put('/api/companies/:id/set_active', setActive)
router.get('/api/companies/:id/employees', getEmployeesByCompanyId)
router.put('/api/companies/:company_id/employees/:employee_id', updateEmployees)

router.get('/api/employees/:id', getEmployeesById)
router.post('/api/companies/:id/employees', addEmployees)
router.delete('/api/employees/:id', deleteEmployees)

router.get('/api/countries', getCountry)

export default router;