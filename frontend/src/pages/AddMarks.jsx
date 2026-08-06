import { useState, useEffect } from "react";
import api from "../services/api";
import "../styles/AddMarks.css";
import BackButton from "../components/BackButton";

function AddMarks() {

    const [marks, setMarks] = useState({
        python: "",
        java: "",
        dbms: "",
        os: "",
        cn: ""
    });

    useEffect(() => {
        loadMarks();
    }, []);

    const handleChange = (e) => {
        setMarks({
            ...marks,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        const studentId = localStorage.getItem("student_id");

        const subjects = [
            { subject: "Python", marks: Number(marks.python) },
            { subject: "Java", marks: Number(marks.java) },
            { subject: "DBMS", marks: Number(marks.dbms) },
            { subject: "Operating Systems", marks: Number(marks.os) },
            { subject: "Computer Networks", marks: Number(marks.cn) },
        ];

        for (const item of subjects) {

            if (isNaN(item.marks) || item.marks < 0 || item.marks > 100) {
                alert(`${item.subject} marks must be between 0 and 100`);
                return;
            }

        }

        try {

            for (const item of subjects) {

                await api.post("marks/", {
                    student: studentId,
                    subject: item.subject,
                    marks: item.marks
                });

            }

            alert("Marks Saved Successfully");

        } catch (error) {

            console.log(error);

            alert("Failed to Save Marks");

        }

    };

    const loadMarks = async () => {

        try {

            const studentId = localStorage.getItem("student_id");

            const response = await api.get(`marks/${studentId}/`);

            setMarks(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card addmarks-card shadow-lg border-0">

                        <div className="card-body p-4">

                            <BackButton />

                            <h2 className="text-center text-primary mb-2">
                                📚 Add Student Marks
                            </h2>

                            <p className="text-center text-muted mb-4">
                                Enter marks obtained in each subject
                            </p>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">🐍 Python</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Python Marks"
                                        name="python"
                                        value={marks.python}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">☕ Java</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Java Marks"
                                        name="java"
                                        value={marks.java}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">🗄️ DBMS</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter DBMS Marks"
                                        name="dbms"
                                        value={marks.dbms}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">💻 Operating Systems</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Operating Systems Marks"
                                        name="os"
                                        value={marks.os}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-bold">🌐 Computer Networks</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        placeholder="Enter Computer Networks Marks"
                                        name="cn"
                                        value={marks.cn}
                                        onChange={handleChange}
                                    />
                                </div>

                                <button
                                    className="btn btn-success w-100 save-btn"
                                    type="submit"
                                >
                                    💾 Save Marks
                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default AddMarks;