console.log("Welcome to the Employee Wage Computation problem in Java Script");

const IS_ABSENT=0;
const WAGE_PER_HOUR=20;
const TOTAL_WORKING_DAYS=20;

for(i=0;i<TOTAL_WORKING_DAYS;i++)
{
    let employeeWage= WAGE_PER_HOUR*getEmpHours();
    console.log("Employee Day"+(i+1)+" Wage: "+employeeWage);
}



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