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
  
  *Steps required to install project and how to get the development environment running:
  
  ${data.installation}
`;
}

module.exports = generateMarkdown;
