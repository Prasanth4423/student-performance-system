import { useEffect, useState } from "react";
import api from "../services/api";
import "../styles/Profile.css";
import BackButton from "../components/BackButton";

function Profile() {

    const [student, setStudent] = useState({
        name: "Leela Prasanth",
        email: "leela@gmail.com",
        branch: "CSE",
        year: "4th Year"
    });

    const studentId = localStorage.getItem("student_id");

useEffect(() => {

    fetchProfile();

}, []);

const fetchProfile = async () => {

    const response = await api.get(`profile/${studentId}/`);

    setStudent(response.data);

};

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    await api.put(`profile/${studentId}/`, student);

    alert("Profile Updated");

};

return (

    <div className="container mt-5">

        <div className="row justify-content-center">

            <div className="col-lg-7 col-md-9">

                <div className="card profile-card shadow-lg border-0">

                    <div className="card-body p-5">

                        <div className="text-center mb-4">
                        <BackButton />

                            <div className="profile-avatar">

                                👤

                            </div>

                            <h2 className="mt-3 text-primary">
                                Student Profile
                            </h2>

                            <p className="text-muted">
                                Manage your personal information
                            </p>

                        </div>

                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    👤 Name
                                </label>

                                <input
                                    className="form-control"
                                    name="name"
                                    value={student.name}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    📧 Email
                                </label>

                                <input
                                    className="form-control"
                                    name="email"
                                    value={student.email}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label fw-bold">
                                    🎓 Branch
                                </label>

                                <input
                                    className="form-control"
                                    name="branch"
                                    value={student.branch}
                                    onChange={handleChange}
                                />

                            </div>

                            <div className="mb-4">

                                <label className="form-label fw-bold">
                                    📚 Year
                                </label>

                                <input
                                    className="form-control"
                                    name="year"
                                    value={student.year}
                                    onChange={handleChange}
                                />

                            </div>

                            <button
                                className="btn btn-primary w-100 profile-btn"
                            >
                                💾 Update Profile
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    </div>

);

}

export default Profile;