# Digital Behavior Twin

A flagship full-stack project that models user digital behavior
using analytics and AI to provide insights into focus and productivity.

## Problem
Users lack clear visibility into how their digital time is spent
and how behavior patterns evolve over time.

## Objective
To build a privacy-first platform that captures user activity data
and generates meaningful behavioral insights.

## MVP Scope
- User authentication
- Manual activity logging
- Daily & weekly summaries
- Basic behavior insights
- Trend-based predictions

## System Design
The system follows a client-server architecture where users log
activities through a frontend interface. The backend processes
activity data and derives behavioral insights dynamically.


---

## Core Data Model
The system is centered around **activity logs**, which capture:
- Activity title
- Category (DeepWork, Learning, Distraction, Rest)
- Start and end time
- Date

These logs are used to compute timelines, summaries, and behavior trends.

---

## Tech Stack
**Frontend**
- React.js
- Tailwind CSS

**Backend**
- Node.js
- Express.js
- Prisma ORM

**Database**
- PostgreSQL

---

## Project Status
🚧 Backend core completed (Auth, Activity Logging, Insights)

---

## Features Implemented

### Authentication
- User registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes

### Activity Logging
- Add user activities with category and time range
- Fetch daily activity timelines
- Fetch weekly activity summaries

### Behavior Insights
- Daily insights (focus time, distraction time, longest focus session)
- Weekly behavior trends
- Focus vs distraction analytics
- All insights computed dynamically (no stored metrics)

---

## API Overview

### Auth
- POST /api/auth/register
- POST /api/auth/login

### Activities
- POST /api/activities
- GET /api/activities/day
- GET /api/activities/week

### Insights
- GET /api/insights/day
- GET /api/insights/week

---

## Current Capabilities
The backend currently supports secure user authentication, activity
data collection, and dynamic behavioral analytics. The system forms
the foundation of a Digital Behavior Twin that will be extended with
visual dashboards and AI-based analysis in later phases.

---

## Design Principles
- Privacy-first (manual logging, no passive tracking)
- Single source of truth (activity logs)
- Computed insights instead of stored metrics
- Modular backend architecture (routes, controllers, services)



---

### 🔹 Future Enhancements
```md
## Future Enhancements
- Monthly behavior reports
- AI-based productivity predictions
- Mobile app version
- Advanced charts and comparison

### Features Added
- Pattern Insights
- Category distribution 
- Time of day productivity
