import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Charts = () => {
  const { transactions } = useContext(AppContext);

  // Filter only expenses
  const expenseData = transactions.filter(t => t.type === "expense");

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Spending Breakdown</h2>

      <PieChart width={300} height={300}>
        <Pie
          data={expenseData}
          dataKey="amount"
          nameKey="category"
          outerRadius={100}
        >
          {expenseData.map((entry, index) => (
            <Cell key={index} />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Charts;