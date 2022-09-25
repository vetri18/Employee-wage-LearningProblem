console.log("Welcome to the Employee Wage Computation problem in Java Script");

const IS_ABSENT=0;
const WAGE_PER_HOUR=20;
const TOTAL_WORKING_DAYS=20;
const TOTAL_WORKING_HOURS=100;

let totalEmpHours=0;
let employeeWage=0;
let workingDay=0;


while(workingDay<TOTAL_WORKING_DAYS && totalEmpHours<TOTAL_WORKING_HOURS)
{
    workingDay++;
    let emp_hours=getEmpHours();
    totalEmpHours+=emp_hours;
    console.log("Day"+(workingDay)+" Employee Wage: "+WAGE_PER_HOUR*emp_hours);
    employeeWage= WAGE_PER_HOUR*totalEmpHours;
}

console.log("total work hours: "+totalEmpHours);
console.log("total emp wage: "+employeeWage);
console.log("total working days: "+workingDay);



function getEmpHours()
{
    let emp_hours=0;
    let checkEmp = Math.floor((Math.random()*10)%3);

    switch(checkEmp)
{
    case 1:
        //console.log("employee is present for part time");
        emp_hours=4;
        return emp_hours;
    case 2:
        //console.log("employee is present for full time");
        emp_hours=8;
        return emp_hours;
    default:
        //console.log("employee is absent");
        return emp_hours;
}
}