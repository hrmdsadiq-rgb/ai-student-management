# AI Student Management System - Frontend

Modern React 18 frontend for the AI Student Management System with Redux, Material-UI, and Tailwind CSS.

## Features

- **Authentication**: JWT-based login and session management
- **Dashboard**: Real-time analytics and performance metrics
- **Student Management**: CRUD operations for student records
- **Course Management**: Manage courses and assignments
- **Analytics**: Predictive analytics and at-risk student identification
- **AI Chatbot**: Interactive AI-powered tutoring system
- **Assessments**: Assignment and assessment management
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Tech Stack

- React 18
- Redux Toolkit
- Material-UI (MUI) 5
- Tailwind CSS
- Axios
- React Router v6
- Chart.js

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env` file:
   ```bash
   cp .env.example .env
   ```

3. Update `.env` with your API URL:
   ```
   REACT_APP_API_BASE_URL=http://localhost:5000/api
   ```

### Running the Application

**Development mode:**
```bash
npm start
```

**Build for production:**
```bash
npm run build
```

**Run tests:**
```bash
npm test
```

The application will open at `http://localhost:3000`

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/          # Reusable components
│   │   ├── Layout.js
│   │   ├── ProtectedRoute.js
│   │   ├── Sidebar.js
│   │   └── TopBar.js
│   ├── pages/              # Page components
│   │   ├── Dashboard.js
│   │   ├── StudentManagement.js
│   │   ├── CourseManagement.js
│   │   ├── Analytics.js
│   │   ├── Chatbot.js
│   │   ├── Assessments.js
│   │   ├── Login.js
│   │   └── Profile.js
│   ├── services/           # API services
│   │   └── api.js
│   ├── store/              # Redux store and slices
│   │   ├── index.js
│   │   └── slices/
│   │       ├── authSlice.js
│   │       ├── studentSlice.js
│   │       ├── courseSlice.js
│   │       ├── analyticsSlice.js
│   │       └── uiSlice.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## API Integration

The frontend connects to the backend API at `http://localhost:5000/api`.

### Key Endpoints Used:

- `POST /auth/login` - User authentication
- `GET /students` - Fetch all students
- `POST /students` - Create new student
- `GET /courses` - Fetch all courses
- `POST /courses` - Create new course
- `GET /analytics/dashboard` - Get dashboard analytics
- `POST /ai/chat` - Send message to AI chatbot

## Environment Variables

Create a `.env` file in the root directory:

```
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_API_TIMEOUT=30000
REACT_APP_ENV=development
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT

## Authors

- Mohammed Sadiq H R

## Support

For support, email: hrmdsadiq@gmail.com
