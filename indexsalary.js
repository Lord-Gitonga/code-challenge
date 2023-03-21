// // Challenge 3 

// // Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 
// declaring variables
let basicSlary, benefits, payee, NHIFDeductions, NSSFDeductions, grossSalary, netSalary;

// prompt user to enter basic salary

basicSlary = parseFloat(prompt("Enter your basic salary"));

// prompt user to enter benefits

benefits = parseFloat(prompt("Enter benefits"));

//prompt user to enter payee

payee = Math.floor((basicSlary + benefits)*0.25);

//prompt user to enter NHIFDeductions

NHIFDeductions = Math.floor((basicSlary * 0.03));

//prompt user to enter NSSFDeductions

NSSFDeductions = Math.floor((basicSlary * 0.05));

//prompt user to enter grossSalary

grossSalary = Math.floor(basicSlary + benefits);

//prompt user to enter netSalary

netSalary = grossSalary - payee - NHIFDeductions - NSSFDeductions;

// Showing the net salary
console.log(window.alert(`Your P.A.Y.E IS ${payee}`));
console.log(window.alert(`Your NHIF Deduction IS ${NHIFDeductions}`));
console.log(window.alert(`Your NSSF Deduction IS ${NSSFDeductions}`));
console.log(window.alert(`Your gross salary IS ${grossSalary}`));
console.log(window.alert(`Your net salary IS ${netSalary}`));