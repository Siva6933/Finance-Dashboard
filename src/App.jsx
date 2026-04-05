import { useState, useContext } from "react";
import { AppContext } from "./context/AppContext";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";

function App() {
  const { role, setRole } = useContext(AppContext);
  const [page, setPage] = useState("dashboard");
  const [dark, setDark] = useState(false);

  return (
    <div
      className={
        dark
          ? "flex min-h-screen bg-gray-900 text-white"
          : "flex min-h-screen bg-gray-100 text-black"
      }
    >
      {/* Sidebar */}
      <div
        className={
          dark
            ? "w-60 bg-gray-800 text-white p-4"
            : "w-60 bg-white text-black p-4"
        }
      >
        <h2 className="text-xl font-bold mb-6">Finance-Dashboard</h2>

        <button
          onClick={() => setPage("dashboard")}
          className="block mb-2 hover:font-bold"
        >
          Dashboard
        </button>

        <button
          onClick={() => setPage("transactions")}
          className="block hover:font-bold"
        >
          Transactions
        </button>
      </div>

      {/* Main */}
      <div className="flex-1">
        {/* Header */}
        <div
          className={
            dark
              ? "flex justify-between p-4 bg-gray-800 text-white"
              : "flex justify-between p-4 bg-white text-black"
          }
        >
          <h1 className="font-bold text-lg capitalize">{page}</h1>

          <div className="flex gap-2">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
              onClick={() =>
                setRole(role === "viewer" ? "admin" : "viewer")
              }
            >
              Switch Role ({role})
            </button>

            <button
              className="bg-black text-white px-3 py-1 rounded hover:bg-gray-700 transition duration-200"
              onClick={() => setDark(!dark)}
            >
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 transition-all duration-500 ease-in-out">
          {page === "dashboard" && <Dashboard dark={dark} />}
          {page === "transactions" && <Transactions dark={dark} />}
        </div>
      </div>
    </div>
  );
}

export default App;