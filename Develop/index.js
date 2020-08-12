const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const generateReadMe = require('./utils/generateMarkdown.js');

function promptUser() {
    return inquirer.prompt(questions);
}

const questions = [
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username'
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo'
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title'
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description'
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Enter User GitHub profile picture url.",
        name: 'profile_url'
    },
    {
        type: 'input',
        message: "Enter User GitHub email.",
        name: 'github_email'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
    
    promptUser()
        .then(function (answers) {
            const githubReadme = generateReadMe(answers);
            writeFileAsync("NEWREADME.md", githubReadme);
            getUserRepo(answers.username, answers.repo);
        })
        .then(function () {
            console.log("Successfully wrote to index.html");
        })
        .catch(function (err) {
            console.log(err);
        });

       
}


init();

async function getUserRepo(username, reponame){
    
    console.log("Your GitHub user info: ", username);
    try {
        const { data } = await axios.get(
           `https://api.github.com/users/${username}/repos?per_page=100`
        );
    
        console.log(data);
        await writeFileAsync("NEWREADME.md", githubReadme);
      
      } catch (err) {
        console.log(err);
      }
    
}