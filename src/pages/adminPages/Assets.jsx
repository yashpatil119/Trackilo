// src/pages/Assets.jsx
import React from "react";
import { useState } from "react";
import FormModal from "../../components/formModal";
import {
  Plus,
  Upload,
  Download,
  Eye,
  Pencil,
  MoreHorizontal,
  MapPin,
  Package,
} from "lucide-react";

/* ---------------- MOCK DATA ---------------- */
const assets = [
  {
    id: 1,
    name: "Lenovo Laptop",
    tag: "Asset-01",
    type: "Laptop",
    brand: "Lenovo",
    location: "Warehouse",
    status: "Available",
  },
  {
    id: 2,
    name: "Canon Printer",
    tag: "Asset-02",
    type: "Printer",
    brand: "Canon",
    location: "Office Floor",
    status: "Available",
  },
  {
    id: 3,
    name: "Dell Server",
    tag: "Asset-03",
    type: "Server",
    brand: "Dell",
    location: "Data Center",
    status: "Maintenance",
  },
];

/* 🔑 SINGLE SOURCE OF TRUTH */
const COLS = "grid-cols-[300px_120px_120px_160px_120px_110px]";

export default function Assets() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  return (
    <div className="space-y-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-main">Assets</h1>
          <p className="text-sm text-text-muted mt-1">
            Manage and track organizational assets
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* ADD ASSET */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="
              flex items-center gap-2 px-4 py-2 rounded-xl
              btn-add text-sm font-medium
              shadow-glow
              hover:brightness-105
              transition
            "
          >
            <Plus size={16} />
            Add Asset
          </button>

          {/* IMPORT */}
          <button
            className="
              flex items-center gap-2 px-4 py-2 rounded-xl
              btn-import text-sm font-medium
              transition
            "
          >
            <Upload size={16} />
            Import
          </button>

          {/* EXPORT */}
          <button
            className="
              flex items-center gap-2 px-4 py-2 rounded-xl
              btn-export text-sm font-medium
              transition
            "
          >
            <Download size={16} />
            Export
          </button>
        </div>
        <FormModal
          open={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
        />
      </div>

      {/* ================= FILTER BAR ================= */}
      <div className="dashboard-panel glass glass-edge elev-1 rounded-xl p-4">
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search by name, tag, or brand"
            className="
              flex-1 min-w-[260px]
              px-4 py-2 rounded-lg
              bg-app-frame
              text-text-main placeholder:text-text-muted
              border border-subtle
              focus:outline-none focus:ring-2 focus:ring-primary/30
            "
          />

          {["All Status", "All Types", "All Locations"].map((label) => (
            <select
              key={label}
              className="
                px-3 py-2 rounded-lg
                bg-app-frame text-text-main
                border border-subtle
                focus:outline-none
              "
            >
              <option>{label}</option>
            </select>
          ))}

          <button className="text-sm text-text-muted hover:text-text-main transition">
            Clear
          </button>
        </div>
      </div>

      {/* ================= TABLE ================= */}
      <div className="dashboard-panel glass glass-edge elev-1 rounded-xl overflow-hidden">
        {/* HEADER */}

        <div className="table-header">
          <div className={`grid ${COLS} gap-4`}>
            <span>Asset</span>
            <span>Type</span>
            <span>Brand</span>
            <span>Location</span>
            <span>Status</span>
            <span className="text-right">Actions</span>
          </div>
        </div>

        {/* ROWS */}
        {assets.map((a, idx) => (
          <div
            key={a.id}
            className={`
              px-6 py-4 transition row-hover
              ${idx !== assets.length - 1 ? "border-b border-subtle" : ""}
            `}
          >
            <div className={`grid ${COLS} gap-4 items-center`}>
              {/* Asset */}
              <div className="flex items-center gap-3">
                <div
                  className="
                  w-10 h-10 rounded-lg
                  bg-surface-2
                  flex items-center justify-center
                "
                >
                  <Package size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-main">
                    {a.name}
                  </div>
                  <div className="text-xs text-text-muted">{a.tag}</div>
                </div>
              </div>

              {/* Type */}
              <span
                className="
                text-xs font-medium px-2 py-1 rounded-md w-fit
                bg-app-frame text-text-main
                border border-subtle
              "
              >
                {a.type}
              </span>

              {/* Brand */}
              <span className="text-sm text-text-main">{a.brand}</span>

              {/* Location */}
              <span className="flex items-center gap-1 text-sm text-text-main">
                <MapPin size={14} className="text-text-muted" />
                {a.location}
              </span>

              {/* Status */}
              <span
                className={`
                  text-xs font-medium px-2 py-1 rounded-md w-fit
                  ${
                    a.status === "Available"
                      ? "bg-primary/15 text-primary"
                      : "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400"
                  }
                `}
              >
                {a.status}
              </span>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                {[Eye, Pencil, MoreHorizontal].map((Icon, i) => (
                  <button
                    key={i}
                    className="
                      p-2 rounded-lg
                      text-text-muted
                      hover:text-text-main
                      hover:bg-surface-2
                      transition
                    "
                  >
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
