import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-black border-y text-red-300">
  
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2023
                        . All Rights Reserved.
                    </span>
                </div>

        </footer>
    );
}