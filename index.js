const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const peopleArray = [];

const form = function() {
    inquirer
    .prompt([{
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your id number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is your role?',
        choices: ['Engineer', 'Intern', 'Manager']
    }])
    .then((answers) => {
        if (answers.role === 'Engineer') {
            inquirer.prompt({
                type: 'input',
                name: 'github',
                message: 'What is your GitHub username?'
            }).then((roleInfo) => {
                peopleArray.push(new Engineer(answers.name, answers.id, answers.email, roleInfo.github));
                finalQuestion()
            })
        }
        else if (answers.role === 'Intern') {
            inquirer.prompt({
                type: 'input',
                name: 'school',
                message: 'Where do you go to school?'
            }).then((roleInfo) => {
                peopleArray.push(new Intern(answers.name, answers.id, answers.email, roleInfo.school));
                finalQuestion()
            })
        }
        else if (answers.role === 'Manager') {
            inquirer.prompt({
                type: 'input',
                name: 'officeNumber',
                message: 'What is your office number?'
            }).then((roleInfo) => {
                peopleArray.push(new Manager(answers.name, answers.id, answers.email, roleInfo.officeNumber));
                finalQuestion()
            })
        }
    })
}

form();

const finalQuestion = function() {
    inquirer.prompt({
        type: 'list',
        name: 'final',
        message: 'Anyone else?',
        choices: ['Yes', 'No']
    }).then((done) => {
        if (done.choices === 'No') {
            return
        }
        form()
    })
}