const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const doctorsDetails = [
        { docName: "M.ravi", ID: 111, specialityIn: "psychiatry", available: true },
        { docName: "S.giri", ID: 112, specialityIn: "dermatology", available: true },
        { docName: "P.usha", ID: 113, specialityIn: "cardiologist", available: false },
        { docName: "L.sita", ID: 114, specialityIn: "anesthesiology", available: true },
        { docName: "K.tharun", ID: 115, specialityIn: "Neurologist", available: false },
        { docName: "J.kiran", ID: 116, specialityIn: "General Checkup", available: true }
    ];

    res.send(doctorsDetails);
});

router.get("/:id", (req, res) => {
    res.send({
        ID: req.params.id,
        message: "Doctor Details"
    });
});

module.exports = router;