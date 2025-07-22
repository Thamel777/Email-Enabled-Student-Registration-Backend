# Student Registration Backend

This project is a backend system for student registration developed for **DETZ Global Pvt Ltd - Intern Task 6**. It allows students to register for a class, stores their data in Firebase Firestore, and sends them a registration confirmation email.

---

## 🚀 Features
- Register student with name, email, and class
- Save student data to **Firebase Firestore**
- Auto-generate unique Registration ID
- Send confirmation email using **NodeMailer** (Gmail SMTP)
- Structured code with controllers, routes, and services

---

## 🔧 Tech Stack
- **Backend:** Node.js + Express
- **Database:** Firebase Firestore
- **Email Service:** NodeMailer (using Gmail)

---

## 📁 Project Structure
```
student-registration-backend/
├── app.js
├── .env
├── config/
│   └── firebase.js
├── controllers/
│   └── registerController.js
├── routes/
│   └── register.js
├── services/
│   └── mailService.js
└── serviceAccountKey.json
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repo
```bash
git clone <your-repo-url>
cd student-registration-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Add `.env` File
Create a `.env` file in the root directory:
```env
PORT=5000
FIREBASE_DB_URL=https://<your-project-id>.firebaseio.com
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
```
> ⚠️ Use a [Gmail App Password](https://myaccount.google.com/apppasswords) if 2FA is enabled.

### 4. Add Firebase Admin SDK Key
- Go to Firebase Console → Project Settings → Service Accounts → Generate private key
- Download and rename it to `serviceAccountKey.json`
- Place it in the `config/` folder

### 5. Run the Server
```bash
node app.js
```

---

## 📬 API Endpoint
### POST `/register`
Registers a student and sends a confirmation email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "className": "AI & IoT"
}
```

**Response:**
```json
{
  "message": "Registration successful",
  "id": "STU1729347283951"
}
```

---

## 📸 Deliverables
- ✅ Backend source code
- ✅ Styled confirmation email sent
- ✅ Tested with Thunder Client/Postman
- ✅ Demo video (screen recording)

---

## 📩 Sample Email Output
**Subject:** `Registration Confirmation - Student ID #STU1729347283951`

**Body:** (HTML formatted)
```
Hello John Doe,
Your registration for AI & IoT is confirmed.
Student ID: STU1729347283951
Thank you for registering with DETZ Global Pvt Ltd.
```

---

## 👨‍💻 Developed By
**Thamel Nimsara** – DETZ Internship Program – July 2025
