import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModel from "../../components/BaseFormModel";

/* MOCK DATA */
const brands = [
  {
    id: 1,
    name: "Dell",
    description: "Dell Inc. - Leading computer and IT solutions provider",
    color: "#0066CC",
    createdAt: "01/10/2025",
  },
  {
    id: 2,
    name: "HP",
    description: "Hewlett-Packard - Computing and printing solutions",
    color: "#003DA5",
    createdAt: "01/10/2025",
  },
  {
    id: 3,
    name: "Lenovo",
    description: "Lenovo - Personal computers and enterprise solutions",
    color: "#E4002B",
    createdAt: "01/12/2025",
  },
  {
    id: 4,
    name: "Apple",
    description: "Apple Inc. - Premium consumer electronics and computers",
    color: "#555555",
    createdAt: "01/12/2025",
  },
  {
    id: 5,
    name: "Samsung",
    description: "Samsung Electronics - Technology and consumer electronics",
    color: "#1428A0",
    createdAt: "01/13/2025",
  },
  {
    id: 6,
    name: "LG Electronics",
    description: "LG Electronics - Displays and electronic devices",
    color: "#CC0000",
    createdAt: "01/15/2025",
  },
];

/* GRID — MATCH IMAGE */
const COLS = "grid-cols-[180px_300px_140px_150px_100px]";

/* ----------------------------------
   ADD BRAND FORM FIELDS
   (MATCH IMAGE EXACTLY)
---------------------------------- */
const brandFormFields = [
  {
    label: "Name",
    name: "name",
    required: true,
  },
  {
    label: "Description",
    name: "description",
    type: "textarea",
  },
];

export default function AssetStatus() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddBrand = () => {
    // submit logic / API call later
    console.log("Brand submitted");
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-text-main">Asset Statuse</h1>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
        >
          <Plus size={16} />
          Add Asset
        </button>
      </div>

      {/* ADD BRAND MODAL (CONFIG-DRIVEN) */}
      <BaseFormModel
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Asset"
        fields={brandFormFields}
        onSubmit={handleAddBrand}
      />

      {/* SEARCH */}
      <BaseFilterBox
        searchPlaceholder="Search by name..."
        filters={[]}
        onClear={() => {}}
      />

      {/* TABLE */}
      <BaseTable
        columns={COLS}
        data={brands}
        renderRow={{
          header: ["Name", "Description", "Color", "Created At", "Actions"],
          body: (b) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm font-medium text-text-main">
                {b.name}
              </span>

              <span className="text-sm">{b.description}</span>

              <span className="text-sm">{b.color}</span>

              <span className="text-sm">{b.createdAt}</span>

              <div className="flex justify-end gap-2">
                <button className="icon-btn bg-info/10 text-info">
                  <Pencil size={14} />
                </button>

                <button className="icon-btn bg-danger/10 text-danger">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
}
