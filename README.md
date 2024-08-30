# Celestial Music

Celestial Music is a web application that allows users to explore, listen to, and manage their favorite music. Built with HTML, CSS, JavaScript, and NestJS, it leverages MongoDB for data storage, JWT for authentication, and integrates with free music APIs and Cloudinary for media management.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication with JWT
- Browse and search for music
- Play music directly from the app
- Manage playlists and favorite tracks
- Responsive design for mobile and desktop
- Integration with free music APIs
- Media management with Cloudinary

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: NestJS
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **APIs**: Free music APIs
- **Media Management**: Cloudinary

## Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Steps

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/celestial-music.git
   cd celestial-music
   ```
2. Install dependencies:
      ```sh
   npm install
   ```
3.Set up environment variables: Create a .env file in the root directory and add the following variables:
  ```sh
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
  CLOUDINARY_API_KEY=your_cloudinary_api_key
  CLOUDINARY_API_SECRET=your_cloudinary_api_secret
  ```
4. Run the application:
   ```sh
   npm run start
## Usage
  Open your browser and navigate to http://localhost:3000.
  Sign up or log in to access the full features of the application.
  Browse and search for music, create playlists, and enjoy your favorite tracks.


