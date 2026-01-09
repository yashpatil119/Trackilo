import React, { useState } from "react";
import {
  Plus,
  Upload,
  Download,
  Eye,
  Pencil,
  MoreHorizontal,
  Package,
} from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModel from "../../components/BaseFormModel";

/* MOCK DATA */
const components = [
  {
    id: 1,
    name: "Resistor 10kΩ",
    tag: "CMP-001",
    type: "Electrical",
    brand: "Generic",
    quantity: 500,
    available: 320,
  },
  {
    id: 2,
    name: "Capacitor 100µF",
    tag: "CMP-002",
    type: "Electrical",
    brand: "Samsung",
    quantity: 200,
    available: 140,
  },
  {
    id: 3,
    name: "Arduino Uno",
    tag: "CMP-003",
    type: "Controller",
    brand: "Arduino",
    quantity: 50,
    available: 18,
  },
];

/* GRID COLUMNS */
const COLS = "grid-cols-[60px_80px_200px_150px_120px_120px_100px_160px_100px]";

/* -----------------------------
   ADD COMPONENT FORM FIELDS
-------------------------------- */
const componentFormFields = [
  {
    label: "Component Tag",
    name: "tag",
    required: true,
  },
  {
    label: "Component Name",
    name: "name",
    required: true,
  },
  {
    label: "Component Type",
    name: "type",
    type: "select",
    options: ["Electrical", "Controller", "Mechanical"],
    required: true,
  },
  {
    label: "Brand",
    name: "brand",
    type: "select",
    options: ["Generic", "Samsung", "Arduino"],
  },
  {
    label: "Total Quantity",
    name: "quantity",
    type: "number",
    required: true,
  },
  {
    label: "Available Quantity",
    name: "available",
    type: "number",
  },
  {
    label: "Unit",
    name: "unit",
    type: "select",
    options: ["Pieces", "Kg", "Meter"],
  },
  {
    label: "Supplier",
    name: "supplier",
    type: "select",
    options: ["Local", "Imported"],
  },
  {
    label: "Description",
    name: "description",
    type: "text",
  },
];

export default function Components() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddComponent = () => {
    // API call / state update will go here later
    console.log("Component form submitted");
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-main">
            Components Management
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Manage your organization's components
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add Component
          </button>

          <button className="btn-import flex items-center gap-2 px-4 py-2 rounded-xl">
            <Upload size={16} />
            Import
          </button>

          <button className="btn-export flex items-center gap-2 px-4 py-2 rounded-xl">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* ADD COMPONENT MODAL (USING BASEFORMMODAL AS-IS) */}
      <BaseFormModel
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Component"
        fields={componentFormFields}
        onSubmit={handleAddComponent}
      />

      {/* FILTERS */}
      <BaseFilterBox
        searchPlaceholder="Search by name, tag, or brand..."
        filters={["All Types", "All Brands"]}
        onClear={() => {}}
      />

      {/* TABLE */}
      <BaseTable
        columns={COLS}
        data={components}
        renderRow={{
          header: [
            "Id",
            "Picture",
            "Name",
            "Component Tag",
            "Type",
            "Brand",
            "Quantity",
            "Available quantity",
            "Actions",
          ],
          body: (c) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm text-text-muted">{c.id}</span>

              <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center">
                <Package size={18} />
              </div>

              <span className="text-sm font-medium text-text-main">
                {c.name}
              </span>

              <span className="text-xs text-text-muted">{c.tag}</span>

              <span className="badge">{c.type}</span>

              <span className="text-sm">{c.brand}</span>

              <span className="text-sm font-medium">{c.quantity}</span>

              <span className="text-sm text-success">{c.available}</span>

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
