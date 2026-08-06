import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");

    };

    return (

        <nav className="navbar navbar-dark bg-primary">

            <div className="container-fluid">

                {/* Mobile Menu Button */}
                <button
                    className="btn btn-light d-md-none me-2"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileSidebar"
                >
                    ☰
                </button>

                <span className="navbar-brand mb-0">
                    Student Performance System
                </span>

                <button
                    className="btn btn-light"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>

    );

}

export default Navbar;