import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav className="flex justify-end space-x-5 bg bg-purple-700 p-6 text-yellow-400">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>  
            </nav>
        </header>
    )
}