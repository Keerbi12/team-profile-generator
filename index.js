const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const createHtml = require("./src/template");
const Employee = require("./lib/Employee");

// team array
const teamArr = [];

// ========== Function that runs the questions related to manager =============
const newManager = () => {
    return inquirer
    .prompt([
      /* Pass your questions in here */
      {
          type: "input",
          name: "name",
          message: "What is the manager's name?",
          validate: async (input) => {
              if(input.trim('') === "") {
                  return "Please input a name."
              }
              return true;
          }
      },
      {
          type: "input",
          name: "id",
          message: "What is the manager's Id?",
          validate: async (input) => {
              if(input.trim('') === "") {
                  return "Please input an Id."
              }
              return true;
          }
      },
      {
          type: "input",
          name: "email",
          message: "What is the manager's Email?",
          validate: async (input) => {
              if(input.trim('') === "") {
                  return "Please input an Email."
              }
              return true;
          }
      },
        {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
            validate: async (input) => {
            if(input.trim('') === "") {
                return "Please input an Email."
            }
                return true;
            }
        },
    ])
    .then((managerData) => {
      // Use user feedback for... whatever!!
      const { name, id, email, officeNumber} = managerData;
      const manager = new Manager (name, id, email, officeNumber);

      teamArr.push(manager);
      console.log(manager);
    })
};

const newEmployee = () => {
    return inquirer
    .prompt([
      /* Pass your questions in here */
      {
          type: "list",
          name: "role",
          message: "What is the employee's position",
          choices: ['Engineer', 'Intern']
      },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?",
            validate: async (input) => {
            if(input.trim('') === "") {
                return "Please input a name."
            }
            return true;
        }
    },
        {
            type: "input",
            name: "id",
            message: "What is the employee's Id?",
            validate: async (input) => {
              if(input.trim('') === "") {
                  return "Please input an Id."
              }
              return true;
          }
      },
    {
            type: "input",
            name: "email",
            message: "What is the employee's Email?",
            validate: async (input) => {
              if(input.trim('') === "") {
                  return "Please input an Email."
              }
              return true;
          }
    },
        {
            type: "input",
            name: "github",
            message: "What is the employee's GitHub username?",
            // if the option of engineer is selected, will ask for the employee's github account.
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the engineer's github username?")
                }
            }
      },
        {
            type: "input",
            name: "institute",
            message: "What is the employee's Institution?",
            // if the option of intern is selected, will ask for instituion of intern.
            when: (input) => input.role === "Intern",
                validate: nameInput => {
                    if (nameInput ) {
                        return true;
                    } else {
                        console.log ("Please enter the Intern's institution")
                    }
                }
        },
        {
            type: 'confirm',
            name: 'confirmNewEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then((employeeData) => {
        // Use user feedback for... whatever!!
        const { name, id, email, role, github, institute, confirmNewEmployee} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, institute);
            console.log(employee);
        }

        teamArr.push(employee);

        if (confirmNewEmployee) {
        return newEmployee(teamArr); 
        } else {
            return teamArr;
        }
    })
};

// Function for creating HTML page via template.
const writeFile = data => {
    fs.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        // Success
        } else {
            console.log("New team HTML file created.")
        }
    });
}

newManager()
    .then(newEmployee)
    .then(teamArr => {
        return createHtml(teamArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });