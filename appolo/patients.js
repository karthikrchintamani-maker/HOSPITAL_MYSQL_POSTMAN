const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const patientDetails = [
        { patientsName: "M.rajesh", age: 60, gender: "Male", address: "H.no.1-111/3, Tej Towers", room_no: 260 },
        { patientsName: "M.ganesh", age: 50, gender: "Male", address: "H.no.2-223/4, Hitech City", room_no: 261 },
        { patientsName: "M.upendra", age: 52, gender: "Male", address: "H.no.7-777/3, Navi Mumbai", room_no: 262 },
        { patientsName: "S.sitara", age: 48, gender: "Female", address: "H.no.1-345/3, New Delhi", room_no: 263 },
        { patientsName: "M.thanesh", age: 60, gender: "Male", address: "H.no.1-852/7, Chandni Chowk", room_no: 264 },
        { patientsName: "J.kiranmai", age: 60, gender: "Female", address: "H.no.1-112/5, Guwahati", room_no: 265 }
    ];

    res.send(patientDetails);
});

router.get("/:id", (req, res) => {
    res.send({
        room_no: req.params.id,
        message: "Patient Details"
    });
});

module.exports = router;