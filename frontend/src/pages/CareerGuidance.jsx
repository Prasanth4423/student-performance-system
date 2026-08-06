import { useEffect, useState } from "react";
import api from "../services/api";
import BackButton from "../components/BackButton";

function CareerGuidance() {

    const [career, setCareer] = useState({
        career: ""
    });

    useEffect(() => {
        fetchCareer();
    }, []);

    const fetchCareer = async () => {

        try {

            const studentId = localStorage.getItem("student_id");

            const response = await api.get(
                `career/${studentId}/`
            );

            setCareer(response.data);

        } catch (error) {

            console.error(error);

        }

    };

    return (

<div className="container mt-4">
    <BackButton />

    <h2 className="mb-4 fw-bold text-dark">
        Career Guidance
    </h2>

    <div className="card shadow-lg border-0 p-4">

        <div className="d-flex align-items-center">

            <h3 className="text-primary mb-0">
                💼 {career.career}
            </h3>

        </div>

        <p className="text-muted mt-3">
            {career.description}
        </p>

        <h5 className="mt-4 mb-3">
            Recommended Skills
        </h5>

        <div>

            {career.skills?.map((skill, index) => (

                <span
                    key={index}
                    className="badge bg-primary me-2 mb-2 p-2"
                >
                    {skill}
                </span>

            ))}

        </div>

    </div>

</div>

    );

}

export default CareerGuidance;