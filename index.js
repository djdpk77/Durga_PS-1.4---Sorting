const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

//Exercise 1
let numbers = [2, 5, 10, 6, 4];

numbers.sort((number1, number2) => number1 - number2);
console.log(numbers);

//Exercise 2
const ages = [32, 21, 45, 29, 39];
ages.sort((age1, age2) => age1 - age2);

console.log(ages);

//Exercise 3
const prices = [99, 150, 75, 120, 200];
prices.sort((price1, price2) => price2 - price1);

console.log(prices);

//Exercise 4
const projects = [
  { name: 'Project A', duration: 12, status: 'completed' },
  { name: 'Project B', duration: 8, status: 'ongoing' },
  { name: 'Project C', duration: 10, status: 'ongoing' },
  { name: 'Project D', duration: 6, status: 'completed' },
];
let ongoingProjects = projects.filter(
  (project) => project.status === 'ongoing'
);
ongoingProjects.sort(
  (project1, project2) => project1.duration - project2.duration
);

console.log(ongoingProjects);

//Exercise 5
let completedProjects = projects.filter(
  (project) => project.status === 'completed'
);
completedProjects.sort(
  (project1, project2) => project1.duration - project2.duration
);

console.log(completedProjects);

//Exercise 6
let projectsByDuration = projects.sort(
  (project1, project2) => project1.duration - project2.duration
);
console.log(projectsByDuration);

//Exercise 7
const gadgets = [
  { name: 'iPhone', brand: 'Apple', quantity: 2 },
  { name: 'Galaxy S21', brand: 'Samsung', quantity: 5 },
  { name: 'iPad', brand: 'Apple', quantity: 3 },
  { name: 'Pixel 5', brand: 'Google', quantity: 1 },
];

let AppleGadgets = gadgets.filter((gadget) => gadget.brand === 'Apple');
AppleGadgets.sort((gadget1, gadget2) => gadget1.quantity - gadget2.quantity);

console.log(AppleGadgets);

//Exercise 8
const products = [
  { name: 'Laptop', price: 1000 },
  { name: 'Smartphone', price: 800 },
  { name: 'Tablet', price: 600 },
  { name: 'Monitor', price: 300 },
  { name: 'Keyboard', price: 100 },
];

products.sort((product1, product2) => product1.price - product2.price);
console.log(products);

//Exercise 9
const cars = [
  { make: 'Toyota', model: 'Camry', year: 2015 },
  { make: 'Honda', model: 'Accord', year: 2008 },
  { make: 'Tesla', model: 'Model 3', year: 2020 },
  { make: 'Ford', model: 'Fusion', year: 2009 },
];

cars.sort((car1, car2) => car1.year - car2.year);

console.log(cars);

//Exercise 10
const athletes = [
  { name: 'John', score: 85 },
  { name: 'Mike', score: 92 },
  { name: 'Sara', score: 88 },
  { name: 'Linda', score: 95 },
];

let AthletesWithScoreAbove90 = athletes.filter((athlete) => athlete.score > 90);
AthletesWithScoreAbove90.sort(
  (athlete1, athlete2) => athlete1.score - athlete2.score
);

console.log(AthletesWithScoreAbove90);

//Exercise 11
const students = [
  { name: 'Alex', grade: 'B', marks: 75 },
  { name: 'Bella', grade: 'A', marks: 90 },
  { name: 'Chris', grade: 'C', marks: 58 },
  { name: 'Diana', grade: 'A', marks: 80 },
];

let StudentsWithGradeA = students.filter((student) => student.grade === 'A');
StudentsWithGradeA.sort(
  (student1, student2) => student2.marks - student1.marks
);

console.log(StudentsWithGradeA);

//Exercise 12
let employees = [
  { name: 'Raman', department: 'Engineering', salary: 70000 },
  { name: 'Samiksha', department: 'Marketing', salary: 55000 },
  { name: 'Ronak', department: 'Engineering', salary: 50000 },
  { name: 'Kevin', department: 'Marketing', salary: 50000 },
  { name: 'Siddharth', department: 'Sales', salary: 60000 },
];

let EngineeringEmployees = employees.filter(
  (employee) => employee.department === 'Engineering'
);
EngineeringEmployees.sort(
  (employee1, employee2) => employee2.salary - employee1.salary
);
console.log(EngineeringEmployees);

//Exercise 13
let MarketingEmployees = employees.filter(
  (employee) => employee.department === 'Marketing'
);
MarketingEmployees.sort(
  (employee1, employee2) => employee1.salary - employee2.salary
);

console.log(MarketingEmployees);

//Exercise 14
employees = [
  { name: 'Eve', department: 'Engineering', salary: 70000 },
  { name: 'Sam', department: 'Marketing', salary: 55000 },
  { name: 'John', department: 'Engineering', salary: 80000 },
  { name: 'Lucy', department: 'Sales', salary: 60000 },
];

let EmployeesWithSalaryGreaterThan60000 = employees.filter(
  (employee) => employee.salary > 60000
);
EmployeesWithSalaryGreaterThan60000.sort(
  (employee1, employee2) => employee2.salary - employee1.salary
);

console.log(EmployeesWithSalaryGreaterThan60000);

//Exercise 15
let EmployeesWithSalaryLessThan70000 = employees.filter(
  (employee) => employee.salary < 70000
);
EmployeesWithSalaryLessThan70000.sort(
  (employee1, employee2) => employee1.salary - employee2.salary
);
console.log(EmployeesWithSalaryLessThan70000);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
