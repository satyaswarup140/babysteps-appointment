exports.isValidTimeSlot = (time) => {
    const validSlots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'];
    return validSlots.includes(time);
};

