import {Router} from "express";
import {createCompany, deleteCompany, getCompanies, getCompany} from "../controller/car-company.js";

const r = Router()

r.get('/', getCompanies)
r.get('/:id', getCompany)
r.post('/', createCompany)
r.post('/:id', deleteCompany)

export default r