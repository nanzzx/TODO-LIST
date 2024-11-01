# Todo List Application

A simple Todo List application built with React and Node.js, utilizing MongoDB for data persistence. This application allows users to create, edit, and delete tasks easily.

## Features

- **Add Tasks**: Enter a task in the input field and click "Add" to create a new task.
- **Edit Tasks**: Click on a task to toggle its completion status.
- **Delete Tasks**: Remove tasks from the list by clicking the delete icon.
- **Responsive Design**: The application is designed to be user-friendly on both desktop and mobile devices.

## Technologies Used

- **Frontend**: React.js, Axios for API calls, React Icons for icons
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose for object data modeling
- **CSS**: Custom styles for a better user experience

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community) (running on your local machine or accessible remotely)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/nanzzx/todo-list-app.git

2. Navigate to the project directory:

    ```bash
    cd todo-list-app

3. Install dependencies for the server:

   ```bash
   cd Server
   npm install

4. Set up your MongoDB database:

   Make sure your MongoDB server is running locally or adjust the connection string in index.js as needed.

5. Start the backend server:

   ```bash
   node index.js
   
6. Open another terminal and navigate to the client directory:

   ```bash
   cd client

7. Install dependencies for the client:

   ```bash
   npm install

8. Start the React application:

   ```bash
   npm start

9. Open your web browser and go to http://localhost:3000 to see your Todo List application in action.

## Usage
Add tasks to your Todo list by typing in the input field and clicking the "Add" button.
Click on a task to mark it as complete or incomplete.
Use the delete icon to remove a task from the list.

## Contributing
Contributions are welcome! If you have suggestions for improvements or features, feel free to open an issue or submit a pull request.


