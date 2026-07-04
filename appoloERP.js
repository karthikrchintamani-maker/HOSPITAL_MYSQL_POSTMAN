const express = require("express");
const Erp = express();
const mysql = require("mysql2");

const doc_details = require("./appolo/doctors");
const patient_details = require("./appolo/patients");
const drug_details = require("./appolo/pharmacy");
const staff_details = require("./appolo/staff");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "info123",
    port: 3310
});

connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL Connected");

    connection.query("CREATE DATABASE IF NOT EXISTS appolo_hospital_db", (err) => {
        if (err) throw err;
        console.log("Database Created");

        connection.changeUser({ database: "appolo_hospital_db" }, (err) => {
            if (err) throw err;
            console.log("Using appolo_hospital_db");

            connection.query("CREATE TABLE IF NOT EXISTS doctor1(docName VARCHAR(50),ID INT,specialityIn VARCHAR(50),available BOOLEAN)");
            connection.query("CREATE TABLE IF NOT EXISTS patients1(patientsName VARCHAR(50),age INT,gender VARCHAR(20),address VARCHAR(100),room_no INT)");
            connection.query("CREATE TABLE IF NOT EXISTS pharmacy(drugName VARCHAR(50),price INT,drugclass VARCHAR(100),rowColumn VARCHAR(20))");
            connection.query("CREATE TABLE IF NOT EXISTS staff1(EmpName VARCHAR(50),role_department VARCHAR(100),salary INT)");

            connection.query("DELETE FROM doctor1");
            connection.query("DELETE FROM patients1");
            connection.query("DELETE FROM pharmacy");
            connection.query("DELETE FROM staff1");

            const doctors = [
                ["M.ravi",111,"Psychiatry",true],
                ["S.giri",112,"Dermatology",true],
                ["P.usha",113,"Cardiologist",false],
                ["L.sita",114,"Anesthesiology",true],
                ["K.tharun",115,"Neurologist",false],
                ["J.kiran",116,"General Checkup",true]
            ];

            connection.query(
                "INSERT INTO doctor1(docName,ID,specialityIn,available) VALUES ?",
                [doctors],
                (err,result)=>{
                    if(err) throw err;
                    console.log(result.affectedRows+" Doctor Rows Inserted");
                }
            );

            const patients = [
                ["M.rajesh",60,"Male","H.no.1-111/3, Tej Towers",260],
                ["M.ganesh",50,"Male","H.no.2-223/4, Hitech City",261],
                ["M.upendra",52,"Male","H.no.7-777/3, Navi Mumbai",262],
                ["S.sitara",48,"Female","H.no.1-345/3, New Delhi",263],
                ["M.thanesh",60,"Male","H.no.1-852/7, Chandni Chowk",264],
                ["J.kiranmai",60,"Female","H.no.1-112/5, Guwahati",265]
            ];

            connection.query(
                "INSERT INTO patients1(patientsName,age,gender,address,room_no) VALUES ?",
                [patients],
                (err,result)=>{
                    if(err) throw err;
                    console.log(result.affectedRows+" Patient Rows Inserted");
                }
            );

            const pharmacy = [
                ["Atorvastatin",600,"Statins","A33"],
                ["Ramipril",550,"ACE Inhibitors","A34"],
                ["Metformin",20,"Biguanides","A35"],
                ["Amlodipine",126,"Calcium Channel Blockers","A36"],
                ["Omeprazole",455,"PPIs","A37"],
                ["Salbutamol",356,"SABAs","A38"]
            ];

            connection.query(
                "INSERT INTO pharmacy(drugName,price,drugclass,rowColumn) VALUES ?",
                [pharmacy],
                (err,result)=>{
                    if(err) throw err;
                    console.log(result.affectedRows+" Pharmacy Rows Inserted");
                }
            );

            const staff = [
                ["M.rajesh khanna","Emergency Department",25000],
                ["S.ganesh chakravathi","Radiology Department",30000],
                ["M.upendra naidu","Pharmacy Department",18000],
                ["L.sitara devi","Laboratory Department",20000],
                ["K.thanesh kumar","Physiotherapy Department",22000],
                ["J.rani kiranmai","Nutrition Department",21000]
            ];

            connection.query(
                "INSERT INTO staff1(EmpName,role_department,salary) VALUES ?",
                [staff],
                (err,result)=>{
                    if(err) throw err;
                    console.log(result.affectedRows+" Staff Rows Inserted");
                }
            );

        });
    });
});

Erp.get("/", (req, res) => {
    res.send("Worked...");
});

Erp.use("/doctors", doc_details);
Erp.use("/patients", patient_details);
Erp.use("/drugs", drug_details);
Erp.use("/staff", staff_details);

Erp.listen(8000, () => {
    console.log("Server Running on Port 8000");
});

module.exports = connection;