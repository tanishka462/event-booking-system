Event Booking System
Description:
A mini backend system for event booking built using Node.js, Express, Sequelize ORM and MySQL.
Features:
• Create events
• Book tickets
• Prevent overbooking using transactions
• User booking history
• Attendance verification
• Swagger API documentation

Tech Stack:
Node.js
Express.js
Sequelize ORM
MySQL
Swagger

Setup Instructions:
1 Clone repo:
git clone REPO_LINK
2 Install dependencies:
npm install
3 Configure environment variables:

Create .env file:
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=event_booking

4 Run server:
npm run dev
API Documentation:
http://localhost:5000/api-docs

API Endpoints:
GET /events
POST /events
POST /bookings
GET /users/:id/bookings
POST /attendance

Docker Setup:
Run:
docker-compose up --build
API:
http://localhost:5000
Swagger:
http://localhost:5000/api-docs