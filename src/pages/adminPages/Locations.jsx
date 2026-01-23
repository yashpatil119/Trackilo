import React, { useState } from "react";
import { Plus, Upload, Eye, Pencil, MoreHorizontal } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModal from "../../components/BaseFormModel";

/* ---------------- MOCK DATA ---------------- */
const locations = [
  {
    id: 1,
    name: "Warehouse",
    description: "Central storage location",
  },
  {
    id: 2,
    name: "Office Floor",
    description: "Main office working area",
  },
];

/* ---------------- TABLE GRID ---------------- */
const COLS = "grid-cols-[300px_1fr_120px]";

/* ---------------- FORM FIELDS ---------------- */
const FORM_FIELDS = [
  {
    name: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
  },
];

export default function Locations() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-main">
            Locations Management
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Manage your organization's locations
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add Location
          </button>

          <button className="btn-export flex items-center gap-2 px-4 py-2 rounded-xl">
            <Upload size={16} />
            Export
          </button>
        </div>
      </div>

      {/* ================= FILTER ================= */}
      <BaseFilterBox
        searchPlaceholder="Search by name..."
        filters={[]}
        onClear={() => {}}
      />

      {/* ================= TABLE ================= */}
      <BaseTable
        columns={COLS}
        data={locations}
        renderRow={{
          header: ["Name", "Description", "Actions"],
          body: (row) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm font-medium text-text-main">
                {row.name}
              </span>

              <span className="text-sm text-text-muted">
                {row.description || "—"}
              </span>

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
        title="Add Location"
        fields={FORM_FIELDS}
        onSubmit={() => setIsAddOpen(false)}
      />
    </div>
  );
}
