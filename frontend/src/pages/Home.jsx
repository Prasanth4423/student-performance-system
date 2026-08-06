import { Link } from "react-router-dom";
import { FaUserGraduate, FaChalkboardTeacher, FaBriefcase } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white shadow-sm sticky-top">
        <div className="container">
          <Link className="navbar-brand fw-bold text-primary" to="/">
            🎓 Smart Student System
          </Link>

          <button
    className="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation"
>
    <span className="navbar-toggler-icon"></span>
</button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">

              <li className="nav-item">
                <a href="#home" className="nav-link active">Home</a>
              </li>

              <li className="nav-item">
                <a href="#features" className="nav-link">Features</a>
              </li>

              <li className="nav-item">
                <a href="#about" className="nav-link">About</a>
              </li>

              

              <li className="nav-item ms-3">
                <Link to="/login" className="btn btn-primary">
                  Login
                </Link>
              </li>

              <li className="nav-item ms-2">
                <Link to="/register" className="btn btn-success">
                  Register
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="home">

        <div className="container">

          <div className="row align-items-center">

            <div className="col-lg-6">

              <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2">
                Empower Students. Shape Futures.
              </span>

              <h1 className="display-3 fw-bold mb-4">
                Smart Student Performance &
                <br />
                Career Guidance System
              </h1>

              <p className="lead text-muted mb-4">
                Track academic performance, monitor attendance,
                and receive personalized career recommendations
                based on your progress.
              </p>

              <Link to="/login" className="btn btn-primary btn-lg me-3">
                Login
              </Link>

              <Link to="/register" className="btn btn-success btn-lg">
                Register
              </Link>

              <div className="row mt-5">

                <div className="col-4 text-center">
                  <FaUserGraduate size={35} className="text-primary" />
                  <h6 className="mt-2">Students</h6>
                  <small>Track & Improve</small>
                </div>

                <div className="col-4 text-center">
                  <FaChalkboardTeacher size={35} className="text-success" />
                  <h6 className="mt-2">Academics</h6>
                  <small>Monitor Progress</small>
                </div>

                <div className="col-4 text-center">
                  <FaBriefcase size={35} className="text-warning" />
                  <h6 className="mt-2">Career</h6>
                  <small>Guidance</small>
                </div>

              </div>

            </div>

            <div className="col-lg-6 text-center">

              <img
                src="https://illustrations.popsy.co/blue/student-graduation.svg"
                className="img-fluid"
                alt="Student"
              />

            </div>

          </div>

        </div>

      </section>
      {/* Features */}

<section className="features-section py-5" id="features">

    <div className="container">

        <h2 className="text-center fw-bold mb-5">
            Why Choose Our System?
        </h2>

        <div className="row g-4">

            <div className="col-lg-3 col-md-6">

                <div className="feature-card">

                    <div className="icon bg-primary">
                        📊
                    </div>

                    <h4>Performance Tracking</h4>

                    <p>
                        Track marks, identify strengths,
                        weaknesses and overall progress.
                    </p>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="feature-card">

                    <div className="icon bg-success">
                        📅
                    </div>

                    <h4>Attendance Monitoring</h4>

                    <p>
                        Monitor attendance and improve
                        academic consistency.
                    </p>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="feature-card">

                    <div className="icon bg-warning">
                        💼
                    </div>

                    <h4>Career Guidance</h4>

                    <p>
                        Get career recommendations based
                        on your academic performance.
                    </p>

                </div>

            </div>

            <div className="col-lg-3 col-md-6">

                <div className="feature-card">

                    <div className="icon bg-danger">
                        🔔
                    </div>

                    <h4>Student Dashboard</h4>

        <p>
            Access all academic information including marks,
            attendance, performance, and career guidance in one place.
        </p>

                </div>

            </div>

        </div>

    </div>

</section>

{/* About */}

<section className="about-section py-5" id="about">

    <div className="container">

        <div className="row align-items-center">

            <div className="col-lg-6">

                <h2 className="fw-bold mb-4">
                    About Our System
                </h2>

                <p className="text-muted fs-5">
                    The Smart Student Performance & Career Guidance System is a
                    web-based application developed to help students monitor their
                    academic progress efficiently. Students can securely register,
                    log in, manage their profile, record subject-wise marks and
                    attendance, and view their overall academic performance through
                    an interactive dashboard.
                </p>

                <p className="text-muted fs-5">
                    The system analyzes student performance and provides career
                    guidance based on academic results. It offers a simple,
                    user-friendly interface while demonstrating full-stack web
                    development using modern technologies.
                </p>

                <div className="mt-4">

                    <span className="badge bg-primary me-2 p-2">
                        React
                    </span>

                    <span className="badge bg-success me-2 p-2">
                        Django REST
                    </span>

                    <span className="badge bg-warning text-dark me-2 p-2">
                        MySQL
                    </span>

                    <span className="badge bg-info text-dark p-2">
                        Bootstrap
                    </span>

                </div>

            </div>

            <div className="col-lg-6 text-center">

                <img
                    src="https://illustrations.popsy.co/blue/studying.svg"
                    alt="About"
                    className="img-fluid"
                    style={{maxWidth:"450px"}}
                />

            </div>

        </div>

    </div>

</section>
{/* Footer */}

<footer className="footer">

    <div className="container">

        <div className="row align-items-center">

            <div className="col-lg-4 text-center text-lg-start">

                <h4 className="fw-bold text-white">
                    🎓 Smart Student System
                </h4>

            </div>

            <div className="col-lg-4 text-center">

                <p className="text-white mb-0">
                    © 2026 Smart Student Performance &
                    Career Guidance System.
                    All Rights Reserved.
                </p>

            </div>

            <div className="col-lg-4 text-center text-lg-end">

                <a href="#" className="footer-link">
                    Privacy Policy
                </a>

                <a href="#" className="footer-link">
                    Terms
                </a>

                <a href="#" className="footer-link">
                    Contact
                </a>

            </div>

        </div>

    </div>

</footer>
    </>
  );
}

export default Home;