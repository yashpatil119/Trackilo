import React from "react";
import { X } from "lucide-react";

export default function BaseFormModal({
  open,
  onClose,
  title,
  fields,
  onSubmit,
}) {
  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md rounded-xl bg-app-frame border card-border shadow-elev overflow-hidden">
          {/* HEADER */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-subtle">
            <h2 className="text-sm font-semibold text-text-main">{title}</h2>

            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-text-muted hover:bg-surface-2"
            >
              <X size={16} />
            </button>
          </div>

          {/* FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit?.();
            }}
            className="flex flex-col"
          >
            {/* SCROLLABLE BODY */}
            <div className="px-4 py-4 space-y-4 overflow-y-auto max-h-[60vh]">
              {fields.map((field) => (
                <FormField key={field.name} {...field} />
              ))}
            </div>

            {/* FOOTER (FIXED) */}
            <div className="flex justify-end gap-2 px-4 py-3 border-t border-subtle">
              <button
                type="button"
                onClick={onClose}
                className="px-3 py-1.5 rounded-md text-xs bg-surface border card-border"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-1.5 rounded-md text-xs font-medium btn-primary"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

/* ---------------- FIELD RENDERER ---------------- */

function FormField({ label, name, type = "text", required, options }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {type === "select" ? (
        <select className="form-input">
          <option>Select an option</option>
          {options?.map((opt) => (
            <option key={opt}>{opt}</option>
          ))}
        </select>
      ) : (
        <input type={type} className="form-input" />
      )}
    </div>
  );
}
