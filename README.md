# Keeper App Front-End

This project is a simplified clone of Google Keep, part of the course COMSW3102 Development Technology, taught by Professor Shoaib Ahamed. The front-end of the application is designed and developed by Ahmed Mahmud.

## Overview

The Keeper App is a note-taking application that allows users to add, delete, and manage their notes. It features a simplistic and intuitive user interface inspired by Google Keep.

## Features

- **Add Note Functionality**: Users can create new notes with a title and content.
- **Delete Note Functionality**: Each note can be deleted using a delete button.
- **Firebase Authentication**: Users can sign in using their Google accounts to access their notes.
- **User-Specific Notes**: Notes are user-specific, ensuring data privacy and personalization.

## Technical Details

- The application is bootstrapped with Create React App and utilizes React for the front-end.
- Components such as Header, Footer, and Note are modularly designed for maintainability.
- Firebase Authentication is implemented for user sign-ins.
- The UI is styled to provide a clean and user-friendly experience.

## Phase Implementation

1. **Initial React Setup**: Creation of a new React application with `App.jsx`, `Header.jsx`, `Footer.jsx`, and `Note.jsx` components.
2. **Note Management**: Inclusion of `notes.js` for default notes and implementation of add/delete functionalities.
3. **Backend Connection**: Connection to Node.js backend server with RESTful API to save, fetch, and delete notes from MongoDB.
3. **Firebase Integration**: Implementation of Firebase Authentication for user sign-in functionality.
4. **UI Enhancement**: Styling updates for a more user-friendly interface, including a responsive design for the sign-in and sign-out buttons.

## Acknowledgements

Special thanks to Professor Shoaib Ahamed, TA Shivam Shekhar, and TA Esme Li for providing guidance and educational support throughout the development process.
