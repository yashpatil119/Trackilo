// src/pages/Dashboard.jsx
import React, { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { Package, Layers, Wrench, ShoppingCart } from "lucide-react";

/* --------------------------
   CHART SETUP
--------------------------- */
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

ChartJS.defaults.responsive = true;
ChartJS.defaults.animation = false;

const getCssVar = (name) =>
  getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();

export default function Dashboard() {
  const [date, setDate] = useState(new Date());

  /* --------------------------
     KPI DATA
  --------------------------- */
  const KPIS = [
    { id: 1, title: "Total Assets", value: "38", hint: "Active", icon: Package, tone: "kpi-green" },
    { id: 2, title: "Value of Assets", value: "₹12.4L", hint: "Estimated", icon: Layers, tone: "kpi-violet" },
    { id: 3, title: "Components", value: "114", hint: "All time", icon: Wrench, tone: "kpi-primary" },
    { id: 4, title: "Purchases (Yr)", value: "₹0", hint: "Last 12 months", icon: ShoppingCart, tone: "kpi-orange" },
  ];

  /* --------------------------
     AREA CHART DATA
  --------------------------- */
  const areaChartData = useMemo(() => {
    const rgb = getCssVar("--color-primary-rgb") || "91,108,255";
    return {
      labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
      datasets: [
        {
          label: "Purchased Assets",
          data: [0,1,2,0,1,0,0,3,1,2,4,1],
          fill: true,
          tension: 0.4,
          borderWidth: 2,
          borderColor: getCssVar("--color-primary"),
          backgroundColor: (ctx) => {
            const g = ctx.chart.ctx.createLinearGradient(0, 0, 0, 260);
            g.addColorStop(0, `rgba(${rgb},0.20)`);
            g.addColorStop(1, `rgba(${rgb},0.02)`);
            return g;
          },
          pointRadius: 0,
        },
      ],
    };
  }, []);

  const areaChartOptions = useMemo(() => ({
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "rgba(255,255,255,0.88)",
        titleColor: getCssVar("--color-text-main"),
        bodyColor: getCssVar("--color-text-muted"),
        borderColor: "rgba(15,23,42,0.08)",
        borderWidth: 1,
        cornerRadius: 10,
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: getCssVar("--color-text-muted"),
          font: { size: 11 },
        },
        grid: { display: false },
      },
      y: {
        ticks: {
          color: getCssVar("--color-text-muted"),
          font: { size: 11 },
          padding: 6,
        },
        grid: {
          color: "rgba(15,23,42,0.06)",
          drawBorder: false,
        },
      },
    },
  }), []);

  /* --------------------------
     PIE CHART
  --------------------------- */
  const pieData = useMemo(() => ({
    labels: ["Laptop", "Monitor", "Printers", "Desktops"],
    datasets: [
      {
        data: [12, 9, 4, 13],
        backgroundColor: [
          "rgba(54,232,182,0.85)",
          "rgba(124,92,255,0.85)",
          "rgba(255,148,112,0.85)",
          "rgba(106,209,255,0.85)",
        ],
        hoverOffset: 6,
        borderWidth: 0,
      },
    ],
  }), []);

  const pieOptions = useMemo(() => ({
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          color: getCssVar("--color-text-main"),
          font: { size: 12, weight: "500" },
          boxWidth: 10,
          padding: 12,
        },
      },
      tooltip: {
        backgroundColor: "rgba(255,255,255,0.9)",
        titleColor: getCssVar("--color-text-main"),
        bodyColor: getCssVar("--color-text-muted"),
        borderColor: "rgba(15,23,42,0.08)",
        borderWidth: 1,
        cornerRadius: 10,
        displayColors: false,
      },
    },
  }), []);

  /* --------------------------
     ACTIVITY DATA
  --------------------------- */
  const recentActivity = [
    { id: 1, action: "Asset Assigned", target: "Dell Laptop #A245", time: "2 hours ago" },
    { id: 2, action: "New Asset Added", target: "HP Printer #P120", time: "5 hours ago" },
    { id: 3, action: "Component Replaced", target: "RAM Module 16GB", time: "Yesterday" },
    { id: 4, action: "Maintenance Logged", target: "Projector – Meeting Room", time: "2 days ago" },
  ];

  return (
    <div className="space-y-10">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-text-muted">Asset Management Overview</p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        {KPIS.map((k) => {
          const Icon = k.icon;
          return (
            <div
              key={k.id}
              className={`kpi-card ${k.tone} glass glass-edge elev-1 rounded-xl p-5`}
            >
              <div className="bloom-ring absolute -bottom-10 -left-10 w-[260px] h-[180px] rounded-full bg-primary/30" />

              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <div className="text-xs text-text-muted">{k.title}</div>
                  <div className="text-2xl font-semibold mt-2 text-text-main">{k.value}</div>
                  <div className="text-xs text-text-muted mt-1">{k.hint}</div>
                </div>
                <div className="icon-box">
                  <Icon size={22} className="text-primary" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-8">
          <div className="dashboard-panel glass glass-edge elev-1 rounded-xl p-5 h-full">
            <div className="section-header">
              <h3 className="text-sm font-semibold">Assets Purchased Monthly</h3>
            </div>
            <div className="relative h-44">
              <Line key="line-chart" data={areaChartData} options={areaChartOptions} />
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-6">
          <div className="dashboard-panel glass glass-edge elev-1 rounded-xl p-5">
            <div className="section-header">
              <h3 className="text-sm font-semibold">Assets by Type</h3>
            </div>
            <div className="relative h-40 flex justify-center items-center">
              <Pie key="pie-chart" data={pieData} options={pieOptions} />
            </div>
          </div>

          <div className="dashboard-panel glass glass-edge elev-1 rounded-xl p-5">
            <div className="section-header">
              <h3 className="text-sm font-semibold">Important Dates</h3>
            </div>
            <div className="rounded-lg p-3 bg-app-frame/30">
              <Calendar value={date} onChange={setDate} className="premium-calendar" />
            </div>
          </div>
        </div>
      </div>

      {/* RECENT ACTIVITY */}
      <div className="dashboard-panel glass glass-edge elev-1 rounded-xl p-5">
        <div className="section-header">
          <h3 className="text-sm font-semibold">Recent Activity</h3>
        </div>
        <div className="space-y-1">
          {recentActivity.map((a) => (
            <div key={a.id} className="px-4 py-3 rounded-lg hover:bg-white/30 transition">
              <div className="text-text-main font-medium">{a.action}</div>
              <div className="text-xs text-text-muted">{a.target}</div>
              <div className="text-xs text-primary mt-1">{a.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
