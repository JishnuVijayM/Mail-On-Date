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


* * * * * *
| | | | | |
| | | | | └── Day of the Week (0 - 7) (Sun-Sat, both 0 and 7 are Sunday)
| | | | └──── Month (1 - 12)
| | | └────── Day of Month (1 - 31)
| | └──────── Hour (0 - 23)
| └────────── Minute (0 - 59)
└──────────── Second (0 - 59) ← optional in node-schedule
