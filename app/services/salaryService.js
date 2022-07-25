const NotFoundError = require('../errors/notFoundError')
const salaryRepo = require('../reposotires/salaryRepo')
const db = require('../models/index')
const package = db.package

const createSalary = async (empId, data) => {
  const employee = await package.findOne({
    where: {
      empId: empId
    }
  })
  if (!employee) throw new NotFoundError("package not found for the employee")
  const lpaAmount = employee.lpa
  const grossAmount = Math.floor(lpaAmount / 12)
  const incentive = Math.floor(grossAmount * data.monthlyIncentive / 100)
  const amount = grossAmount + incentive
  const deduction = () => {
    if (lpaAmount < 500000) {
      return 0
    } else if (lpaAmount >= 500000 && lpaAmount < 1000000) {
      return 5
    } else if (lpaAmount >= 1000000 && lpaAmount < 1500000) {
      return 10
    } else {
      return 15
    }
  }

  let taxpercent = deduction()
  const tax = amount * taxpercent / 100
  const netAmount = amount - tax
  return await salaryRepo.createSalary({
    grossEarnings: grossAmount,
    monthlyIncentive: incentive,
    date: data.date,
    tax: tax,
    netSalary: netAmount,
    empId: Number(empId)
  })
}

const getSalary = async (id) => {
  return await salaryRepo.getSalary(id)
}

const getEmpSal = async (id) => {
  return await salaryRepo.getEmpSal(id)
}

module.exports = { createSalary, getSalary, getEmpSal }