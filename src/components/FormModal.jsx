import React from "react";
import { X, Upload } from "lucide-react";

export default function AddAssetModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div
        className="
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
        "
        onClick={onClose}
      />

      {/* MODAL */}
      <div
        className="
          fixed inset-0 z-50
          flex items-center justify-center
          p-4
        "
      >
        <div
          className="
            w-full max-w-3xl
            rounded-2xl
            bg-surface
            glass glass-edge
            shadow-elev
            overflow-hidden
          "
        >
          {/* HEADER */}
          <div className="
            flex items-center justify-between
            px-6 py-4
            border-b border-black/10 dark:border-white/10
          ">
            <h2 className="text-lg font-semibold text-text-main">
              + Add New Asset
            </h2>

            <button
              onClick={onClose}
              className="
                p-2 rounded-lg
                text-text-muted
                hover:text-text-main
                hover:bg-black/5 dark:hover:bg-white/10
                transition
              "
            >
              <X size={18} />
            </button>
          </div>

          {/* BODY */}
          <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <FormField label="Asset Tag" required />
              <FormField label="Asset Name" required />

              <FormField label="Serial Number" required />
              <FormSelect label="Brand" required />

              <FormSelect label="Asset Type" required />
              <FormSelect label="Supplier" required />

              <FormSelect label="Location" required />
              <FormField label="Cost" required />

              <FormDate label="Purchase Date" required />
              <FormField label="Warranty" required />

              <FormSelect label="Status" required />
            </div>

            {/* DESCRIPTION */}
            <FormTextarea label="Description" required />

            {/* IMAGE UPLOAD */}
            <div>
              <label className="text-sm font-medium text-text-main">
                Picture <span className="text-text-muted">*</span>
              </label>

              <div
                className="
                  mt-2
                  flex items-center justify-center
                  gap-3
                  rounded-xl
                  border border-dashed border-black/15 dark:border-white/15
                  bg-app-frame
                  px-4 py-6
                "
              >
                <Upload size={18} className="text-text-muted" />
                <span className="text-sm text-text-muted">
                  Click to upload or drag & drop
                </span>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div className="
            flex items-center justify-end gap-3
            px-6 py-4
            border-t border-black/10 dark:border-white/10
          ">
            <button
              onClick={onClose}
              className="
                px-4 py-2 rounded-xl
                bg-surface
                border card-border
                text-text-main
                hover:bg-surface-2
                transition
              "
            >
              Cancel
            </button>

            <button
              className="
                px-5 py-2 rounded-xl
                bg-gradient-to-b from-primary/90 to-primary
                border border-primary/40
                text-white font-medium
                shadow-glow
                hover:brightness-105
                transition
              "
            >
              Save Asset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------------------------------
   FIELD COMPONENTS
--------------------------------- */

function FormField({ label, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-text-main">
        {label} {required && <span className="text-text-muted">*</span>}
      </label>
      <input
        className="
          px-3 py-2 rounded-lg
          bg-app-frame
          border card-border
          text-text-main
          placeholder:text-text-muted
          focus:outline-none focus:ring-2 focus:ring-primary/30
        "
      />
    </div>
  );
}

function FormSelect({ label, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-text-main">
        {label} {required && <span className="text-text-muted">*</span>}
      </label>
      <select
        className="
          px-3 py-2 rounded-lg
          bg-app-frame
          border card-border
          text-text-main
          focus:outline-none
        "
      >
        <option>Select {label}</option>
      </select>
    </div>
  );
}

function FormTextarea({ label, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-text-main">
        {label} {required && <span className="text-text-muted">*</span>}
      </label>
      <textarea
        rows={4}
        className="
          px-3 py-2 rounded-lg
          bg-app-frame
          border card-border
          text-text-main
          resize-none
          focus:outline-none focus:ring-2 focus:ring-primary/30
        "
      />
    </div>
  );
}

function FormDate({ label, required }) {
  return (
    <FormField label={label} required={required} />
  );
}
