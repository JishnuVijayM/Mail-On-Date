npm install express nodemailer node-schedule body-parser

email-reminder-app/
├── controllers/
│   └── reminderController.js
├── routes/
│   └── reminderRoutes.js
├── server.js
├── package.json

npm start

url : http://localhost:5000/set-reminder

Payload:
{
  "email": "demo@example.com",
  "date": "2025-06-25"
}
