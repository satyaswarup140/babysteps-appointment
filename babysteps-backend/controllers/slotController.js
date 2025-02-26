const Doctor = require('../models/Doctor');

exports.getAvailableSlots = async (req, res) => {
    const { doctorId, date } = req.query; // Expecting a date filter

    try {
        const doctor = await Doctor.findById(doctorId);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });

        // Filter slots based on the requested date
        const slots = doctor.timeSlots.filter(slot => slot.date === date);
        
        res.json({ availableSlots: slots });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
