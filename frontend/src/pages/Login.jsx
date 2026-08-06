import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/Login.css";


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("login/", {

                email,
                password

            });

            localStorage.setItem("student_id", response.data.student_id);
            localStorage.setItem("student_name", response.data.name);

            alert(response.data.message);

            navigate("/dashboard");

        } catch (error) {

            alert("Invalid Email or Password");

        }

    };

    return (

        <div className="login-page">


            <div className="login-card">

                <div className="text-center mb-4">
                  

                    <div className="login-avatar">
                        🎓
                    </div>

                    <h2 className="mt-3 fw-bold">
                        Student Login
                    </h2>

                    <p className="text-muted">
                        Welcome back! Login to continue.
                    </p>

                </div>

                <form onSubmit={handleLogin}>

                    <div className="mb-3">

                        <label className="form-label fw-bold">
                            📧 Email
                        </label>

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label fw-bold">
                            🔒 Password
                        </label>

                        <div className="input-group">

                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                required
                            />

                            <button
                                type="button"
                                className="btn btn-outline-secondary"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "🙈" : "👁️"}
                            </button>

                        </div>

                    </div>

                    <button
                        className="btn btn-primary w-100 login-btn"
                    >
                        Login
                    </button>

                </form>

                <div className="text-center mt-4">

                    <p className="mb-2">

                        Don't have an account?

                        <Link
                            to="/register"
                            className="ms-2 fw-bold text-decoration-none"
                        >
                            Register
                        </Link>

                    </p>

                    <Link
                        to="/forgot-password"
                        className="text-decoration-none"
                    >
                        Forgot Password?
                    </Link>

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

export default Login;