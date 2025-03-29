# Project Name

## Description
Xohani project backend

## Folder Structure
```
src/
│-- Config/
│   ├── db.js
│   ├── imagekit.js
│
│-- Controllers/
│   ├── enrollment.controller.js
│   ├── user.controller.js
│   ├── webinar.controller.js
│
│-- Middlewares/
│   ├── auth.middleware.js
│   ├── errorhandler.middleware.js
│   ├── logger.middleware.js
│   ├── uploadProfile.middleware.js
│
│-- Models/
│   ├── enrollment.model.js
│   ├── user.model.js
│   ├── webinar.model.js
│
│-- Routes/
│   ├── user.routes.js
│   ├── webinar.routes.js
│
│-- Utils/
│   ├── imagekitService.js
│   ├── jwtUtil.js
│   ├── logger.js
│
├── .env
├── .env.sample
├── .gitignore
├── .prettierrc.yml
├── index.js
├── package-lock.json
```

## Installation
```sh
npm install
```

## Usage
```sh
npm run dev
```

## Environment Variables
Create a `.env` file in the root directory and add the necessary environment variables. Use `.env.sample` as a reference.

## Deployment
Deployment link: [[Link](https://xohani-project.onrender.com)]
