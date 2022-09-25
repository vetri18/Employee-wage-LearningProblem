console.log("Welcome to the Employee Wage Computation problem in Java Script");

let checkEmp = Math.floor((Math.random()*10)%3);
const IS_ABSENT=0;
const WAGE_PER_HOUR=20;

let emp_hours=0;

switch(checkEmp)
{
    case 1:
        console.log("Employee is present for part time");
        emp_hours=4;
        break;
    case 2:
        console.log("Employee is present for full time");
        emp_hours=8;
        break;
    default:
        console.log("Employee is absent");
        break;
}
let employeeWage= WAGE_PER_HOUR*emp_hours;
console.log("Employee Wage: "+employeeWage);