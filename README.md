# Hinge Dating - A Dating Web and App

## Description

Hinge Dating is a personal project aimed at creating a platform where random individuals can connect online for dating purposes. The project includes both a web application and a mobile application developed using React.js for the web and React Native for mobile. Users can interact with each other through real-time chat, view and like each other's profiles, and engage in meaningful conversations.

## Features

1. **Real-time Chat:** Users can communicate with each other instantly through real-time chat functionality.
2. **Profile Liked:** Users can express interest in each other's profiles by liking them.
3. **Random Matching:** The platform facilitates random connections between users based on their preferences.
4. **Secure Authentication:** User authentication is implemented securely to protect user data and privacy.
5. **MongoDB Integration:** Data is stored and accessed using MongoDB, ensuring efficient data management.
6. **Express.js Backend:** The backend is built using Express.js, providing a robust and scalable server-side infrastructure.

## Tech Stack

- **Frontend:** React.js (for web), React Native (for mobile)
- **Backend:** Express.js
- **Database:** MongoDB

## For Developers

Firstly add the followind data in the respective files

- in **api/.env** add your MongoDb database connection URL
- in **datingapp/env.js** add your IPv4 address
- in **datingweb/.env** add your IPv4 address

Now open 3 terminals to run app, web, and backend at the same time
in the first terminal run the following commands

```
    git clone https://github.com/Moksh91119/hinge-dating.git  ## Clone the repository
    cd ./hinge-dating/api ## navigate to the backend folder
    npm install ## install dependencies
    npm start ## start the server
```

in the second terminal run the following commands

```
    cd ./hinge-dating/datingweb ## navigate to the web folder
    npm install ## install dependencies
    npm run dev ## start the server
```

in the third terminal run the following commands

```
    cd ./hinge-dating/datingapp ## navigate to the app folder
    npm install ## install dependencies
    npx expo start ## start the server
```

## Contributing

Contributions are welcome! If you would like to contribute to the project, please fork the repository and submit a pull request with your changes.

## Contact

If you have any questions or suggestions, feel free to reach out to the project owner at [itsmemoksh.in](https://itsmemoksh.in/).
