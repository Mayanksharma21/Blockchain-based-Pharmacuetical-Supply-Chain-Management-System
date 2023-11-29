import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link className='nav_link' to="/get-batch-details">Get Batch Detail</Link>
                </li>
                <li>
                    <Link className='nav_link' to="/create-batch">Create New Batch</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation