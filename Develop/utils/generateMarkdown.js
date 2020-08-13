function generateMarkdown(data) {
  return `
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [License](#license)

#${data.title}
![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.username}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## Description 
  
  ${data.description}

  ## Installation
  
  Steps required to install project and how to get the development environment running:
  
  ${data.installation}

  ## Usage 
  
  Instructions and examples for use:
  
  ${data.usage}

   
  ## Contributing
  
  If you would like to contribute it, you can follow these guidelines for how to do so.
  
  ${data.contributing}

  ## Tests
  
  Tests for application and how to run them:
  
  ${data.tests}

  ## License
  
  ${data.license}

  ## Questions?
  
  ![Developer Profile Picture](${data.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${data.login}](${data.url})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
