const { StatusCodes } = require('http-status-codes')

const errorHandler = (err, req, res, next) => {
  const Error = {
    msg: err.message || 'something went wrong please try again later',
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
  }

  if (err.name == "SequelizeForeignKeyConstraintError") {
    Error.msg = `${err.table} not found`
    Error.statusCode = StatusCodes.NOT_FOUND
  }
  return res.status(Error.statusCode).json({ msg: Error.msg })
}

module.exports = errorHandler