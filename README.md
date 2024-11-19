# Employee-Manager

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)






## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Contact Me](#contact-me)





## User Story:
AS A business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business.

## Acceptance Criteria
GIVEN a command-line application that accepts user input<br>
WHEN I start the application<br>
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role<br>
WHEN I choose to view all departments<br>
THEN I am presented with a formatted table showing department names and department ids<br>
WHEN I choose to view all roles<br>
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role<br>
WHEN I choose to view all employees<br>
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to<br>
WHEN I choose to add a department<br>
THEN I am prompted to enter the name of the department and that department is added to the database<br>
WHEN I choose to add a role<br>
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database<br>
WHEN I choose to add an employee<br>
THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database<br>
WHEN I choose to update an employee role<br>
THEN I am prompted to select an employee to update and their new role and this information is updated in the database<br>



## Description 
Employee-Manager is a command-line application designed to help business owners efficiently manage their company's organizational structure. This powerful tool allows users to view and manage departments, roles, and employees, providing a streamlined solution for organizing and planning business operations.


## Installation 
To set up the Employee-Manager application, follow these steps:

1. Ensure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

2. Clone the repository to your local machine:

3. Set up PostgreSQL:
- Ensure you have PostgreSQL installed on your machine. If not, download and install it from [postgresql.org](https://www.postgresql.org/download/).
- Create a new PostgreSQL database for the project.

3. Configure the database connection:
- Create a `.env` file in the root directory of the project.
- Add the following environment variables to the `.env` file, replacing the values with your PostgreSQL connection details:
DB_HOST=localhost 
DB_PORT=5432
DB_NAME=your_database_name 
DB_USER=your_username
DB_PASSWORD=your_password

3. Navigate to the project directory: cd Employee-Manager

4. Install the required dependencies by running: npm install


## Usage 
To use the Employee-Manager application, follow these steps:

1. Ensure you have completed all the installation steps mentioned in the Installation section.

2. Start the application by running the following command in your terminal: npm start

3. You will be presented with a menu of options. Use the arrow keys to navigate and press Enter to select an option.

4. Available options include:
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

5. Follow the prompts for each action. For example, if you choose to add an employee, you'll be asked to enter the employee's first name, last name, role, and manager.

6. After completing an action, you'll be returned to the main menu where you can choose another action or exit the application.

7. To exit the application, choose the "Exit" option from the main menu or press Ctrl+C.


## License 
MIT


## Contributing 
Contributions to the Employee-Manager project are welcome and appreciated. Here are some ways you can contribute:

1. **Reporting Bugs**: If you find a bug, please open an issue in the GitHub repository with a clear description of the problem and steps to reproduce it.

2. **Suggesting Enhancements**: Have ideas for new features or improvements? Open an issue to discuss your suggestions.

3. **Code Contributions**: If you'd like to contribute code:
   - Fork the repository
   - Create a new branch (`git checkout -b feature/AmazingFeature`)
   - Make your changes
   - Commit your changes (`git commit -m 'Add some AmazingFeature'`)
   - Push to the branch (`git push origin feature/AmazingFeature`)
   - Open a Pull Request

4. **Documentation**: Improvements to documentation, including this README, are always welcome.

5. **Code Review**: Review open pull requests and provide feedback.

Please ensure that your contributions adhere to the following:
- Follow the existing code style and formatting
- Write clear, concise commit messages
- Add or update tests as necessary
- Update documentation to reflect any changes

Thank you for your interest in improving Employee-Manager!


## Tests 
N/A


## Contact Me:
* Email: angelic722@gmail.com
* Github: Thida612

## Demo
https://drive.google.com/file/d/1R6zUjwJp3DBorCSCJDIwMTDtWQQ_PJOA/view?usp=sharing
