import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 text-2xl font-bold border-b border-blue-500">
          Admin Dashboard
        </div>
        <nav className="flex-grow">
          <ul>
            <li>
              <NavLink
                to="/users"
                className={({ isActive }) =>
                  isActive ? "block p-4 bg-blue-700" : "block p-4 hover:bg-blue-700"
                }
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bets"
                className={({ isActive }) =>
                  isActive ? "block p-4 bg-blue-700" : "block p-4 hover:bg-blue-700"
                }
              >
                Bets
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/results"
                className={({ isActive }) =>
                  isActive ? "block p-4 bg-blue-700" : "block p-4 hover:bg-blue-700"
                }
              >
                Results
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/winners"
                className={({ isActive }) =>
                  isActive ? "block p-4 bg-blue-700" : "block p-4 hover:bg-blue-700"
                }
              >
                Winners
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-500">
          <NavLink to="/" className="block p-4 hover:bg-blue-700">
            Logout
          </NavLink>
        </div>
      </aside>
      <main className="flex-grow p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-700">Welcome to the Admin Panel</h1>
        </header>
        <div className="bg-white p-6 rounded-lg shadow-md">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
