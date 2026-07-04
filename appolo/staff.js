const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const staffDetails = [
        { EmpName: "M.rajesh khanna", role_department: "Emergency Medical Technician", salary: 25000 },
        { EmpName: "S.ganesh chakravathi", role_department: "Radiologic Technologist", salary: 30000 },
        { EmpName: "M.upendra naidu", role_department: "Clinical Pharmacist", salary: 18000 },
        { EmpName: "L.sitara devi", role_department: "Medical Laboratory", salary: 20000 },
        { EmpName: "K.thanesh kumar", role_department: "Physical Therapist", salary: 22000 },
        { EmpName: "J.rani kiranmai", role_department: "Registered Dietitian", salary: 21000 }
    ];

    res.send(staffDetails);
});

router.get("/:id", (req, res) => {
    res.send({
        EmpName: req.params.id,
        message: "Staff Details"
    });
});

module.exports = router;