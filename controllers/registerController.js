const db = require('../config/firebase');
const { sendConfirmationEmail } = require('../services/mailService');

const generateRegisterId = () => 'STU' + Date.now();

exports.registerStudent = async (req, res) => {
    try {
        const { name, email, className } = req.body;

        if (!name || !email || !className) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const registerId = generateRegisterId();

        console.log("Incoming request:", req.body);

        const studentData = {
            registerId,
            name,
            email,
            className,
        };

        console.log("Student data to be saved:", studentData);

        await db.collection('students').doc(registerId).set(studentData);
        await sendConfirmationEmail(studentData);

        res.status(201).json({ message: 'Student registered successfully', registerId });
    } catch (error) {
        console.error('Error registering student:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};