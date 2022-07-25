const { StatusCodes } = require('http-status-codes')
const NotFoundError = require('../errors/notFoundError')
const empService = require('../services/employeeService')
const { Op } = require("sequelize");
const db = require('../models/index')
const Employee = db.employee
const Package = db.package


const getEmpDetails = async (req, res) => {
  const { is_active, designation, name, level, filter } = req.query
  const queryObject = {}
  if (name) {
    queryObject.name = { [Op.like]: `%${name}%` }
  }

  if (is_active) {
    queryObject.is_active = is_active
  }

  if (designation) {
    queryObject.designation = { [Op.like]: `%${designation}%` }
  }
  if (level) {
    queryObject.level = { [Op.like]: `%${level}%` }
  }

  if (filter) {
    //lpa>350000

    // [Op.gt]: 6,              // > 6
    // [Op.gte]: 6,             // >= 6
    // [Op.lt]: 10,             // < 10
    // [Op.lte]: 10,            // <= 10
    const opertorMap = {
      '>': `gt`,
      '>=': 'gte',
      '=': 'eq',
      '<': 'lt',
      '<=': 'lte',
    }
    const regEx = /\b(<|>|>=|=|<|<=)\b/g
    let filters = filter.replace(regEx, (match) => `-${opertorMap[match]}-`)
    let [field, operator, value] = filters.split('-')

    if (operator === 'gt') {
      queryObject.lpa = { [Op.gt]: value }
    } else if (operator === 'gte') {
      queryObject.lpa = { [Op.gte]: value }
    } else if (operator === 'lt') {
      queryObject.lpa = { [Op.lt]: value }
    } else if (operator === 'lte') {
      queryObject.lpa = { [Op.lte]: value }
    } else if (operator === 'eq') {
      queryObject.lpa = { [Op.eq]: value }
    }

    const packages = await Employee.findAll({
      where: {},
      attributes: ["id", "name", "level", "designation"],
      include: [
        {
          model: Package,
          as: "package",
          where: { ...queryObject },
          attributes: ["lpa", "year"]
        }]
    })
    if (packages.length == 0) throw new NotFoundError("result not found")
    return res.status(StatusCodes.OK).json({ packages, nbHits: packages.length })
  }

  console.log("Query : ", { where: { ...queryObject } });

  // let employees = await Employee.findAll({ where: { ...queryObject }, attributes: ["id", "name", "phoneNumber", "doj", "dob", "level", "designation"] })

  let employees = await Employee.findAll({
    where: {
      name: { [Op.like]: `%${name}%` },
      isActive: is_active,
      designation: { [Op.like]: `%${designation}%` },
      level: { [Op.like]: `%${level}%` }
    },
    attributes: ["id", "name", "phoneNumber", "doj", "dob", "level", "designation", "isActive"]
  })

  if (employees.length == 0) throw new NotFoundError("result not found")
  return res.status(StatusCodes.OK).json({ employees, nbHits: employees.length })
}

const createEmp = async (req, res) => {
  const emp = await empService.createEmp(req.params.id, req.body)
  return res.status(StatusCodes.CREATED).json(emp)
}

const updateEmp = async (req, res) => {
  const emp = await empService.updateEmp(req.params.id, req.body)
  if (!Number(emp)) {
    throw new NotFoundError("item not found")
  } else {
    return res.status(StatusCodes.OK).json("Successfully Updated")
  }
}

const deleteEmp = async (req, res) => {
  const emp = await empService.deleteEmp(req.params.id)
  if (!emp) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json("Successfully Deleted")
}

const getEmp = async (req, res) => {
  const emp = await empService.getEmp(req.params.id)
  if (!emp) throw new NotFoundError("item not found")
  return res.status(StatusCodes.OK).json(emp)
}












module.exports = { createEmp, updateEmp, deleteEmp, getEmp, getEmpDetails }