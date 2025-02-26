const Appointment = require('../models/Appointment');
const { isValidTimeSlot } = require('../utils/timeUtils');

// Get all appointments
exports.getAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('doctorId'); // Ensure field name matches your schema
        res.json(appointments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Book an appointment
exports.bookAppointment = async (req, res) => {
    try {
        const { doctorId, timeSlot, patientName } = req.body;

        if (!isValidTimeSlot(timeSlot)) {
            return res.status(400).json({ message: 'Invalid time slot' });
        }

        const appointment = new Appointment({ doctorId, timeSlot, patientName });
        await appointment.save();
        res.status(201).json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
