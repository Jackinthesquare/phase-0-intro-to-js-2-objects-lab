// Write your solution in this file!
const employee = {name: 'Sam',
                  streetAddress: '123 Fake St'};
const updateEmployeeWithKeyAndValue = () => {
    const newEmployee = {...employee}
    newEmployee.streetAddress = '11 Broadway'
    return newEmployee
}

const destructivelyUpdateEmployeeWithKeyAndValue = () => {
    employee.streetAddress = '12 Broadway'
    return employee
}

const deleteFromEmployeeByKey = () => {
    const newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}

const destructivelyDeleteFromEmployeeByKey = () => {
    delete employee.name
    return employee
}