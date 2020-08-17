# Unit 09 Node.js and ES6+ Homework: Good README Generator

Create a command-line application that dynamically generates a README.md from a user's input. The application will be invoked with the following command:

```sh
node index.js
```

The user will be prompted for their GitHub username and other information pertaining to the project the README is for.

The README will be populated with the following:

* At least one badge
* Project title
* Description
* Table of Contents
* Installation
* Usage
* License
* Contributing
* Tests
* Questions
  * User GitHub profile picture
  * User GitHub email

Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), we can frame this challenge as follows:

```
AS A developer

I WANT a README generator

SO THAT I can easily put together a good README for a new project
```

Refer to the [Good README guide](../../01-HTML-Git-CSS/04-Supplemental/Good-README-Guide/README.md).

## Business Context

When creating an open source project on GitHub, it is important to have a quality README with information about the app--what is the app for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. A command-line application will allow for quick and easy generation of a project README to get started quickly. This will allow a project creator to spend more time working on finishing the project and less time creating a good README.

## Minimum Requirements

* Functional, deployed application.

* GitHub repository with a unique name and a README describing project.

* The generated README includes the following sections: 
  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

* The generated README includes 1 badge that's specific to the repository.

```
GIVEN the developer has a GitHub profile and a repository

WHEN prompted for the developer's GitHub username and repo specific information

THEN a README for the repo is generated
```
- - -

## Commit Early and Often

One of the most important skills to master as a web developer is version control. Building the habit of committing via Git is important for two reasons:

* Your commit history is a signal to employers that you are actively working on projects and learning new skills.

* Your commit history allows you to revert your code base in the event that you need to return to a previous state.

Follow these guidelines for committing:

* Make single-purpose commits for related changes to ensure a clean, manageable history. If you are fixing two issues, make two commits.

* Write descriptive, meaningful commit messages so that you and anyone else looking at your repository can easily understand its history.

* Don't commit half-done work, for the sake of your collaborators (and your future self!).

* Test your application before you commit to ensure functionality at every step in the development process.

We would like you to have more than 200 commits by graduation, so commit early and often!

## Submission on BCS

You are required to submit the following:

* A video demonstrating the entirety of the app's functionality 

* A generated README.md file for a project repo.

* The URL of the GitHub repository


----------------------------------------------------------------------------------------


## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [License](#license)

#Github-README-Generator
![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/SaudaminiKeshav/Github-README-Generator?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/SaudaminiKeshav/Github-README-Generator?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## Description 
  
  Every good project needs a quality README with information about the app - what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions so that other developers are more likely to use and contribute to the success of the project. This is a command-line application that runs with Node.js that dynamically generates a README.md file based on input about your project. Check out the ExampleREADME.md in this repo as an example.

  ## Installation
  
  Steps required to install project and how to get the development environment running:
  
  Steps required to install project and how to get the development environment running:  To generate your own README, first run npm install in order to install the following npm package dependencies as specified in the package.json. inquirer that will prompt you for your inputs from the command line, axios to fetch your info from the GitHub API and if the application itself can be invoked with node index.js.

  ## Usage 
  
  Instructions and examples for use:
  
  When you run node index.js, the application uses the inquirer package to prompt you in the command line with a series of questions about your GitHub and about your project. The application then takes your responses and uses axios to fetch your GitHub profile from the GitHub API, including your GitHub profile picture (avatar) and email. From there, the application will generate markdown and a table of contents for the README conditionally based on your responses to the Inquirer prompts (so, if you don't answer the optional questions, such as Installation, an Installation section will not be included in your README). The README will also include badges for your GitHub repo. Finally, fs.writeFile is used to generate your project's README.md file. Check out the ExampleREADME.md in this repo as an example. The lorem ipsum is generated thanks to Social Good Ipsum.

   
  ## Contributing
  
  If you would like to contribute it, you can follow these guidelines for how to do so.
  
  No guidlines available at the moment

  ## Tests
  
  Tests for application and how to run them:
  
  Tests not available

  ## License
  
  © 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.

  ## Questions?
  
  ![Developer Profile Picture](https://avatars3.githubusercontent.com/u/65425185?v=4) 
  
  For any questions, please contact me with the information below:
 
  GitHub: https://github.com/SaudaminiKeshav
  Email: saudamini.keshav@gmail.com

