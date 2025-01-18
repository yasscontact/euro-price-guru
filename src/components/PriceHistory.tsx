import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const mockData = Array.from({ length: 30 }, (_, i) => ({
  date: `2024-${String(i + 1).padStart(2, "0")}`,
  price: 95 + Math.random() * 10,
}));

const PriceHistory = () => {
  return (
    <div className="chart-container">
      <h3 className="text-xl font-bold mb-4 text-amazon-dark">
        Historique des prix (30 jours)
      </h3>
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={mockData}>
            <XAxis
              dataKey="date"
              tickFormatter={(date) => new Date(date).toLocaleDateString("fr-FR")}
              interval={6}
            />
            <YAxis domain={["dataMin - 5", "dataMax + 5"]} />
            <Tooltip
              formatter={(value: number) => [`${value.toFixed(2)} €`, "Prix"]}
              labelFormatter={(date) => new Date(date).toLocaleDateString("fr-FR")}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#FF9900"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PriceHistory;