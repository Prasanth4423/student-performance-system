import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import DashboardCard from "../components/DashboardCard";
import api from "../services/api";

function Dashboard() {

    const studentId = localStorage.getItem("student_id");

    const [dashboard, setDashboard] = useState({
    student_name: "",
    average_marks: 0,
    average_attendance: 0,
    performance: "",
    career: "",
});

    useEffect(() => {

        loadDashboard();

    }, []);

    const loadDashboard = async () => {

        try {

            const response = await api.get(
                `dashboard/${studentId}/`
            );

            setDashboard(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    return (

        <>
            
            <Navbar />

{/* Mobile Sidebar */}

<div
    className="offcanvas offcanvas-start"
    tabIndex="-1"
    id="mobileSidebar"
>

    <div className="offcanvas-header">

        <h5 className="offcanvas-title">
            Menu
        </h5>

        <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
        ></button>

    </div>

    <div className="offcanvas-body">

        <Sidebar />

    </div>

</div>

            <div className="container-fluid">

    <div className="row">

        {/* Desktop Sidebar */}

        <div className="col-lg-2 col-md-3 d-none d-md-block bg-light min-vh-100 p-3">

            <Sidebar />

        </div>

        {/* Dashboard Content */}

        <div className="col-12 col-md-9 col-lg-10 p-4">

            <h2 className="mb-4">
                Student Dashboard
            </h2>

            <h3 className="mb-4">
                Welcome, {dashboard.student_name}
            </h3>

            <div className="row g-4">

                <DashboardCard
                    title="Average Marks"
                    value={`${dashboard.average_marks}%`}
                    color="primary"
                />

                <DashboardCard
                    title="Attendance"
                    value={`${dashboard.average_attendance}%`}
                    color="success"
                />

                <DashboardCard
                    title="Performance"
                    value={dashboard.performance}
                    color="warning"
                />

                <DashboardCard
                    title="Career"
                    value={dashboard.career}
                    color="info"
                />

            </div>

        </div>

    </div>

</div>

        </>

    );

}

export default Dashboard;