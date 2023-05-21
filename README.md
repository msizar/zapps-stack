# Zepz Stack

Zepz Stack is a React application for managing and displaying StackOverflow users. It fetches a list of users from the StackOverflow API and provides features such as pagination, user details, and follow/block functionality.

## Installation

1. Clone the repository:
  ```shell 
  git clone https://github.com/your-username/zepz-stack.git 
  ```

2. Clone the repository:
  ```shell 
  cd zepz-stack
  ```

3. Install the dependencies:
shell
```shell
npm install 
```

# Usage
1. Start the development server:
``` shell
npm start
```

2. Open your browser and visit http://localhost:3000 to view the application.

3. Use the pagination controls to navigate through the list of users.

4. Click on a user card to expand it and view additional options to follow or block the user.

## Folder Structure
The project structure follows the typical React application structure:

* src: Contains the source code files.
  * components: Contains reusable UI components.
  * models: Contains TypeScript interfaces or types used for data modeling.
  * services: Contains API service functions.
  * helpers: Contains utility/helper functions.
  * layouts: Contains the main views or pages of the application.
  * App.tsx: The entry point of the application.
  * index.tsx: The root file that renders the React app.

## Dependencies
The project utilizes the following dependencies:

* React: JavaScript library for building user interfaces.
* React Router: Declarative routing for React applications.
* Tailwind CSS: Utility-first CSS framework.
* Axios: HTTP client for making API requests.
* Jest: Testing framework for unit tests.

## Testing
To run the unit tests, use the following command:

```shell
npm test