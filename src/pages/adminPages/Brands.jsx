import React, { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModel from "../../components/BaseFormModel";

/* MOCK DATA */
const brands = [
  {
    id: 1,
    name: "Test",
    description: "-",
    color: "-",
    createdAt: "12/17/2025",
  },
];

/* GRID — MATCH IMAGE */
const COLS = "grid-cols-[240px_360px_160px_200px_160px]";

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

export default function Brands() {
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
        <h1 className="text-2xl font-semibold text-text-main">
          Asset Statuses
        </h1>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
        >
          <Plus size={16} />
          Add Brand
        </button>
      </div>

      {/* ADD BRAND MODAL (CONFIG-DRIVEN) */}
      <BaseFormModel
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Brand"
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

              <div className="flex gap-2">
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
