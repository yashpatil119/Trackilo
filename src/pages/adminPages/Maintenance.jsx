import React, { useState } from "react";
import { Plus, Download, Eye, Pencil, MoreHorizontal } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModel from "../../components/BaseFormModel";

/* MOCK DATA */
const maintenances = [
  {
    id: 1,
    assetTag: "AST-001",
    asset: "Lenovo Laptop",
    supplier: "Dell Services",
    type: "Repair",
    startDate: "2025-01-05",
    endDate: "2025-01-10",
  },
  {
    id: 2,
    assetTag: "AST-002",
    asset: "Canon Printer",
    supplier: "Canon Care",
    type: "Service",
    startDate: "2025-01-12",
    endDate: "2025-01-12",
  },
];

/* GRID — MATCH IMAGE */
const COLS = "grid-cols-[160px_200px_200px_150px_150px_150px_120px]";

/* ----------------------------------
   ADD MAINTENANCE FORM FIELDS
   (MATCHES IMAGE EXACTLY)
---------------------------------- */
const maintenanceFormFields = [
  {
    label: "Asset Tag",
    name: "assetTag",
    type: "select",
    required: true,
    options: ["AST-001", "AST-002", "AST-003"],
  },
  {
    label: "Asset",
    name: "asset",
  },
  {
    label: "Supplier",
    name: "supplier",
  },
  {
    label: "Type",
    name: "type",
  },
  {
    label: "Start Date",
    name: "startDate",
    type: "date",
    required: true,
  },
  {
    label: "End Date",
    name: "endDate",
    type: "date",
    required: true,
  },
];

export default function Maintenance() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddMaintenance = () => {
    // submit logic / API call later
    console.log("Maintenance form submitted");
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-main">
            Maintenance Management
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Manage your organization's maintenance records
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add Maintenance
          </button>

          <button className="btn-export flex items-center gap-2 px-4 py-2 rounded-xl">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* ADD MAINTENANCE MODAL (CONFIG-DRIVEN) */}
      <BaseFormModel
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Maintenance"
        fields={maintenanceFormFields}
        onSubmit={handleAddMaintenance}
      />

      {/* FILTER */}
      <BaseFilterBox
        searchPlaceholder="Search by asset..."
        filters={[]}
        onClear={() => {}}
      />

      {/* TABLE */}
      <BaseTable
        columns={COLS}
        data={maintenances}
        renderRow={{
          header: [
            "Asset Tag",
            "Asset",
            "Supplier",
            "Type",
            "Start Date",
            "End Date",
            "Actions",
          ],
          body: (m) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm text-text-muted">{m.assetTag}</span>

              <span className="text-sm font-medium text-text-main">
                {m.asset}
              </span>

              <span className="text-sm">{m.supplier}</span>

              <span className="badge">{m.type}</span>

              <span className="text-sm">{m.startDate}</span>

              <span className="text-sm">{m.endDate}</span>

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
    </div>
  );
}
