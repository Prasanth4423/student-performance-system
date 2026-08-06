import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar() {
  return (
    <div>
      <h4 className="mb-4">Menu</h4>

      <div className="list-group">
        <Link to="/dashboard" className="list-group-item list-group-item-action">
          Dashboard
        </Link>

        <Link to="/profile" className="list-group-item list-group-item-action">
          Profile
        </Link>

        <Link to="/marks" className="list-group-item list-group-item-action">
          Add Marks
        </Link>

        <Link to="/attendance" className="list-group-item list-group-item-action">
          Add Attendance
        </Link>

        <Link to="/performance" className="list-group-item list-group-item-action">
          Performance
        </Link>

        <Link to="/career" className="list-group-item list-group-item-action">
          Career Guidance
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;