const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const axios = require("axios");

const generateMarkdown = require("./utils/generateMarkdown.js");
const generateGithubMarkdown = require("./utils/generateGithubMarkdown.js");

const username = {
    type: 'input',
    message: "What is your GitHub username?",
    name: 'username'
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
        choices: ['© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.','Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: "Please enter your Github avatar URL",
        name: 'avatar_url'
    },
    {
        type: 'input',
        message: "Please enter your Github URL",
        name: 'login'
    },
    {
        type: 'input',
        message: "Please enter your email ID",
        name: 'email'
    },
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
    try {
        await inquirer.prompt({
            type: 'list',
            name: 'repoChoice',
            message: "Please choose one of the options...",
            choices: ['GITHUB_README', 'CUSTOM_README']
        }).then(answer => {
            console.log("Your responses: ", answer.repoChoice);

            if (answer.repoChoice == "CUSTOM_README") {
                console.log("in GITHUB_README");
                inquirer.prompt(questions)
                    .then(function (answers) {
                        console.log(answers);
                        const githubReadme = generateMarkdown(answers);

                        writeFileAsync("CUSTOMREADME.md", githubReadme);
                        console.log("writing done");
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            } else if (answer.repoChoice == "GITHUB_README") {
                inquirer.prompt(username)
                    .then(function (answers) {
                        console.log(answers);
                        getGithubDataFromUser(answers.username);
                    })
                    .catch(function (err) {
                        console.log(err);
                    });

            }
        })
    } catch (error) {
        console.log(error);
    }
};


function getGithubDataFromUser(username) {
    console.log("Fetching GitHub data...");

    axios.get(
        `https://api.github.com/users/${username}/repos?per_page=1`
    ).then(function (res) {
        console.log("----------------")
        console.log(res.data[0]);
        console.log("------------------");
        const githubReadme = generateGithubMarkdown(res.data[0]);
        writeFileAsync("GITHUBREADME.md", githubReadme);
    }).catch(function (err) {
        console.log(err);
    });
}

init();