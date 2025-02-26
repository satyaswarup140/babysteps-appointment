const Doctor = require("../models/Doctor");

// @desc Get all doctors
// @route GET /api/doctors
// @access Public
const getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch doctors", error: error.message });
    }
};

// @desc Add a new doctor
// @route POST /api/doctors
// @access Public
const addDoctor = async (req, res) => {
    try {
        const { name, specialization, experience, availability } = req.body;

        // Basic validation
        if (!name || !specialization || !experience || !availability) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        const newDoctor = new Doctor({
            name,
            specialization,
            experience,
            availability
        });

        const savedDoctor = await newDoctor.save();
        res.status(201).json(savedDoctor);
    } catch (error) {
        res.status(500).json({ message: "Failed to add doctor", error: error.message });
    }
};

module.exports = { getDoctors, addDoctor };
