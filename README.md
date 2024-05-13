# OTP

API Node.js Project

This project implements a REST API with a POST method that accepts an “email” parameter as input.

It stores the user’s email and date in an MSSQL database and sends an OTP to the client.

API Endpoint:

• URL: https://otp-api-o3w1.onrender.com/api/otp

• Method: POST
• Input Parameter:

o email: User’s email address

Database Connection
• Database Type: SQL (MSSQL)

• Tables:
o Users: Stores user email and id

o Otps: Stores OTP, date time and user id

External Dependencies

• Email Service (External): Mailjet JS
• Weather Service (External): api.weatherapi
