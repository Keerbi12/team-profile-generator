const fs = require('fs');

const managerCard = function (manager) {
    return `  
        <div>
            <div class="card-heading">
                <h1 class="card-font-heading">${manager.name}</h1>
                <h2 class="card-font-heading">Manager</h2>
            </div>
            <div class="card-body">
                <h2 class="card-font-body">${manager.id}</h2>
                <h2 class="card-font-body">${manager.email}</h2>
                <h2 class="card-font-body">${manager.officeNumber}</h2>
            </div>
        </div>
    `
}

const cardArr = [];
const employeeCards = "Hello there"

const createHtml = files => {
    let overallFile = 
    `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>My Team Members</title>
            <link rel="stylesheet" href="./style.css" type="text/css">
        </head>
        <body>
            <!-- Page title -->
            <header class="header-container">
                <p class="title">My Team</p>
                <p class="sub-title">A list of people who work at the company</p>
            </header>
            <!-- Staff section -->
            <main>
                <section class="body-container">
                    ${managerCard}
                </section>
            </main>
        </body>
        </html> 
    `
    fs.writeFile("dist/index.html", overallFile, (err) => {
        err ? console.log(err) : console.log("New HTML created.")
    });
};

module.exports = createHtml;
