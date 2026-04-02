import { createContext, useState, useEffect } from "react";
import { transactionsData } from "../data/mockdata";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  // ✅ Load from localStorage OR mock data
  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : transactionsData;
  });

  const [role, setRole] = useState("viewer");
  const [filter, setFilter] = useState("all");

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ✅ Mock API Simulation
  useEffect(() => {
    setTimeout(() => {
      console.log("Mock API data loaded ✅");
    }, 1000);
  }, []);

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        role,
        setRole,
        filter,
        setFilter,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};