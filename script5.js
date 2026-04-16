let employees = [];

function addEmployee() {
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let department = document.getElementById("department").value;

    let employee = {
        name: name,
        id: empId,
        salary: salary,
        department: department
    };

    employees.push(employee);
    alert("Employee added successfully!");
    document.getElementById("name").value = "";
    document.getElementById("empId").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}
function displayEmployees() {
    let output = "<h3>Employee List</h3>";
    employees.forEach(function(employee) {
        output += 
        "<p>Name: " + employee.name + "<br>" +
        "ID: " + employee.id + "<br>" +
        "Salary: " + employee.salary + "<br>" +
        "Department: " + employee.department + "</p>";
    });
    document.getElementById("output").innerHTML = output;
}
function filterSalary() {
    let minSalary = parseFloat(document.getElementById("minSalary").value);
    let filteredEmployees = employees.filter(function(employee) {
        return employee.salary > minSalary;
    });
    let output = "<h3>Employees with Salary > " + minSalary + "</h3>";
    filteredEmployees.forEach(function(employee) {
        output += 
        "<p>Name: " + employee.name + "<br>" +
        "ID: " + employee.id + "<br>" +
        "Salary: " + employee.salary + "<br>" +
        "Department: " + employee.department + "</p>";
    });
    document.getElementById("output").innerHTML = output;
}
function countDepartment() {
    let department = document.getElementById("countDepartment").value;
    let count = employees.filter(function(employee) {
        return employee.department === department;
    }).length;
    document.getElementById("output").innerHTML = 
    "<h3>Number of Employees in " + department + " Department: " + count + "</h3>";
}
function calculateAverageSalary() {
    let totalSalary = employees.reduce(function(total, employee) {
        return total + employee.salary;
    }, 0);
    let averageSalary = totalSalary / employees.length;
    document.getElementById("output").innerHTML = 
    "<h3>Average Salary of Employees: " + averageSalary.toFixed(2) + "</h3>";
}
function totalSalary() {
    let totalSalary = employees.reduce(function(total, employee) {
        return total + employee.salary;
    }, 0);
    document.getElementById("output").innerHTML = 
    "<h3>Total Salary of Employees: " + totalSalary + "</h3>";
}