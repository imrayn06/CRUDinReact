# React CRUD App with REST API

Deployed Link :  https://deft-donut-12008e.netlify.app/

Snapshots will be available soon...

This is a simple React application that demonstrates CRUD (Create, Read, Update, Delete) functionality using a REST API. The app allows users to manage posts, including creating, updating, deleting, and viewing posts.

## Features

- **Create**: Add new posts.
- **Read**: View a list of posts and individual post details.
- **Update**: Edit existing posts.
- **Delete**: Remove posts.
- **Dynamic Pagination**: Number of posts per page adjusts based on screen size. (Pending Implementation)

## Technologies Used

- React (with hooks)
- JSONPlaceholder (REST API for fetching and manipulating data)
- Bootstrap for UI styling
- React Router for routing
- Custom Utility Functions (`truncate`, `convertToSlug`)

### This app uses the JSONPlaceholder API for managing posts. The following endpoints are used:

- GET /posts: Fetch a list of posts.
- GET /posts/{id}: Fetch a single post by its ID.
- POST /posts: Create a new post.
- PUT /posts/{id}: Update an existing post.
- DELETE /posts/{id}: Delete a post.
  
The data is fetched and displayed dynamically in the app.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/imrayn06/CRUDinReact.git

### 2. Navigate to the project directory

cd react-crud-app

### 3. Install Dependencies

npm i


### 4. Run the Application

npm run dev




/react-crud-app
├── /public
│   └── index.html
├── /src
│   ├── /components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   ├── /pages
│   │   ├── Home.jsx
│   │   ├── AddBlog.jsx
│   │   └── EditBlog.jsx
│   │   └── Blog.jsx
│   │   └── BlogListing.jsx
│   ├── /utils
│   │   └── utils.js
│   ├── App.jsx
├── /node_modules
├── package.json
└── README.md
```
