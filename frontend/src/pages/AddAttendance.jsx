import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/Attendance.css";
import BackButton from "../components/BackButton";

function AddAttendance() {
    const studentId = localStorage.getItem("student_id");
    const [attendance, setAttendance] = useState({
        python: "",
        java: "",
        dbms: "",
        os: "",
        cn: ""
    });

    const handleChange = (e) => {

        setAttendance({

            ...attendance,

            [e.target.name]: e.target.value

        });

    };

  const handleSubmit = async (e) => {

    e.preventDefault();

    const studentId = localStorage.getItem("student_id");

    const subjects = [
        { subject: "Python", attendance: Number(attendance.python) },
        { subject: "Java", attendance: Number(attendance.java) },
        { subject: "DBMS", attendance: Number(attendance.dbms) },
        { subject: "Operating Systems", attendance: Number(attendance.os) },
        { subject: "Computer Networks", attendance: Number(attendance.cn) },
    ];

    // Validation
    for (const item of subjects) {

        if (item.attendance === "" || isNaN(item.attendance)) {
            alert(`Please enter attendance for ${item.subject}`);
            return;
        }

        if (item.attendance < 0 || item.attendance > 100) {
            alert(`${item.subject} attendance must be between 0 and 100`);
            return;
        }

    }

    try {

        for (const item of subjects) {

            await api.post("attendance/", {
                student: studentId,
                subject: item.subject,
                attendance: item.attendance,
            });

        }

        alert("Attendance Saved Successfully");

    } catch (error) {

        console.log(error);

        alert("Failed to Save Attendance");

    }

};
useEffect(() => {
    loadAttendance();
}, []);

const loadAttendance = async () => {

    try {

        const studentId = localStorage.getItem("student_id");

        const response = await api.get(
            `attendance/${studentId}/`
        );

        setAttendance(response.data);

    } catch (error) {

        console.log(error);

    }

};
return (

    <div className="container mt-5">
        

        <div className="row justify-content-center">

            <div className="col-lg-8">

                <div className="card attendance-card shadow-lg border-0">

                    <div className="card-body p-5">
                        <BackButton />

                        

                        <h2 className="text-center text-success mb-2">
                            📅 Add Attendance
                        </h2>

                        <p className="text-center text-muted mb-4">
                            Enter attendance percentage for each subject
                        </p>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    🐍 Python
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Python Attendance"
                                    name="python"
                                    value={attendance.python}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    ☕ Java
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Java Attendance"
                                    name="java"
                                    value={attendance.java}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    🗄️ DBMS
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter DBMS Attendance"
                                    name="dbms"
                                    value={attendance.dbms}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    💻 Operating Systems
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Operating Systems Attendance"
                                    name="os"
                                    value={attendance.os}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-4">

                                <label className="form-label fw-bold">
                                    🌐 Computer Networks
                                </label>

                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Enter Computer Networks Attendance"
                                    name="cn"
                                    value={attendance.cn}
                                    onChange={handleChange}
                                />

                            </div>

                            <button
                                className="btn btn-success w-100 attendance-btn"
                            >
                                📅 Save Attendance
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>

);

}

export default AddAttendance;