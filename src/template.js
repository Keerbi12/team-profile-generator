const fs = require('fs');
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
            <header>
                <p>My Team</p>
                <p>A list of people who work at the company</p>
            </header>
            <!-- Staff section -->
            <main>
                <section>
                    ${employeeCards}
                </section>
            </main>
        </body>
        </html> 
    `
    fs.writeFile("dist/index.html", overallFile, (err) => {
        err ? console.log(err) : console.log("New HTML created.")
    });
};

// createHtml = (data) => {

// }

module.exports = createHtml;
