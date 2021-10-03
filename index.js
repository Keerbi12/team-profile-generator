const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
          name: "github",
          message: "What is the manager's GitHub username?",
          validate: async (input) => {
              if(input.trim('') === "") {
                  return "Please input a GitHub username."
              }
              return true;
          }
      },
    ])
    .then((managerData) => {
      // Use user feedback for... whatever!!
      const { name, id, email} = managerData;
      const manager = new Manager (name, id, email);

      teamArr.push(manager);
      console.log(manager);
    })
};

newManager()

// Function for creating HTML page via template.
const writeFile = data => {
    FileSystem.writeFile("./dist/index.html", data, err => {
        if (err) {
            console.log(err);
            return;
        // Success
        } else {
            console.log("New team HTML file created.")
        }
    });
}