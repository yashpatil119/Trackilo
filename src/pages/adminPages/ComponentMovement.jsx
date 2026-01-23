import React, { useState } from "react";
import { Plus, Upload, Eye, Pencil, MoreHorizontal } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModal from "../../components/BaseFormModel";

/* ---------------- MOCK DATA ---------------- */
const movements = [
  {
    id: 1,
    component: "RAM 16GB",
    fromLocation: "Warehouse",
    toLocation: "Server Room",
    movedBy: "Admin",
    moveDate: "12-01-2026",
  },
  {
    id: 2,
    component: "SSD 1TB",
    fromLocation: "Office Floor",
    toLocation: "Warehouse",
    movedBy: "Manager",
    moveDate: "10-01-2026",
  },
];

/* ---------------- TABLE GRID ---------------- */
const COLS =
  "grid-cols-[80px_240px_200px_200px_160px_140px_120px]";

/* ---------------- FORM CONFIG ---------------- */
const FORM_FIELDS = [
  {
    name: "component",
    label: "Component",
    type: "select",
    required: true,
    options: ["RAM 16GB", "SSD 1TB", "CPU i7"],
  },
  {
    name: "fromLocation",
    label: "From Location",
    type: "select",
    required: true,
    options: ["Warehouse", "Office Floor", "Server Room"],
  },
  {
    name: "toLocation",
    label: "To Location",
    type: "select",
    required: true,
    options: ["Warehouse", "Office Floor", "Server Room"],
  },
  {
    name: "moveDate",
    label: "Move Date",
    type: "date",
    required: true,
  },
];

export default function ComponentMovement() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-text-main">
          Component Movement
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
            "Component",
            "From Location",
            "To Location",
            "Moved By",
            "Move Date",
            "Action",
          ],
          body: (row) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm">{row.id}</span>

              <span className="text-sm font-medium text-text-main">
                {row.component}
              </span>

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
        title="Component Movement"
        fields={FORM_FIELDS}
        onSubmit={() => setIsAddOpen(false)}
      />
    </div>
  );
}
  