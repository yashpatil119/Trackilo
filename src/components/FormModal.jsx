import React from "react";
import { X, Upload } from "lucide-react";

export default function AddAssetModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* BACKDROP — NO BLUR */}
      <div onClick={onClose} className="fixed inset-0 z-40 backdrop" />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="
            w-full max-w-lg
            rounded-xl
            bg-app-frame
            border card-border
            shadow-elev
          "
        >
          {/* HEADER */}
          <div
            className="
            flex items-center justify-between
            px-4 py-3
            border-b border-subtle
          "
          >
            <h2 className="text-sm font-semibold text-text-main">Add Asset</h2>

            <button
              onClick={onClose}
              className="
                p-1.5 rounded-md
                text-text-muted
                hover:text-text-main
                hover:bg-surface-2
              "
            >
              <X size={16} />
            </button>
          </div>

          {/* BODY */}
          <div className="px-4 py-3 space-y-4">
            {/* GRID — COMPACT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input label="Asset Tag" />
              <Input label="Asset Name" />

              <Input label="Serial Number" />
              <Select label="Brand" />

              <Select label="Asset Type" />
              <Select label="Supplier" />

              <Select label="Location" />
              <Input label="Cost" />

              <Input label="Purchase Date" />
              <Input label="Warranty" />

              <Select label="Status" />
            </div>

            {/* DESCRIPTION */}
            <Textarea label="Description" />

            {/* IMAGE UPLOAD — SIMPLE */}
            <div>
              <label className="form-label">Picture</label>
              <div
                className="
                  mt-1 flex items-center gap-2
                  px-3 py-2 rounded-md
                  bg-surface
                  border border-dashed border-subtle
                "
              >
                <Upload size={14} className="text-text-muted" />
                <span className="text-xs text-text-muted">Upload image</span>
              </div>
            </div>
          </div>

          {/* FOOTER */}
          <div
            className="
            flex items-center justify-end gap-2
            px-4 py-3
            border-t border-black/10 dark:border-white/10
          "
          >
            <button
              onClick={onClose}
              className="
                px-3 py-1.5 rounded-md
                text-xs
                bg-surface
                border card-border
                text-text-main
                hover:bg-surface-2
              "
            >
              Cancel
            </button>

            <button
              className="
                px-4 py-1.5 rounded-md
                text-xs font-medium
                btn-primary
                hover:brightness-105
              "
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ----------------------------
   COMPACT FIELD COMPONENTS
---------------------------- */

function Input({ label }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="form-label">{label}</label>
      <input className="form-input" />
    </div>
  );
}

function Select({ label }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="form-label">{label}</label>
      <select className="form-input">
        <option>Select {label}</option>
      </select>
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="form-label">{label}</label>
      <textarea rows={2} className="form-input resize-none" />
    </div>
  );
}
