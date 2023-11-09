# Keeper App 

This project is a simplified clone of Google Keep, created as an assignment for the course COMSW3102 Development Technology, taught by Professor Shoaib Ahamed. The application is designed and developed by Ahmed Mahmud.

## Overview

The Keeper App is a note-taking application that allows users to add and delete notes. It features a simplistic and intuitive user interface reminiscent of Google Keep.

## Features

- **Add Note Functionality**: Users can create new notes with a title and content, which are then displayed on the main interface.
- **Delete Note Functionality**: Each note can be deleted using a delete button associated with that particular note.
- **Dynamic Header and Footer**: The application includes a header displaying the name "Keeper" and a footer that dynamically updates to display the current year, adhering to copyright norms.

## Technical Details

- The app is bootstrapped with a React frontend.
- The header and footer are implemented as separate components for modularity.
- Notes are managed within the application state, allowing dynamic interaction.
- The UI is styled to provide a clean and user-friendly experience.

## Phase Implementation

### Phase 1
Creation of a new React application with `App.jsx`, `Header.jsx`, `Footer.jsx`, and `Note.jsx` components.

### Phase 2
Inclusion of a `notes.js` file that contains an array of default notes, which are rendered on the main page.

### Phase 3
Development of the core functionalities:
- Adding new notes through a form interface.
- Deleting existing notes with a filter mechanism.
- Passing unique identifiers for notes to manage state changes effectively.

## Course and Author

This project is part of the coursework for COMSW3102 Development Technology at Columbia University. The course is instructed by Professor Shoaib Ahamed. This project is authored by Ahmed Mahmud, who is solely responsible for the development and maintenance of this application.

## Acknowledgements

Special thanks to Professor Shoaib Ahamed and TA Shivam Shekhar for providing guidance and educational support throughout the development process.