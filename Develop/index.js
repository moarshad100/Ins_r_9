// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "Enter your Github UserName",
    "Enter your Email address",
    "What is the name of your project?",
    "Please enter a brief description about your Project",
    "License for the project",
    "What does the user need to know",
    "How can the user contribute to the project",
    ];
inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'Github',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'email',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[3],
            name: 'description',
        },
        {
            type: 'list',
            message: questions[4],
            name: 'license',
            choices:["Apache","GNU","MIT","Mozilla"]

        },
        {
            type:'input',
            message:questions[5],
            name:'user_knowledge'
        },
        {
            type:'input',
            message:questions[6],
            name:'user_contribution'
        },
    ])
    .then((response) =>
 
        writeToFile("readme.md",generateMD(response))
        
    );

// TODO: Create a function to write README file
function writeToFile(fileName, data) 
{
    fs.writeFile(fileName,data,err=>{
        if(err){
            console.error(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
