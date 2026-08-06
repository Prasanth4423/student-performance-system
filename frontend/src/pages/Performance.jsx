
import { useEffect, useState } from "react";
import api from "../services/api";
import "./Performance.css";
import BackButton from "../components/BackButton";

function Performance() {

    const [performance, setPerformance] = useState({
        average: 0,
        performance: "",
    });

    useEffect(() => {
        fetchPerformance();
    }, []);

    const fetchPerformance = async () => {
        try {
            const studentId = localStorage.getItem("student_id");

            const response = await api.get(
                `performance/${studentId}/`
            );

            setPerformance(response.data);

        } catch (error) {
            console.error("Error fetching performance:", error);
        }
    };

    return (
    <div className="container mt-4">

        <BackButton />

        <h2 className="fw-bold mb-4">
            📊 Performance Analysis
        </h2>

        <div className="card shadow-lg border-0 rounded-4">

            <div className="card-body p-4">

                <div className="text-center">

                    <div className="score-circle">

                        {performance.average}%

                    </div>

                    <h3 className="mt-3 text-primary">
                        Average Marks
                    </h3>

                </div>

                <hr className="my-4" />

                <div className="row text-center">

                    <div className="col-md-6">

                        <h6 className="text-muted">
                            Performance Level
                        </h6>

                        <h3 className="text-success">
                            {performance.performance}
                        </h3>

                    </div>

                    <div className="col-md-6">

                        <h6 className="text-muted">
                            Academic Status
                        </h6>

                        <span className="badge bg-primary fs-6 px-3 py-2">
                            Active Student
                        </span>

                    </div>

                </div>

                <div className="alert alert-info mt-4">

                    <h5>💡 Suggestion</h5>

                    <p className="mb-0">

                        {performance.performance === "Excellent" &&
                            "Outstanding performance! Continue learning advanced technologies and prepare for placements."}

                        {performance.performance === "Good" &&
                            "You are performing well. Focus on projects and coding practice to improve further."}

                        {performance.performance === "Average" &&
                            "Practice programming regularly, revise core subjects, and work on mini projects."}

                        {performance.performance === "Needs Improvement" &&
                            "Create a daily study plan, improve attendance, and strengthen programming fundamentals."}

                    </p>

                </div>

                <div className="row">

                    <div className="col-md-6">

                        <div className="card border-success">

                            <div className="card-body">

                                <h5 className="text-success">
                                    ✅ Strengths
                                </h5>

                                <ul className="mb-0">

                                    <li>Academic Progress</li>
                                    <li>Learning Ability</li>
                                    <li>Project Development</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6">

                        <div className="card border-warning">

                            <div className="card-body">

                                <h5 className="text-warning">
                                    🚀 Areas to Improve
                                </h5>

                                <ul className="mb-0">

                                    <li>Programming Skills</li>
                                    <li>Problem Solving</li>
                                    <li>Communication Skills</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </div>
);
}

export default Performance;