"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const asciiLogo_1 = __importDefault(require("./asciiLogo"));
const employeePrompts_1 = require("./prompts/employeePrompts");
const queries_1 = require("./utils/queries");
const inquirer_1 = __importDefault(require("inquirer"));
const displayTable = (data, columns, columnWidths) => {
    // Format and display column headers
    const header = columns.map((col, i) => col.padEnd(columnWidths[i])).join("   ");
    const separator = columns.map((col, i) => "-".repeat(columnWidths[i])).join("   ");
    console.log(header);
    console.log(separator);
    // Format and display rows
    data.forEach((row) => {
        const formattedRow = columns.map((col, i) => row[col].toString().padEnd(columnWidths[i])).join("   ");
        console.log(formattedRow);
    });
};
const initialInit = () => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log(asciiLogo_1.default);
    yield init();
});
const init = () => __awaiter(void 0, void 0, void 0, function* () {
    const action = yield (0, employeePrompts_1.mainMenu)();
    switch (action) {
        case "View All Employees":
            yield viewAllEmployees();
            break;
        case "Add Employee":
            yield addEmployee();
            break;
        case "Update Employee Role":
            yield updateEmployeeRole();
            break;
        case "View All Roles":
            yield viewAllRoles();
            break;
        case "Add Role":
            yield addRole();
            break;
        case "View All Departments":
            yield viewAllDepartments();
            break;
        case "Add Department":
            yield addDepartment();
            break;
        case "Exit":
            console.log("Goodbye!");
            process.exit();
            break;
    }
});
const viewAllEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    const employees = yield (0, queries_1.getAllEmployees)();
    const columns = ["id", "first_name", "last_name", "title", "department", "salary", "manager"];
    const columnWidths = [5, 12, 12, 20, 15, 10, 15];
    displayTable(employees, columns, columnWidths);
    yield init();
});
const addEmployee = () => __awaiter(void 0, void 0, void 0, function* () {
    const roles = yield (0, queries_1.getAllRoles)();
    const employees = yield (0, queries_1.getAllEmployees)();
    const { firstName, lastName, roleId, managerId } = yield inquirer_1.default.prompt([
        { type: "input", name: "firstName", message: "Enter the employee's first name:" },
        { type: "input", name: "lastName", message: "Enter the employee's last name:" },
        {
            type: "list",
            name: "roleId",
            message: "Select the employee's role:",
            choices: roles.map((role) => ({ name: role.title, value: role.id })),
        },
        {
            type: "list",
            name: "managerId",
            message: "Select the employee's manager:",
            choices: [{ name: "None", value: null }].concat(employees.map((emp) => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }))),
        },
    ]);
    yield (0, queries_1.addEmployeeQuery)(firstName, lastName, roleId, managerId);
    console.log("Employee added successfully.");
    yield init();
});
const updateEmployeeRole = () => __awaiter(void 0, void 0, void 0, function* () {
    const employees = yield (0, queries_1.getAllEmployees)();
    const roles = yield (0, queries_1.getAllRoles)();
    const { employeeId, roleId } = yield inquirer_1.default.prompt([
        {
            type: "list",
            name: "employeeId",
            message: "Select the employee to update:",
            choices: employees.map((emp) => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id })),
        },
        {
            type: "list",
            name: "roleId",
            message: "Select the new role:",
            choices: roles.map((role) => ({ name: role.title, value: role.id })),
        },
    ]);
    yield (0, queries_1.updateEmployeeRoleQuery)(roleId, employeeId);
    console.log("Employee role updated successfully.");
    yield init();
});
const viewAllRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    const roles = yield (0, queries_1.getAllRoles)();
    const columns = ["id", "title", "department", "salary"];
    const columnWidths = [5, 20, 15, 10];
    displayTable(roles, columns, columnWidths);
    yield init();
});
const addRole = () => __awaiter(void 0, void 0, void 0, function* () {
    const departments = yield (0, queries_1.getAllDepartments)();
    const { title, salary, departmentId } = yield inquirer_1.default.prompt([
        { type: "input", name: "title", message: "Enter the role title:" },
        { type: "input", name: "salary", message: "Enter the role salary:" },
        {
            type: "list",
            name: "departmentId",
            message: "Select the department:",
            choices: departments.map((dept) => ({ name: dept.name, value: dept.id })),
        },
    ]);
    yield (0, queries_1.addRoleQuery)(title, salary, departmentId);
    console.log("Role added successfully.");
    yield init();
});
const viewAllDepartments = () => __awaiter(void 0, void 0, void 0, function* () {
    const departments = yield (0, queries_1.getAllDepartments)();
    const columns = ["id", "name"];
    const columnWidths = [5, 20];
    displayTable(departments, columns, columnWidths);
    yield init();
});
const addDepartment = () => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = yield inquirer_1.default.prompt([
        { type: "input", name: "name", message: "Enter the department name:" },
    ]);
    yield (0, queries_1.addDepartmentQuery)(name);
    console.log("Department added successfully.");
    yield init();
});
initialInit();
