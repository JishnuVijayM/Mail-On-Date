const nodemailer = require('nodemailer');
const schedule = require('node-schedule');

exports.setReminder = (req, res) => {
    const { email, date } = req.body;

    if (!email || !date) {
        return res.status(400).json({ message: 'Email and date are required' });
    }

    const reminderDate = new Date(date);
    reminderDate.setHours(16, 17, 0, 0); // 16 = 4 PM, 11 = minutes

    const now = new Date();
    if (reminderDate <= now) {
        return res.status(400).json({ message: 'Reminder date must be in the future' });
    }

    // Email transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'merndevelopersoft@gmail.com',       // replace email
            pass: 'hyidzpjuwzohaph'           // replace (use App Password for Gmail)
        }
    });

    const mailOptions = {
        from: 'merndevelopersoft@gmail.com',
        to: email,
        subject: '⏰ Reminder Email',
        text: 'Hey! This is your scheduled reminder.'
    };

    // Schedule email
    schedule.scheduleJob(reminderDate, () => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) return console.error(`❌ Failed to send to ${email}:`, err);
            console.log(`✅ Email sent to ${email}:`, info.response);
        });
    });

    res.status(200).json({
        message: `Reminder scheduled successfully for ${reminderDate.toLocaleString()}`
    });
};
