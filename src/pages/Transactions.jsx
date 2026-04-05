import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { transactionsData } from "../data/mockdata";

const Transactions = ({ dark }) => {
  const { transactions, setTransactions, filter, setFilter } = useContext(AppContext);
  const { role } = useContext(AppContext);

  // ✅ Search state
  const [search, setSearch] = useState("");

  // ✅ Advanced filtering
  const filteredTransactions = transactions
    .filter((t) => filter === "all" || t.type === filter)
    .filter((t) =>
      t.category.toLowerCase().includes(search.toLowerCase())
    );

  // ✅ Export JSON
  const exportJSON = () => {
    const dataStr = JSON.stringify(filteredTransactions, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.json";
    a.click();
  };

  // ✅ Export CSV
  const exportCSV = () => {
    const headers = ["Date", "Amount", "Category", "Type"];

    const rows = filteredTransactions.map((t) =>
      [t.date, t.amount, t.category, t.type].join(",")
    );

    const csvContent = [headers.join(","), ...rows].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "transactions.csv";
    a.click();
  };

  const handleEdit = (id) => {
    const newAmount = prompt("Enter new amount:");

    if (!newAmount) return;

    const updated = transactions.map((t) =>
      t.id === id ? { ...t, amount: Number(newAmount) } : t
    );

    setTransactions(updated);
  };

  const handleDelete = (id) => {
    const updated = transactions.filter((t) => t.id !== id);
    setTransactions(updated);
  };

  const handleReset = () => {
    setTransactions(transactionsData);
    localStorage.removeItem("transactions");
  };

  const handleAdd = () => {
    const amount = prompt("Enter amount:");
    const category = prompt("Enter category:");
    const type = prompt("income or expense:");

    if (!amount || !category || !type) return;

    const newTransaction = {
      id: Date.now(),
      date: new Date().toISOString().split("T")[0],
      amount: Number(amount),
      category,
      type,
    };
    setTransactions([...transactions, newTransaction]);
  };
  return (
    <div
      className={
        dark
          ? "p-6 bg-gray-900 text-white min-h-screen"
          : "p-6 bg-white text-black"
      }
    >
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>

      {/* 🔍 Search */}
      <input
        type="text"
        placeholder="Search category..."
        className="border p-2 mb-4 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 🔘 Filters */}
      <div className="mb-4">
        <button
          onClick={() => setFilter("all")}
          className="mr-2 bg-gray-300 p-2 hover:bg-gray-400 transition"
        >
          All
        </button>

        <button
          onClick={() => setFilter("income")}
          className="mr-2 bg-green-300 p-2 hover:bg-green-400 transition"
        >
          Income
        </button>

        <button
          onClick={() => setFilter("expense")}
          className="bg-red-300 p-2 hover:bg-red-400 transition"
        >
          Expense
        </button>
      </div>

      {/* 📤 Export Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          onClick={exportJSON}
          className="bg-purple-500 text-white px-3 py-1 rounded hover:bg-purple-600 transition"
        >
          Export JSON
        </button>

        <button
          onClick={exportCSV}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition"
        >
          Export CSV
        </button>
      </div>

      <div className="mb-4">
        <button
          onClick={handleReset}
          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 transition"
        >
          Reset Data
        </button>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-3 py-1 rounded mb-4 hover:bg-green-600 transition"
        >
          + Add Transaction
        </button>
      </div>

      {/* 📊 Table */}
      <table
        className={
          dark
            ? "w-full border border-gray-600"
            : "w-full border"
        }
      >
        <thead>
          <tr className={dark ? "bg-gray-700" : "bg-gray-200"}>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {filteredTransactions.map((t) => (
            <tr
              key={t.id}
              className="text-center border-t hover:bg-gray-200 transition"
            >
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>

              {role === "admin" && (
                <td>
                  <button className="bg-blue-400 text-white px-2 mr-2"></button>
                    <button
                      onClick={() => handleEdit(t.id)}
                      className="bg-blue-400 text-white px-2 mr-2 hover:bg-blue-500 transition"
                    >
                      Edit
                    </button>
                  <button className="bg-red-400 text-white px-2"></button>
                    <button
                      onClick={() => handleDelete(t.id)}
                      className="bg-red-400 text-white px-2 hover:bg-red-500 transition"
                    >     
                      Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;