[![Netlify Status](https://api.netlify.com/api/v1/badges/02ddaf23-507e-4101-9b9b-a7156c58000f/deploy-status)](https://app.netlify.com/sites/labspt5weddingbells/deploys)

# Wedding Bells

You can find the deployed project at [h3rra.com](https://www.h3rra.com/).

## Contributors

| [Brey Batten](https://github.com/BreyBatten) | [Cedric Amaya](https://github.com/cedricium) | [Dan Sample](https://github.com/DanSample) | [Marco Guzman](https://github.com/mag16) | [Poly Goveia](https://github.com/Poly-G) | [Robert Pedersen](https://github.com/robpedersendev) | [Sammy Chang](https://github.com/schang1146) |
| :--------------------------------------------: | :--------------------------------------------: | :------------------------------------------: | :----------------------------------------: | :----------------------------------------: | :----------------------------------------------------: | :--------------------------------------------: |
| <img src="./weddingbells/src/components/About/images/brey.png" width = "200" /> | <img src="./weddingbells/src/components/About/images/cedric.png" width = "200" /> | <img src="./weddingbells/src/components/About/images/dan.png" width = "200" /> | <img src="./weddingbells/src/components/About/images/marco.png" width = "200" /> | <img src="./weddingbells/src/components/About/images/poly.png" width = "200" /> | <img src="./weddingbells/src/components/About/images/bob.png" width = "200" /> | <img src="./weddingbells/src/components/About/images/sammy.png" width = "200" /> |
|                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/BreyBatten)                                |                            [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/cedricium)                             |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/DanSample)                           |                          [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/mag16)                           |                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Poly-G)                            |                                           [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/robpedersendev)              |                               [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/schang1146)                            |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/brey-batten-954661181)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/cedricamaya/)                 | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/dan-sample-89897b183/)                 |[ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/marco-a-guzman/)                 |               [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/poly-goveia/)                |                 [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/robpedersendev)                 |                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sammy-chang-927976a3/)                |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/b5c4db1c-b10d-42c3-b157-3746edd9e81d/deploy-status)](https://www.h3rra.com)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)


## Project Overview

[Trello Board](https://trello.com/b/SO4ZRcyv/wedding-bells)

[Product Canvas](https://www.notion.so/Wedding-Bells-2e2474b884e946e2856a8b5e0f75d997)

## About Wedding Bells

To create and simplify a way to manage, collect, and distribute essential key information about a user's wedding to his/her guests in an agile and non-stressful way.

Allows users to interactively manage and view, in real time, guests lists, invitation status, and gift registry.


### Key Features

-    Couple is able to keep track of their guests and their RSVP status
-    Couple can create and save their vendor's information
-    Couple can create a registry link for guests to view
-    Couple can create announcements to keep guests updated
-    Guest's can view the wedding information
-    Guest's can RSVP and select if they will have a plus-one

## Tech Stack

### Front end built using:

#### _React_

-    This is the framework we learned in the curriculum
-    This is what we were all most familiar with
-    React is highly scalable

#### _React Hooks and Redux_
-   Our state management that the team is familiar with

#### _ReactStrap and Styled Components_
-   Used for simpler styling

#### Front end deployed to `netlify`

#### [Back end](https://github.com/Lambda-School-Labs/wedding-bells-be) built using:

#### _NodeJS_

#### _Express_

#### _PostgresQL_

# APIs

## /api/auth

Includes endpoints to allow a new couple to register, login, and logout

## /api/weddings

Includes endpoints to allow a couple to create, view, update, and delete wedding information

## /api/weddings/:id/guests

Includes endpoints to allow a couple to view, create, update and delete their guests

## /api/weddings/:id/vendors

Includes endpoints to allow a couple to view, create, update and delete their vendors

## /api/users

Includes endpoints to allow a couple to view, update and delete their account information

# Environment Variables

In order for the app to function correctly, the user must set up their own environment variables. There should be a .env file containing the following:

    SKIP_PREFLIGHT_CHECK=true


# Testing
#### _Cypress_

# Installation Instructions

After cloning the repository to your machine, simply run `yarn` or `npm install` to download dependencies

## Other Scripts

    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Backend Documentation](https://github.com/Lambda-School-Labs/wedding-bells-be) for details on the backend of our project.
