import React, { useState } from "react";
import { Plus, Download, MoreHorizontal } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModel from "../../components/BaseFormModel";

/* MOCK DATA */
const assetTypes = [
  {
    id: 1,
    name: "Test",
    description: "NA",
    total: 0,
    allocated: 0,
    unallocated: 0,
  },
  {
    id: 2,
    name: "Test1",
    description: "NA",
    total: 0,
    allocated: 0,
    unallocated: 0,
  },
];

/* GRID — MATCH IMAGE */
const COLS = "grid-cols-[160px_260px_180px_220px_220px_140px]";

/* ----------------------------------
   ADD ASSET TYPE FORM FIELDS
   (MATCH IMAGE EXACTLY)
---------------------------------- */
const assetTypeFormFields = [
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

export default function AssetsTypes() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddAssetType = () => {
    // submit logic / API call later
    console.log("Asset type submitted");
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-main">
            Asset Types Management
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Manage your organization's asset types
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add Asset Type
          </button>

          <button className="btn-export flex items-center gap-2 px-4 py-2 rounded-xl">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* ADD ASSET TYPE MODAL (CONFIG-DRIVEN) */}
      <BaseFormModel
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Asset Type"
        fields={assetTypeFormFields}
        onSubmit={handleAddAssetType}
      />

      {/* FILTER */}
      <BaseFilterBox
        searchPlaceholder="Search by name..."
        filters={[]}
        onClear={() => {}}
      />

      {/* TABLE */}
      <BaseTable
        columns={COLS}
        data={assetTypes}
        renderRow={{
          header: [
            "Name",
            "Description",
            "Total Assets",
            "Allocated Assets",
            "Unallocated Assets",
            "Actions",
          ],
          body: (a) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm font-medium text-text-main">
                {a.name}
              </span>

              <span className="text-sm">{a.description}</span>

              <Badge value={a.total} variant="primary" />

              <Badge value={a.allocated} variant="warning" />

              <Badge value={a.unallocated} variant="success" />

              <div className="flex justify-end">
                <button className="icon-btn flex items-center gap-1">
                  Actions
                  <MoreHorizontal size={14} />
                </button>
              </div>
            </div>
          ),
        }}
      />
    </div>
  );
}

/* ----------------------------------
   SMALL UI HELPERS
---------------------------------- */

function Badge({ value, variant }) {
  const variants = {
    primary: "bg-primary text-white",
    warning: "bg-warning text-black",
    success: "bg-success text-white",
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        min-w-[32px] px-3 py-1
        rounded-md text-xs font-medium
        ${variants[variant]}
      `}
    >
      {value}
    </span>
  );
}
