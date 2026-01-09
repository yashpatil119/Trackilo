// src/pages/adminPages/AssetMovement.jsx
import React, { useState } from "react";
import { Plus, Upload, Eye, Pencil, MoreHorizontal } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseFormModal from "../../components/BaseFormModel";
import BaseTable from "../../components/BaseTable";
/* ---------------- MOCK DATA ---------------- */
const movements = [
  {
    id: 1,
    asset: "Lenovo Laptop",
    fromLocation: "Warehouse",
    toLocation: "Office Floor",
    movedBy: "Admin",
    moveDate: "12-01-2026",
  },
  {
    id: 2,
    asset: "Canon Printer",
    fromLocation: "Office Floor",
    toLocation: "Warehouse",
    movedBy: "Manager",
    moveDate: "10-01-2026",
  },
];

/* 🔑 SAME STYLE AS ASSETS */
const COLS = "grid-cols-[80px_220px_200px_200px_160px_140px_120px]";

/* 🔑 FORM FIELDS (INLINE, SAME FILE) */
const FORM_FIELDS = [
  {
    name: "asset",
    label: "Asset",
    type: "select",
    required: true,
    options: ["Lenovo Laptop", "Canon Printer", "Dell Server"],
  },
  {
    name: "fromLocation",
    label: "From Location",
    type: "select",
    options: ["Warehouse", "Office Floor"],
  },
  {
    name: "toLocation",
    label: "To Location",
    type: "select",
    required: true,
    options: ["Warehouse", "Office Floor"],
  },
  {
    name: "moveDate",
    label: "Move Date",
    type: "date",
    required: true,
  },
];


export default function AssetMovement() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-text-main">
          Asset Movement
        </h1>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add
          </button>

          <button className="btn-export flex items-center gap-2 px-4 py-2 rounded-xl">
            <Upload size={16} />
            Export to Excel
          </button>
        </div>
      </div>

      {/* ================= FILTER ================= */}
      <BaseFilterBox
        searchPlaceholder="Search..."
        filters={[]}
        onClear={() => {}}
      />

      {/* ================= TABLE ================= */}
      <BaseTable
        columns={COLS}
        data={movements}
        renderRow={{
          header: [
            "ID",
            "Asset",
            "From Location",
            "To Location",
            "Moved By",
            "Move Date",
            "Action",
          ],

          body: (row) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm">{row.id}</span>

              <span className="text-sm font-medium">{row.asset}</span>

              <span className="text-sm">{row.fromLocation}</span>

              <span className="text-sm">{row.toLocation}</span>

              <span className="text-sm">{row.movedBy}</span>

              <span className="text-sm">{row.moveDate}</span>

              {/* ACTIONS */}
              <div className="flex justify-end gap-2">
                {[Eye, Pencil, MoreHorizontal].map((Icon, i) => (
                  <button key={i} className="icon-btn">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          ),
        }}
      />

      {/* ================= FORM MODAL ================= */}
      <BaseFormModal
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title="Asset Movement"
        fields={FORM_FIELDS}
        onSubmit={() => setIsAddOpen(false)}
      />
    </div>
  );
}
