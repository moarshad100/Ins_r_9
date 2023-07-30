// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
  case 'Apache':
    return "![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)";

  case 'GNU':
    return "![License: GNU](https://img.shields.io/badge/License-GNU GPL V2-Red.svg)";

  case 'MIT':
    return "![License: MIT](https://img.shields.io/badge/License-MIT-Blue.svg)";

  case 'Mozilla':
    return "![License: Mozilla](https://img.shields.io/badge/License-Mozilla MPL V2-Green.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
  case 'Apache':
    return "https://opensource.org/license/apache-2-0/";

  case 'GNU':
    return "https://opensource.org/license/gpl-2-0/";

  case 'MIT':
    return "https://opensource.org/license/mit/";

  case 'Mozilla':
    return "https://opensource.org/license/mpl-2-0/";

}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ##  Table of Contents
  *Installation[#installation]

`;
}

module.exports = generateMarkdown;
