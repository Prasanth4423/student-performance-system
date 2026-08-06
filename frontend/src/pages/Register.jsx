import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Register.css";


function Register() {


    const navigate = useNavigate();

    const [student, setStudent] = useState({
        student_id: "",
        name: "",
        email: "",
        branch: "",
        year: "",
        password: ""
    });

    const handleChange = (e) => {

        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await api.post("register/", student);

            alert("Registration Successful!");

            navigate("/login");

        } 
        
       catch (error) {

    alert(error.response.data.message);

}

    };

    return (

        <div className="register-page">

            <div className="register-card">

                <div className="text-center mb-4">
                    

                    <div className="register-avatar">
                        🎓
                    </div>

                    <h2 className="mt-3 fw-bold">
                        Student Registration
                    </h2>

                    <p className="text-muted">
                        Create your account to access the Student Performance System.
                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            🆔 Student ID
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Student ID"
                            name="student_id"
                            value={student.student_id}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            👤 Full Name
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Full Name"
                            name="name"
                            value={student.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            📧 Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            name="email"
                            value={student.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            🎓 Branch
                        </label>

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Branch"
                            name="branch"
                            value={student.branch}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            📚 Year
                        </label>

                        <select
                            className="form-select"
                            name="year"
                            value={student.year}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Year</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>

                    </div>

                    <div className="mb-4">

                        <label className="form-label fw-bold">
                            🔒 Password
                        </label>

                        <input
                            type="password"
                            className="form-control"
                            placeholder="Create Password"
                            name="password"
                            value={student.password}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <button
                        className="btn btn-success w-100 register-btn"
                    >
                        Create Account
                    </button>

                </form>

                <div className="text-center mt-4">

                    <p>

                        Already have an account?

                        <Link
                            to="/login"
                            className="ms-2 fw-bold text-decoration-none"
                        >
                            Login
                        </Link>

                    </p>

                    <div className="back-home">
    <button
        className="btn btn-light shadow-sm"
        onClick={() => navigate("/")}
    >
        ← Back to Home
    </button>
</div>

                </div>

            </div>

        </div>

    );

}

export default Register;