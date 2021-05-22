const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const peopleArray = [];

const form = function () {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your id number?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your email?",
      },
      {
        type: "list",
        name: "role",
        message: "What is your role?",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then((answers) => {
      if (answers.role === "Engineer") {
        inquirer
          .prompt({
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
          })
          .then((roleInfo) => {
            peopleArray.push(
              new Engineer(
                answers.name,
                answers.id,
                answers.email,
                answers.role,
                roleInfo.github
              )
            );
            finalQuestion();
          });
      } else if (answers.role === "Intern") {
        inquirer
          .prompt({
            type: "input",
            name: "school",
            message: "Where do you go to school?",
          })
          .then((roleInfo) => {
            peopleArray.push(
              new Intern(
                answers.name,
                answers.id,
                answers.email,
                answers.role,
                roleInfo.school
              )
            );
            finalQuestion();
          });
      } else if (answers.role === "Manager") {
        inquirer
          .prompt({
            type: "input",
            name: "officeNumber",
            message: "What is your office number?",
          })
          .then((roleInfo) => {
            peopleArray.push(
              new Manager(
                answers.name,
                answers.id,
                answers.email,
                answers.role,
                roleInfo.officeNumber
              )
            );
            finalQuestion();
          });
      }
    });
};

form();

let card = ``;

const finalQuestion = function () {
  inquirer
    .prompt({
      type: "list",
      name: "final",
      message: "Anyone else?",
      choices: ["Yes", "No"],
    })
    .then((done) => {
      if (done.final === "No") {
        peopleArray.map((person) => {
          let variable = "";
          let variableName = "";
          let variableLink = "";
          switch (person.role) {
            case "Engineer":
              variable = person.github;
              variableName = 'Github: ';
              variableLink = `href="https://github.com/${person.github}"`
              break;
            case "Intern":
              variable = person.school;
              variableName = 'School: '
              break;
            case "Manager":
              variable = person.officeNumber;
              variableName = 'Office #: '
              break;
          }
          const newCard = `
                <div class="card" style="width: 18rem">
                <div class="card-body">
                  <h5 class="card-title">Name: ${person.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">${person.role}</h6>
                  <p class="card-text">
                    Id: ${person.id}
                  </p>
                  <p>Email: <a href="mailto: ${person.email}" class="card-subtitle">${person.email}</a></p>
                  <p>${variableName}<a ${variableLink} class="card-subtitle" target="_blank">${variable}</a></p>
                </div>
                </div>`;
          card += newCard;
        });
      } else {
        form();
      }
    })
    .then(() => {
      const fileContent = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Team Profile</title>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="../assets/style.css"/>
      </head>
      <body>
        <header>
            <h1>Team</h1>
        </header>
        ${card}
      </body>
    </html>`;
      writeFile(fileContent);
    });
};

const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};
