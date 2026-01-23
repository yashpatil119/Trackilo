import React, { useState } from "react";
import { Plus, Upload, Eye, Pencil, MoreHorizontal } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModal from "../../components/BaseFormModel";

/* ---------------- MOCK DATA ---------------- */
const employees = [
  {
    id: "EMP-001",
    name: "John Doe",
    role: "Software Engineer",
    department: "IT",
    location: "Office Floor",
    status: "Active",
  },
  {
    id: "EMP-002",
    name: "Jane Smith",
    role: "HR Manager",
    department: "HR",
    location: "Head Office",
    status: "Inactive",
  },
];

/* ---------------- TABLE GRID ---------------- */
const COLS =
  "grid-cols-[120px_1.5fr_1.2fr_1.2fr_1.2fr_120px_120px]";
  
/* ---------------- FORM FIELDS ---------------- */
const FORM_FIELDS = [
  {
    name: "fullName",
    label: "Full name",
    type: "text",
    required: true,
  },
  {
    name: "empId",
    label: "Emp ID",
    type: "text",
    required: true,
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    options: ["Active", "Inactive"],
  },
  {
    name: "jobRole",
    label: "Job role",
    type: "text",
    required: true,
  },
  {
    name: "department",
    label: "Department",
    type: "select",
    required: true,
    options: ["IT", "HR", "Finance", "Operations"],
  },
  {
    name: "location",
    label: "Location",
    type: "select",
    required: true,
    options: ["Office Floor", "Warehouse", "Head Office"],
  },
];

export default function Employees() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="space-y-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-main">
            Employees Management
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Manage your organization's employees
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add Employee
          </button>

          <button className="btn-export flex items-center gap-2 px-4 py-2 rounded-xl">
            <Upload size={16} />
            Export
          </button>
        </div>
      </div>

      {/* ================= FILTER ================= */}
<BaseFilterBox
  searchPlaceholder="Search by name or ID..."
  filters={["All Status"]}
  onClear={() => {}}
/>


      {/* ================= TABLE ================= */}
      <BaseTable
        columns={COLS}
        data={employees}
        renderRow={{
          header: [
            "Emp ID",
            "Full name",
            "Job role",
            "Department",
            "Location",
            "Status",
            "Actions",
          ],
          body: (row) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm font-medium">{row.id}</span>

              <span className="text-sm font-medium text-text-main">
                {row.name}
              </span>

              <span className="text-sm">{row.role}</span>
              <span className="text-sm">{row.department}</span>
              <span className="text-sm">{row.location}</span>

              <span
                className={`status-pill ${
                  row.status === "Active"
                    ? "status-active"
                    : "status-inactive"
                }`}
              >
                {row.status}
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
        title="Add New Employee"
        fields={FORM_FIELDS}
        onSubmit={() => setIsAddOpen(false)}
      />
    </div>
  );
}
