# 🏥MUKTI Hospital Fullstack Project

Welcome to the MUKTI Hospital Fullstack Project! This application serves as a comprehensive hospital management system, designed to streamline various functionalities such as doctor management, patient appointments, and blog publishing.

## Technologies Used

- **Frontend:** React.js
- **State Management:** Redux Toolkit
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Password Encryption:** Bcrypt
- **UI Framework:** AdminLTE, EJS

## Features

- **Doctors Dashboard:** A user-friendly dashboard for doctors to manage their profiles and appointments.
- **Blog Management:** Doctors can write and manage blogs for patient education and information sharing.
- **Appointment Scheduling:** Patients can schedule appointments with doctors from various departments.
- **Department Management:** The system organizes doctors into their respective departments for better navigation.


## Setup Instructions

### Prerequisites

- Node.js
- MongoDB
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Daniel-Sameh/DEPI-Hospital-Project
   cd MUKTI-Hospital
2. **Set up the backend:**
    - **Navigate to the server folder:**
        ```bash
        cd server
    - **Create a `.env` file and add your MongoDB connection string:**
        ```bash
        MONGODB_URI=<your_mongodb_connection_string>
    - **Install the backend dependencies:**
      ```bash
      npm install
    - **You are ready to run the backend server:**
      ```bash
      nodemon index.js
3. **Set up the frontend:**
   - **Open a new terminal, and navigate to the client folder:**
      ```bash
      cd ../client
   - **Install the frontend dependencies:**
     ```bash
     npm install
   - **You are ready to run the frontend application:**
      ```bash
      npm start
  
## Usage

- Access the application through your browser at `http://localhost:3000`.
- Access the doctor dashboard through your browser at `http://localhost:5000/login`.
  
## Security

- Passwords for doctors are encrypted using Bcrypt.
- JWT is used for secure authentication.
- Best practices are used to ensure security across the application.

