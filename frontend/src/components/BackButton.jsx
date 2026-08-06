import { useNavigate } from "react-router-dom";

function BackButton() {

    const navigate = useNavigate();

    return (

        <button
            className="btn btn-outline-primary rounded-pill px-4 mb-4"
            onClick={() => navigate("/dashboard")}
        >
            ⬅ Back to Dashboard
        </button>

    );

}

export default BackButton;