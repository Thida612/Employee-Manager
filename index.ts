import logo from "./asciiLogo";
import { mainMenu } from "./prompts/employeePrompts";
import {
  getAllEmployees,
  getAllRoles,
  getAllDepartments,
  addEmployeeQuery,
  addRoleQuery,
  addDepartmentQuery,
  updateEmployeeRoleQuery,
} from "./utils/queries";
import inquirer from "inquirer";

const displayTable = (data: any[], columns: string[], columnWidths: number[]): void => {
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

const initialInit = async (): Promise<void> => {
  console.clear();
  console.log(logo);
  await init();
};

const init = async (): Promise<void> => {
  const action = await mainMenu();
  switch (action) {
    case "View All Employees":
      await viewAllEmployees();
      break;
    case "Add Employee":
      await addEmployee();
      break;
    case "Update Employee Role":
      await updateEmployeeRole();
      break;
    case "View All Roles":
      await viewAllRoles();
      break;
    case "Add Role":
      await addRole();
      break;
    case "View All Departments":
      await viewAllDepartments();
      break;
    case "Add Department":
      await addDepartment();
      break;
    case "Exit":
      console.log("Goodbye!");
      process.exit();
      break;
  }
};

const viewAllEmployees = async (): Promise<void> => {
  const employees = await getAllEmployees();

  const columns = ["id", "first_name", "last_name", "title", "department", "salary", "manager"];
  const columnWidths = [5, 12, 12, 20, 15, 10, 15];

  displayTable(employees, columns, columnWidths);

  await init();
};

const addEmployee = async (): Promise<void> => {
  const roles = await getAllRoles();
  const employees = await getAllEmployees();

  const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
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
      choices: [{ name: "None", value: null }].concat(
        employees.map((emp) => ({ name: `${emp.first_name} ${emp.last_name}`, value: emp.id }))
      ),
    },
  ]);

  await addEmployeeQuery(firstName, lastName, roleId, managerId);
  console.log("Employee added successfully.");

  await init();
};

const updateEmployeeRole = async (): Promise<void> => {
  const employees = await getAllEmployees();
  const roles = await getAllRoles();

  const { employeeId, roleId } = await inquirer.prompt([
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

  await updateEmployeeRoleQuery(roleId, employeeId);
  console.log("Employee role updated successfully.");

  await init();
};

const viewAllRoles = async (): Promise<void> => {
  const roles = await getAllRoles();

  const columns = ["id", "title", "department", "salary"];
  const columnWidths = [5, 20, 15, 10];

  displayTable(roles, columns, columnWidths);

  await init();
};

const addRole = async (): Promise<void> => {
  const departments = await getAllDepartments();

  const { title, salary, departmentId } = await inquirer.prompt([
    { type: "input", name: "title", message: "Enter the role title:" },
    { type: "input", name: "salary", message: "Enter the role salary:" },
    {
      type: "list",
      name: "departmentId",
      message: "Select the department:",
      choices: departments.map((dept) => ({ name: dept.name, value: dept.id })),
    },
  ]);

  await addRoleQuery(title, salary, departmentId);
  console.log("Role added successfully.");

  await init();
};

const viewAllDepartments = async (): Promise<void> => {
  const departments = await getAllDepartments();

  const columns = ["id", "name"];
  const columnWidths = [5, 20];

  displayTable(departments, columns, columnWidths);

  await init();
};

const addDepartment = async (): Promise<void> => {
  const { name } = await inquirer.prompt([
    { type: "input", name: "name", message: "Enter the department name:" },
  ]);

  await addDepartmentQuery(name);
  console.log("Department added successfully.");

  await init();
};

initialInit();
