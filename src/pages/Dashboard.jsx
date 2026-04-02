import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Charts from "../components/Charts";

const Dashboard = ({ dark }) => {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expense;

  // Insights
  const expenses = transactions.filter((t) => t.type === "expense");

  const categoryMap = {};
  expenses.forEach((t) => {
    categoryMap[t.category] =
      (categoryMap[t.category] || 0) + t.amount;
  });

  const categoryArray = Object.keys(categoryMap).map((key) => ({
    category: key,
    amount: categoryMap[key],
  }));

  const highest = categoryArray.sort(
    (a, b) => b.amount - a.amount
  )[0];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-green-200 p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
          <h2 className="text-lg font-semibold">Income</h2>
          <p className="text-xl font-bold">₹{income}</p>
        </div>

        <div className="bg-red-200 p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
          <h2 className="text-lg font-semibold">Expenses</h2>
          <p className="text-xl font-bold">₹{expense}</p>
        </div>

        <div className="bg-blue-200 p-6 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300">
          <h2 className="text-lg font-semibold">Balance</h2>
          <p className="text-xl font-bold">₹{balance}</p>
        </div>
      </div>

      {/* Charts */}
      {/* Charts Section (Better Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

        {/* Chart Card */}
        <div
          className={
            dark
              ? "bg-gray-800 text-white p-6 rounded shadow hover:shadow-lg transition duration-300"
              : "bg-white text-black p-6 rounded shadow hover:shadow-lg transition duration-300"
          }
        >
          <h2 className="text-lg font-bold mb-4">Spending Breakdown</h2>

          <div className="flex justify-center">
            <Charts />
          </div>
      </div>

      {/* Placeholder / Extra */}
      <div
        className={
          dark
            ? "bg-gray-800 text-white p-6 rounded shadow flex items-center justify-center hover:shadow-lg transition duration-300"
            : "bg-white text-black p-6 rounded shadow flex items-center justify-center hover:shadow-lg transition duration-300"
        }
      >
        <p className="text-gray-400">More analytics coming soon...</p>
      </div>

    </div>

      {/* Insights */}
      <div
        className={
          dark
            ? "bg-gray-800 text-white p-6 rounded shadow mt-6 hover:shadow-lg transition duration-300"
            : "bg-white text-black p-6 rounded shadow mt-6 hover:shadow-lg transition duration-300"
        }
      >
        <h2 className="text-xl font-bold mb-2">Insights</h2>

        {highest ? (
          <>
            <p>
              💸 Highest Spending Category:{" "}
              <b>{highest.category}</b>
            </p>
            <p>💰 Amount Spent: ₹{highest.amount}</p>
            <p className="mt-2">
              You spent most of your money on{" "}
              {highest.category}.
            </p>
          </>
        ) : (
          <p>No expense data available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;