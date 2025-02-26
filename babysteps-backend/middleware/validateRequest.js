module.exports = (req, res, next) => {
    if (!req.body.patientName || !req.body.doctor || !req.body.date || !req.body.timeSlot) {
        return res.status(400).json({ message: 'Missing required fields' });
    }
    next();
};
