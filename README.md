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

## Status
🚧 Day 0 – Planning

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
🚧 Backend setup in progress

