// ...importações no topo do arquivo...
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

// Dados de exemplo (você pode adaptar conforme sua necessidade)
const data = [
  { name: "Jan", income: 7840.56, expenses: 1580.45 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 5000, expenses: 9800 },
  { name: "Apr", income: 4780, expenses: 3908 },
  { name: "May", income: 5890, expenses: 4800 },
  { name: "Jun", income: 6260.11, expenses: 3800 },
];

// ...dentro do seu componente Home, na seção do gráfico:
<div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow p-5 flex flex-col min-h-[250px]">
  <div className="flex items-center gap-2 mb-3">
    <span className="text-base font-semibold text-white">Gráfico de Análise</span>
  </div>
  <ResponsiveContainer width="100%" height={200}>
    <BarChart data={data}>
      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
      <XAxis dataKey="name" stroke="#22c55e" />
      <YAxis stroke="#22c55e" />
      <Tooltip contentStyle={{ background: "#18181b", color: "#22c55e" }} />
      <Legend />
      <Bar dataKey="income" fill="#22c55e" name="Receita" />
      <Bar dataKey="expenses" fill="#f87171" name="Despesas" />
    </BarChart>
  </ResponsiveContainer>
</div>