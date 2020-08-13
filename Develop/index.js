const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const generateMarkdown = require("./utils/generateMarkdown.js");

const choiceQuestions = [
    {
        type: 'list',
        message: "Please choose one of the options...",
        choices: ['Generate custom README file', 'Get README file from a repo'],
        name: 'repoChoice'
    }
]

const userInfo = {
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username'
}

function getGithubDataFromUser() {
    const userResponses = inquirer.prompt(userInfo);
    console.log("You entered: ", userResponses);
    console.log("Fetching GitHub data...");

    getUserRepo(userResponses);
}

async function getUserRepo(username) {

    try {
        const { data } = await axios.get(
            `https://api.github.com/users/${username}/repos?per_page=1`
        );

        console.log(data);
        const githubReadme = generateMarkdown(data);
        writeFileAsync("GITHUBREADME.md", githubReadme);
    } catch (err) {
        console.log(err);
    }
}



function getUserChoice() {
    const userResponses = inquirer.prompt(choiceQuestions);
    console.log("You entered: ", userResponses);
    console.log("Fetching GitHub data...");
    return userResponses
}

function promptUserQuestions() {
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
    }
];


function readmechoice(userChoice){
    if (userChoice == "Generate custom README file") {
        promptUserQuestions()
            .then(function (answers) {
                console.log(answers);
                const githubReadme = generateMarkdown(answers);
                writeFileAsync("CUSTOMREADME.md", githubReadme);
            })
            .then(function () {
                console.log("Successfully wrote to index.html");
            })
            .catch(function (err) {
                console.log(err);
            });
    } else if (userChoice == "Get README file from a repo") {
        getGithubDataFromUser();
    }
}

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
     getUserChoice()
        .then(function (userChoice) {
           
          readmechoice(userChoice);
        })
        .then(function () {
            console.log("Successfully wrote to index.html");
        })
        .catch(function (err) {
            console.log(err);
        });
    }

init();