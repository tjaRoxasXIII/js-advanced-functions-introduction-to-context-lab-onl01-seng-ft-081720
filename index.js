// Your code here
let createEmployeeRecord = function(arr) {
    return {
        firstName: arr[0],
        familyName: arr[1],
        title: arr[2],
        payPerHour: arr[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

let createEmployeeRecords = function(nest_arr) {
    let records = []
    for(const arr of nest_arr) {
        records.push(createEmployeeRecord(arr))
    }
    return records
}

let createTimeInEvent = function(employeeRec, timeIn) {
    let inObj = {
        type: 'TimeIn',
        hour: timeIn.split(' ')[1].parseInt(),
        date: timeIn.split(' ')[0]
    }
    employeeRec.timeInEvents.push(inObj)
    return employeeRec
}