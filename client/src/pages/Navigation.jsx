import { Link } from "react-router-dom";
import React from "react";

const Navigation = () => {
  return (
    <nav className="p-3 m-2 bg-slate-300 rounded-md">
      <ul className="flex justify-around items-center cursor-default">
        <li className="text-purple-700 font-bold text-2xl hover:text-purple-900">
            PharmaCure
        </li>
        <li className="text-lg hover:font-bold">
            <Link className="nav_link" to="/">Home</Link>
        </li>
        <li className="text-lg hover:font-bold">
          <Link className="nav_link" to="/get-batch-details">
            Get Batch Detail
          </Link>
        </li>
        <li className="text-lg hover:font-bold">
          <Link className="nav_link" to="/create-batch">
            Create New Batch
          </Link>
        </li>
        <li className="text-lg hover:font-bold">
            About
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
