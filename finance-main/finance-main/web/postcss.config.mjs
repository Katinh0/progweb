"use client";

import React, { useState } from "react";
import {
  BanknoteArrowUp,
  Store,
  ShoppingBasket,
  CookingPot,
  PlusCircle,
  PiggyBank,
  BarChart2,
  CirclePlus,
} from "lucide-react";
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

const data = [
  { name: "Jan", income: 7840.56, expenses: 1580.45 },
  { name: "Feb", income: 3000, expenses: 1398 },
  { name: "Mar", income: 5000, expenses: 9800 },
  { name: "Apr", income: 4780, expenses: 3908 },
  { name: "May", income: 5890, expenses: 4800 },
  { name: "Jun", income: 6260.11, expenses: 3800 },
];

type Categoria = {
  nome: string;
  total: number;
  valor: string;
  icone: React.ReactNode;
};

type Transacao = {
  descricao: string;
  tipo: string;
  valor: string;
  banco: string;
  data: string;
  parcelas: string;
};

type Resumo = {
  title: string;
  value: string;
  icon: React.ReactNode;
  color: string;
  desc: string;
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const categorias: Categoria[] = [
    { nome: "Alimentação", total: 10, valor: "R$ 1.508,15", icone: <CookingPot className="text-white" size={18} /> },
    { nome: "Mercado", total: 8, valor: "R$ 508,90", icone: <ShoppingBasket className="text-white" size={18} /> },
    { nome: "Transporte", total: 5, valor: "R$ 300,00", icone: <Store className="text-white" size={18} /> },
    { nome: "Lazer", total: 3, valor: "R$ 200,00", icone: <CirclePlus className="text-white" size={18} /> },
    { nome: "Educação", total: 2, valor: "R$ 500,00", icone: <PiggyBank className="text-white" size={18} /> },
    { nome: "Outros", total: 4, valor: "R$ 100,00", icone: <PlusCircle className="text-white" size={18} /> },
  ];

  const transacoes: Transacao[] = [
    {
      descricao: "Supermercado Big Master",
      tipo: "Crédito",
      valor: "R$ 896,00",
      banco: "Nubank",
      data: "21/03/2024",
      parcelas: "1/1",
    },
    {
      descricao: "Mercado Comper",
      tipo: "Crédito",
      valor: "R$ 999,00",
      banco: "Nubank",
      data: "15/04/2023",
      parcelas: "1/1",
    },
    {
      descricao: "Padaria Pão Doce",
      tipo: "Débito",
      valor: "R$ 45,00",
      banco: "Caixa",
      data: "10/04/2023",
      parcelas: "1/1",
    },
    {
      descricao: "Loja Eletrônicos",
      tipo: "Crédito",
      valor: "R$ 2.500,00",
      banco: "Banco do Brasil",
      data: "05/04/2023",
      parcelas: "2/2",
    },
  ];

  const resumo: Resumo[] = [
    {
      title: "Entradas",
      value: "R$ 7.840,56",
      icon: <BanknoteArrowUp className="text-green-500" size={22} />,
      color: "text-green-500",
      desc: "Somada todas as entradas do período.",
    },
    {
      title: "Saídas",
      value: "R$ 1.580,45",
      icon: <BanknoteArrowUp className="text-red-500" size={22} />,
      color: "text-red-500",
      desc: "Somada todas as saídas do período.",
    },
    {
      title: "Balanço",
      value: "R$ 6.260,11",
      icon: <BanknoteArrowUp className="text-emerald-500" size={22} />,
      color: "text-green-500",
      desc: "Entradas menos saídas do período.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#232323] text-white pt-8 px-6 pb-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-4">
          <PiggyBank className="text-green-500 w-7 h-7" />
          <span className="text-xl font-bold tracking-tight">Finance</span>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-zinc-900 border border-zinc-700 hover:bg-zinc-800 text-white px-5 py-2 rounded transition font-semibold"
            aria-label="Nova Transação"
          >
            <PlusCircle className="w-5 h-5" /> Nova Transação
          </button>
          <button
            className="bg-green-500 hover:bg-green-600 p-2 rounded-full flex items-center justify-center"
            aria-label="Adicionar"
          >
            <CirclePlus className="w-6 h-6 text-black" />
          </button>
        </div>
      </header>

      {/* Cards de Resumo */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {resumo.map((item) => (
          <div
            key={item.title}
            className="bg-zinc-900 border border-zinc-800 rounded-lg shadow p-5 flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              {item.icon}
              <span className="text-xs text-zinc-300 font-semibold">{item.title}</span>
            </div>
            <span className={`text-2xl font-bold ${item.color}`}>{item.value}</span>
            <span className="text-xs text-zinc-400">{item.desc}</span>
          </div>
        ))}
      </div>

      {/* Gráfico e Categorias */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Gráfico de Barras */}
        <div className="col-span-2 bg-zinc-900 border border-zinc-800 rounded-lg shadow p-5 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <BarChart2 className="text-green-500 w-5 h-5" />
            <span className="text-base font-semibold text-white">Análise</span>
          </div>
         
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
        {/* Categorias */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg shadow p-5">
          <h2 className="text-lg font-bold mb-4 text-white">Categorias</h2>
          <ul className="space-y-2 text-sm">
            {categorias.map((cat, index) => (
              <li key={index} className="flex justify-between items-center bg-zinc-800 rounded px-3 py-1">
                <span className="flex items-center gap-2 text-white">{cat.icone} {cat.nome}</span>
                <span className="text-zinc-300">{cat.total}</span>
                <span className="text-white">{cat.valor}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Transações */}
      <div className="mt-8">
        <h2 className="text-lg font-bold mb-3">Transações</h2>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
          <div className="grid grid-cols-6 gap-4 p-3 text-zinc-400 text-xs bg-zinc-800 font-semibold">
            <span>Descrição</span>
            <span>Tipo</span>
            <span>Valor</span>
            <span>Banco</span>
            <span>Data</span>
            <span>Parcelas</span>
          </div>
          {transacoes.map((t, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-6 gap-4 p-3 text-white text-xs ${
                idx % 2 === 0 ? "bg-zinc-900" : "bg-zinc-800"
              } border-b border-zinc-800`}
            >
              <span className="font-medium flex items-center gap-2">
                {t.descricao.toLowerCase().includes("mercado") ||
                t.descricao.toLowerCase().includes("padaria") ||
                t.descricao.toLowerCase().includes("supermercado") ? (
                  <ShoppingBasket className="w-4 h-4 text-white" />
                ) : (
                  <Store className="w-4 h-4 text-white" />
                )}
                {t.descricao}
              </span>
              <span>{t.tipo}</span>
              <span className={t.tipo === "Débito" ? "text-red-500" : "text-green-500"}>{t.valor}</span>
              <span>{t.banco}</span>
              <span>{t.data}</span>
              <span>{t.parcelas}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Nova Transação */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-zinc-900 p-8 rounded-lg w-full max-w-xl text-white relative border border-zinc-800">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-red-500 text-2xl"
              aria-label="Fechar modal"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-1">Nova Transação</h2>
            <p className="text-sm text-zinc-400 mb-6">
              Inclua suas entradas e saídas sem complicações!
            </p>
            <form className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="descricao">Descrição da transação</label>
                <input id="descricao" className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 outline-none" placeholder="Ex: Espetinho" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="categoria">Categoria</label>
                <input id="categoria" className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 outline-none" placeholder="Ex: Alimentação" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="valor">Valor</label>
                <input id="valor" className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 outline-none" placeholder="Ex: 30,00" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="data">Data</label>
                <input id="data" className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 outline-none" placeholder="21/03/2025" />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="banco">Banco</label>
                <input id="banco" className="w-full p-3 rounded bg-zinc-800 text-white border border-zinc-700 outline-none" placeholder="Ex: BANCO BTG PACTUAL S.A." />
              </div>
              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 font-semibold"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-semibold"
                >
                  Confirmar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
