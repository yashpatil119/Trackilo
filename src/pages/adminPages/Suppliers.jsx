import React, { useState } from "react";
import { Plus, Download, Pencil, Trash2 } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModel from "../../components/BaseFormModel";

/* MOCK DATA */
const suppliers = [
  {
    id: 1,
    name: "ABC Supplier",
    email: "abc@mail.com",
    phone: "9876543210",
    address: "Mumbai",
    city: "Mumbai",
    country: "India",
  },
  {
    id: 2,
    name: "XYZ Services",
    email: "xyz@mail.com",
    phone: "9123456780",
    address: "Pune",
    city: "Pune",
    country: "India",
  },
];

/* GRID — MATCH IMAGE */
const COLS = "grid-cols-[220px_220px_180px_180px_160px_160px_160px]";

/* ----------------------------------
   ADD SUPPLIER FORM FIELDS
   (MATCH IMAGE EXACTLY)
---------------------------------- */
const supplierFormFields = [
  {
    label: "Name",
    name: "name",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    required: true,
  },
  {
    label: "Phone",
    name: "phone",
    required: true,
  },
  {
    label: "Address",
    name: "address",
    required: true,
  },
  {
    label: "City",
    name: "city",
    required: true,
  },
  {
    label: "Country",
    name: "country",
    required: true,
  },
];

export default function Supplier() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddSupplier = () => {
    // submit logic / API call later
    console.log("Supplier submitted");
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-main">
            Suppliers Management
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Manage your organization's suppliers
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add Supplier
          </button>

          <button className="btn-export flex items-center gap-2 px-4 py-2 rounded-xl">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* ADD SUPPLIER MODAL (CONFIG-DRIVEN) */}
      <BaseFormModel
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Supplier"
        fields={supplierFormFields}
        onSubmit={handleAddSupplier}
      />

      {/* SEARCH */}
      <BaseFilterBox
        searchPlaceholder="Search by name or email..."
        filters={[]}
        onClear={() => {}}
      />

      {/* TABLE */}
      <BaseTable
        columns={COLS}
        data={suppliers}
        renderRow={{
          header: [
            "Name",
            "Email",
            "Phone",
            "Address",
            "City",
            "Country",
            "Actions",
          ],
          body: (s) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm font-medium text-text-main">
                {s.name}
              </span>

              <span className="text-sm">{s.email}</span>

              <span className="text-sm">{s.phone}</span>

              <span className="text-sm">{s.address}</span>

              <span className="text-sm">{s.city}</span>

              <span className="text-sm">{s.country}</span>

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
