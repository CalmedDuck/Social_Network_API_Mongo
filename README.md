# Social Network API

## Table of Contents

1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Routes](#routes)
5. [Contributing](#contributing)
6. [Questions](#questions)


## VIDEO LINK

https://drive.google.com/file/d/197Ihu0oRdOq3EiNuIr-NcuLkEDsBIOuy/view

## Description


This project is a back-end application for a social network, built using Node.js, Express.js, and MongoDB. It provides a RESTful API for handling typical social networking functionalities like managing users, thoughts, friends, and reactions.

## Installation

Install the necessary dependencies required by Mongo. Make sure to npm install.


## Usage

To start the server, run: node server

## Routes

Information about the API routes:

- **Users**

  - GET `/users`: Fetch all users
  - GET `/users/:userId`: Fetch a single user by ID
  - POST `/users`: Create a new user
  - PUT `/users/:userId`: Update a user by ID
  - DELETE `/users/:userId`: Delete a user by ID

- **Thoughts**

  - GET `/thoughts`: Fetch all thoughts
  - GET `/thoughts/:thoughtId`: Fetch a single thought by ID
  - POST `/thoughts`: Create a new thought
  - PUT `/thoughts/:thoughtId`: Update a thought by ID
  - DELETE `/thoughts/:thoughtId`: Delete a thought by ID

- **Friends**

  - POST `/users/:userId/friends/:friendId`: Add a friend
  - DELETE `/users/:userId/friends/:friendId`: Remove a friend

- **Reactions**
  - POST `/thoughts/:thoughtId/reactions`: Add a reaction to a thought
  - DELETE `/thoughts/:thoughtId/reactions/:reactionId`: Remove a reaction from a thought

## Questions

For any questions, please contact me at my Github https://github.com/CalmedDuck