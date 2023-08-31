import React from 'react';
import { Link } from 'react-scroll';

const Sidebar = () => {
  return (
<div className="bg-gray-800 text-white h-screen w-1/5 p-4">
      <h2 className="text-lg font-bold mb-4">Dashboard Menu</h2>
      <ul>
        <li className="mb-2 border-2 rounded-xl bg-slate-900 text-white " > <Link to="Dashboard"> Dashboard </Link> </li>
        <li className="mb-2 border-2 rounded-xl bg-slate-900 text-white "> <Link to="UserProfile">Profile </Link></li>
        <li className="mb-2 border-2 rounded-xl bg-slate-900 text-white "> <Link to='#'>Settings </Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
