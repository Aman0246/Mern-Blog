# BlogginSite - A Blogging Platform with Google Login

BlogginSite is a web application that allows users to write, read, and interact with blogs. It provides a platform for users to share their thoughts and ideas by writing their blogs, as well as engaging with other users' content through comments. The application features Google login for a seamless and secure authentication experience.
![image](https://github.com/Aman0246/Mern-Blog/assets/130737436/76edf4ee-31fd-4927-9256-e41bbfe12fc7)


#Google Login
![image](https://github.com/Aman0246/Mern-Blog/assets/130737436/9ca7c161-8a22-496e-aaf0-5e68d5a5f931)


#HomePage
![image](https://github.com/Aman0246/Mern-Blog/assets/130737436/a4e93809-bac0-461a-a73d-b4420b9c9bfc)


#createBlog
![image](https://github.com/Aman0246/Mern-Blog/assets/130737436/6b32d72a-5e44-44f5-8408-fd9f23134875)


#singlBlogPage
![image](https://github.com/Aman0246/Mern-Blog/assets/130737436/e8c3b6dc-deb9-43a9-8090-53bea63ece79)






#commentPage
![image](https://github.com/Aman0246/Mern-Blog/assets/130737436/01728046-ee85-417f-895a-702a57b07c14)










## Features

- User Registration and Google Login: Users can sign up using their email and password or choose to log in using their Google account.
- Create and Manage Blogs: Authenticated users can write, update, and delete their own blogs.
- Comment System: Users can interact with blogs by adding, deleting, and updating comments on blog posts.
- Responsive UI: The frontend of the application is designed to provide an optimal viewing experience across different devices.

## Technologies Used

### Backend

- Node.js: JavaScript runtime for building the server-side application.
- Express.js: Web framework for handling routes and requests.
- AWS SDK: Allows interaction with Amazon Web Services for various functionalities.
- Bcrypt: Library for hashing passwords for secure storage.
- Cookie-parser: Middleware to parse cookies from incoming requests.
- CORS: Enables cross-origin resource sharing.
- Dotenv: For loading environment variables from a .env file.
- JSON Web Token (jsonwebtoken): Used for user authentication and authorization.
- Mongoose: MongoDB object modeling tool for interacting with the database.
- Multer: Middleware for handling file uploads.
- Nodemon: Utility for automatically restarting the server during development.
- Validator: Library for data validation.

### Frontend

- React: JavaScript library for building the user interface.
- Material-UI (MUI): Component library for creating a visually appealing UI.
- Emotion: Used for styling components with CSS-in-JS.
- Redux Toolkit: State management library for handling application state.
- Axios: HTTP client for making API requests to the backend.
- Firebase: Provides authentication services for Google login.
- React Router DOM: Library for handling routing in the frontend.
- React Redux: Integrates React with Redux for state management.
- Redux Persist: Library for persisting Redux state in local storage.

## Installation and Usage

1. Clone the repository: `git clone https://github.com/your-username/BlogginSite.git`
2. Navigate to the project directory: `cd BlogginSite`
3. Install backend dependencies: `npm install` (from the root folder)
4. Install frontend dependencies: `cd frontend && npm install`
5. Create a `.env` file in the root folder and set the required environment variables:

```
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-jwt-secret
GOOGLE_CLIENT_ID=your-google-client-id
```

6. Start the development server:
   - For backend (from the root folder): `npm run dev`
   - For frontend (from the frontend folder): `npm start`

The application will be accessible at `http://localhost:3000` in your browser.

## Contribution

If you wish to contribute to BlogginSite, feel free to submit pull requests or open issues on the GitHub repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

We would like to acknowledge the open-source community and all the contributors whose libraries, frameworks, and tools made this project possible.

---

Please note that this README is a template, and you may need to modify it to match your actual project structure or add more detailed information as needed. Also, make sure to replace "your-username" and other placeholders with actual values specific to your GitHub repository and Google API credentials.
Certainly! Here's the continuation of the README for the BlogginSite project:

## Deployment

To deploy BlogginSite to a live server, follow these steps:

1. Build the frontend: From the `frontend` folder, run `npm run build`. This will create a production-ready build of the frontend application.

2. Set up a production-ready MongoDB database. Make sure to update the `MONGODB_URI` in the `.env` file to point to the production database.

3. Ensure that you have the necessary environment variables set up for production, including `JWT_SECRET` and `GOOGLE_CLIENT_ID`.

4. Deploy the backend: You can deploy the backend Node.js server to a platform like AWS, Heroku, or any other cloud hosting service that supports Node.js applications.

5. Serve the frontend: Serve the static build of the frontend application using a web server like Nginx or Apache. Point the server to the build files generated in the `frontend/build` directory.

6. Configure CORS: In a production environment, make sure to configure CORS settings to allow requests from your frontend domain.

## Security Considerations

- Ensure that sensitive information, such as JWT secret and database credentials, are kept safe and not exposed in version control systems.

- Implement proper input validation and sanitization on the server-side to prevent common security vulnerabilities like SQL injection and Cross-Site Scripting (XSS).

- Use HTTPS to encrypt data transmitted between the client and the server to ensure data security and prevent eavesdropping.

- Regularly update and patch all dependencies used in the project to avoid potential security vulnerabilities.

- Set up proper user authentication and authorization to control access to sensitive operations like creating, updating, and deleting blogs/comments.

## Future Enhancements

Here are some ideas for future enhancements to make BlogginSite even better:

- User Profiles: Allow users to create and customize their profiles with avatars, bios, and other personal information.

- Like and Share: Add the ability for users to like and share their favorite blog posts.

- Tagging System: Implement a tagging system for categorizing blogs and improving search functionality.

- Rich Text Editor: Integrate a rich text editor to provide users with more formatting options while writing blogs.

- Notifications: Notify users of new comments, likes, or shares on their blogs.

- Pagination: Add pagination to the blog listing and comments to improve performance and user experience.

## Troubleshooting

If you encounter any issues or need assistance with BlogginSite, feel free to open an issue on the GitHub repository. We will do our best to help you out.

## Contact

If you have any questions, feedback, or just want to say hi, you can reach out to the project maintainers at [email@example.com](amankashyap0246@gmail.com).

---

Feel free to add any other sections or customize the content as per your project's specific requirements. The
It seems like you have provided environment variable settings for both the frontend and backend of your BlogginSite project. Let's incorporate these environment variables into the README so that users have a better understanding of how to set up their project.

---

## Environment Variables

To run BlogginSite successfully, you need to set up the following environment variables:

### Frontend Environment Variables

Create a `.env` file in the `frontend` folder and add the following:

```
VITE_PORT=http://localhost:7000/
# VITE_PORT=https://blogprojectmern.onrender.com
VITE_apiKey=YOUR_FIREBASE_API_KEY
VITE_authDomain=YOUR_FIREBASE_AUTH_DOMAIN
VITE_projectId=YOUR_FIREBASE_PROJECT_ID
VITE_storageBucket=YOUR_FIREBASE_STORAGE_BUCKET
VITE_messagingSenderId=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_appId=YOUR_FIREBASE_APP_ID
VITE_measurementId=YOUR_FIREBASE_MEASUREMENT_ID
```

### Backend Environment Variables

Create a `.env` file in the root folder (where the `backend` folder resides) and add the following:

```
MONGOCONNECT=YOUR_MONGODB_CONNECTION_STRING
PORT=7000
# CORSORIGIN=http://localhost:5173/
BUCKETNAME="aman0246-bucket"
BUCKETREGIN="ap-southeast-2"
ACCESSKEY=YOUR_AWS_ACCESS_KEY
SECERETACCESSKEY=YOUR_AWS_SECRET_ACCESS_KEY
JWT=YOUR_CUSTOM_JWT_SECRET
```

Replace the placeholder values with the actual credentials and keys specific to your setup. Here's a brief explanation of each environment variable:

- **Frontend Environment Variables:**
  - `VITE_PORT`: The port on which the frontend server will run during development.
  - `VITE_apiKey`: Your Firebase API Key for authentication services.
  - `VITE_authDomain`: Your Firebase Auth Domain.
  - `VITE_projectId`: Your Firebase Project ID.
  - `VITE_storageBucket`: Your Firebase Storage Bucket.
  - `VITE_messagingSenderId`: Your Firebase Messaging Sender ID.
  - `VITE_appId`: Your Firebase App ID.
  - `VITE_measurementId`: Your Firebase Measurement ID (for analytics).

- **Backend Environment Variables:**
  - `MONGOCONNECT`: Your MongoDB connection string for connecting to the database.
  - `PORT`: The port on which the backend server will run.
  - `BUCKETNAME`: The name of your AWS S3 bucket where files will be stored.
  - `BUCKETREGIN`: The region of your AWS S3 bucket.
  - `ACCESSKEY`: Your AWS Access Key ID for interacting with AWS services.
  - `SECERETACCESSKEY`: Your AWS Secret Access Key for accessing AWS services.
  - `JWT`: A custom JWT secret for generating and validating JSON Web Tokens.

Please make sure to keep these environment variables secure and not expose them in public repositories.

---

Add this section to your README to guide users on setting up the required environment variables. Ensure that you also mention the purpose of each variable to help users understand their significance.
