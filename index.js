const employee= {
    name: "Sam",
    streetAddress: "11 Broadway",
};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee= {...employee};
    newEmployee[key]= value;
    return newEmployee;
}
function destructivelyUpdateObject(employee, key, value)
{
    employee[key]=value;
    return employee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    const newKeyAndValue= destructivelyUpdateObject(employee, key, value)
    return newKeyAndValue;   
}
function deleteFromEmployeeByKey(employee, key){
    const deleteKey= {...employee[key]};
    delete deleteKey[key];
    return deleteKey;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}