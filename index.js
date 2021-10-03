const inquirer = require("inquirer");
const Manager = require

// ========== Function that runs the questions related to manager =============
// const manager = () => {

// }
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        type: "input",
        name: "managerName",
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
        name: "managerId",
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
        name: "managerEmail",
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
        name: "managerGitHub",
        message: "What is the manager's GitHub username?",
        validate: async (input) => {
            if(input.trim('') === "") {
                return "Please input a GitHub username."
            }
            return true;
        }
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })