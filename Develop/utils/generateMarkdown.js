// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache':
      return "![License: Apache](https://img.shields.io/badge/License-Apache-yellow.svg)";

    case 'GNU':
      return "![License: GNU](https://img.shields.io/badge/License-GNUGPLV2-Red.svg)";

    case 'MIT':
      return "![License: MIT](https://img.shields.io/badge/License-MIT-Blue.svg)";

    case 'Mozilla':
      return "![License: Mozilla](https://img.shields.io/badge/License-Mozilla MPL V2-Green.svg)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
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
function renderLicenseSection(license) {
  switch (license) {
    case 'Apache':
      return "Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Work and such Derivative Works in Source or Object form.";

    case 'GNU':
      return "You may copy and distribute verbatim copies of the Program’s source code as you receive it, in any medium, provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the absence of any warranty; and give any other recipients of the Program a copy of this License along with the Program.";

    case 'MIT':
      return "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so,";

    case 'Mozilla':
      return "means having the right to grant, to the maximum extent possible, whether at the time of the initial grant or subsequently, any and all of the rights conveyed by this License.";

  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ##  Table of Contents
  * <a name="Installation">Installation</a>
  * <a name = "description">Description</a>
  * <a name = "License">License</a>
  * <a name = "Contact">Contact</a>

  ## Installation
  ${data.install}

  ## Description
  ${data.description}

  ${data.user_knowledge}

  ${data.user_contribution}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contact
  * [E-mail]${data.email}
  * [Github]https://github.com/${data.Github}

`;
}

module.exports = generateMarkdown;
