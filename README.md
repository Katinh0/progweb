# progweb

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

// Exemplo de dados
const data = [
  { name: "Jan", income: 7840.56, expenses: 1580.45 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 5000, expenses: 9800 },
  { name: "Apr", income: 4780, expenses: 3908 },
  { name: "May", income: 5890, expenses: 4800 },
  { name: "Jun", income: 6260.11, expenses: 3800 },
];

// No local do "Gráfico aqui":
<div className="bg-gray-100 rounded-lg p-4 flex-1 min-h-[250px] flex items-center justify-center">
  <ResponsiveContainer width="100%" height={220}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="income" fill="#22c55e" name="Receita" />
      <Bar dataKey="expenses" fill="#f87171" name="Despesas" />
    </BarChart>
  </ResponsiveContainer>
</div># p r o j e t o t a t u 
 
 # p r o j e t o t a t u 
 
 
