import React, { useState } from "react";
import { Plus, Upload, Eye, Pencil, MoreHorizontal } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModal from "../../components/BaseFormModel";

/* ---------------- MOCK DATA ---------------- */
const alerts = [
  {
    id: 1,
    title: "Asset Warranty Expiry",
    startDate: "10-01-2026 10:00",
    endDate: "15-01-2026 18:00",
    color: "#ff4d4f",
    type: "Warranty",
    status: "Active",
    description: "Laptop warranty expiring soon",
    location: "Warehouse",
  },
  {
    id: 2,
    title: "Maintenance Reminder",
    startDate: "12-01-2026 09:00",
    endDate: null,
    color: "#1890ff",
    type: "Maintenance",
    status: "Active",
    description: "Scheduled server maintenance",
    location: "Server Room",
  },
];

/* ---------------- TABLE GRID ---------------- */
/*
 Title | Start | End | Color | Type | Status | Description | Location | Actions
*/
const COLS =
  "grid-cols-[160px_140px_140px_100px_110px_100px_220px_140px_100px]";

/* ---------------- FORM FIELDS ---------------- */
const FORM_FIELDS = [
  { name: "title", label: "Title", type: "text", required: true },
  { name: "startDate", label: "Start Date", type: "datetime", required: true },
  { name: "endDate", label: "End Date", type: "datetime" },
  { name: "color", label: "Color", type: "color" },
  { name: "type", label: "Type", type: "text" },
  { name: "description", label: "Description", type: "textarea" },
  { name: "location", label: "Location", type: "text" },
];

export default function Alerts() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-text-main">Alerts</h1>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add Alert
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
        data={alerts}
        renderRow={{
          header: [
            "Title",
            "Start Date",
            "End Date",
            "Color",
            "Type",
            "Status",
            "Description",
            "Location",
            "Actions",
          ],

          body: (row) => (
            <div
              className={`grid ${COLS} gap-4 items-center whitespace-nowrap`}
            >
              <span className="text-sm font-medium truncate">{row.title}</span>

              <span className="text-sm">{row.startDate}</span>

              <span className="text-sm">{row.endDate || "—"}</span>

              {/* Color */}
              <div className="flex items-center gap-2">
                <span
                  className="w-8 h-3 rounded-sm border border-subtle"
                  style={{ backgroundColor: row.color }}
                />
                <span className="text-xs text-text-muted">{row.color}</span>
              </div>

              <span className="text-sm">{row.type}</span>

              {/* Status */}
              <span className="status-pill status-active whitespace-nowrap">
                {row.status}
              </span>

              <span className="text-sm text-text-muted truncate">
                {row.description}
              </span>

              <span className="text-sm truncate">{row.location}</span>

              {/* Actions */}
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
        title="Add Alert"
        submitLabel="Create Alert"
        fields={FORM_FIELDS}
        onSubmit={() => setIsAddOpen(false)}
      />
    </div>
  );
}
