function generateGithubMarkdown(data) {
  return `
  ## ${data.name}

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.owner.login}/${data.name}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${data.owner.login}/${data.name}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  ## Description 
  
  ${data.description}
  
![Developer Profile Picture](${data.owner.avatar_url}) 
  
For any questions, please contact me with the information below:
 
 GitHub: [@${data.owner.login}](${data.owner.html_url})
Email: saudamini.keshav@gmail.com
`;
}

module.exports = generateGithubMarkdown;
