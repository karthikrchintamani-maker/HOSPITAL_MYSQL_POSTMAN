const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const drugDetails = [
        { drugName: "Atorvastatin", price: 600, drugClass: "Statins", rowcolumn: "A33" },
        { drugName: "Lisinopril", price: 550, drugClass: "ACE Inhibitors", rowcolumn: "A34" },
        { drugName: "Metformin", price: 20, drugClass: "Biguanides", rowcolumn: "A35" },
        { drugName: "Amlodipine", price: 126, drugClass: "Calcium Channel Blockers", rowcolumn: "A36" },
        { drugName: "Omeprazole", price: 455, drugClass: "PPIs", rowcolumn: "A37" },
        { drugName: "Albuterol", price: 356, drugClass: "SABAs", rowcolumn: "A38" }
    ];

    res.send(drugDetails);
});

router.get("/:id", (req, res) => {
    res.send({
        rowcolumn: req.params.id,
        message: "Medicine Details"
    });
});

module.exports = router;