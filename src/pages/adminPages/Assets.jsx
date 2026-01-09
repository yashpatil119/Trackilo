// src/pages/adminPages/Assets.jsx
import React, { useState } from "react";
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

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModel from "../../components/BaseFormModel";

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

/* ---------------- TABLE GRID ---------------- */
const COLS = "grid-cols-[300px_120px_120px_160px_120px_110px]";

const ASSET_FORM_FIELDS = [
  {
    name: "assetType",
    label: "Asset Type",
    type: "select",
    required: true,
    options: ["Laptop", "Printer", "Server"],
  },
  {
    name: "assetName",
    label: "Asset Name",
    required: true,
  },
  {
    name: "serialNumber",
    label: "Serial Number",
    required: true,
  },
  {
    name: "brand",
    label: "Brand",
    type: "select",
    required: true,
    options: ["Lenovo", "Canon", "Dell"],
  },
  {
    name: "supplier",
    label: "Supplier",
    type: "select",
    required: true,
    options: ["Supplier A", "Supplier B"],
  },
  {
    name: "location",
    label: "Location",
    type: "select",
    required: true,
    options: ["Warehouse", "Office Floor", "Data Center"],
  },
  {
    name: "cost",
    label: "Cost",
    type: "number",
    required: true,
  },
  {
    name: "purchaseDate",
    label: "Purchase Date",
    type: "date",
    required: true,
  },
  {
    name: "warranty",
    label: "Warranty",
    required: true,
  },
  {
    name: "assetTag",
    label: "Asset Tag",
    required: true,
    disabled: true,
    placeholder: "Auto-generated",
    helperText: "Generated automatically based on Type, Brand, and Location.",
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    options: ["Available", "Maintenance", "Assigned"],
  },
  {
    name: "rackNo",
    label: "Rack No",
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    required: true,
  },
  {
    name: "picture",
    label: "Picture",
    type: "file",
    required: true,
  },
];

export default function Assets() {
  const [isAddOpen, setIsAddOpen] = useState(false);

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
          <button
            onClick={() => setIsAddOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add Asset
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

      {/* ================= FILTER ================= */}
      <BaseFilterBox
        searchPlaceholder="Search by name, tag, or brand"
        filters={["All Status", "All Types", "All Locations"]}
        onClear={() => {}}
      />

      {/* ================= TABLE ================= */}
      <BaseTable
        columns={COLS}
        data={assets}
        renderRow={{
          header: ["Asset", "Type", "Brand", "Location", "Status", "Actions"],

          body: (a) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              {/* Asset */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-surface-2 flex items-center justify-center">
                  <Package size={18} />
                </div>
                <div>
                  <div className="text-sm font-medium text-text-main">
                    {a.name}
                  </div>
                  <div className="text-xs text-text-muted">{a.tag}</div>
                </div>
              </div>

              <span className="badge">{a.type}</span>
              <span className="text-sm">{a.brand}</span>

              <span className="flex items-center gap-1 text-sm">
                <MapPin size={14} className="text-text-muted" />
                {a.location}
              </span>

              <span className="status-pill">{a.status}</span>

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

      {/* ================= FORM MODAL (SINGLE SOURCE) ================= */}
      <BaseFormModel
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title="Add Asset"
        fields={ASSET_FORM_FIELDS}
        onSubmit={() => setIsAddOpen(false)}
      />
    </div>
  );
}
