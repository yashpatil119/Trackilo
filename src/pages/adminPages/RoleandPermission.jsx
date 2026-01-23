// src/pages/adminPages/Roles.jsx
import React, { useState } from "react";
import { Plus, Eye, Pencil, Trash } from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModal from "../../components/BaseFormModel";

/* ================= TABLE GRID ================= */
const COLS = "grid-cols-[240px_200px_1fr_120px]";

export default function Roles() {
  /* ================= STATE ================= */
  const [open, setOpen] = useState(false);

  /* ================= MOCK DATA ================= */
  const roles = [
    {
      id: 1,
      role: "Admin",
      users: 5,
      permissions: 24,
    },
    {
      id: 2,
      role: "Manager",
      users: 3,
      permissions: 12,
    },
  ];

  /* ================= PERMISSIONS ================= */
  const permissionGroups = [
    {
      group: "Asset Movement",
      items: [
        { label: "Asset Movement Add", value: "asset_movement_add" },
        { label: "Asset Movement Edit", value: "asset_movement_edit" },
        { label: "Asset Movement Delete", value: "asset_movement_delete" },
        { label: "Asset Movement View", value: "asset_movement_view" },
      ],
    },
    {
      group: "Asset Types",
      items: [
        { label: "Asset Types Add", value: "asset_types_add" },
        { label: "Asset Types Edit", value: "asset_types_edit" },
      ],
    },
    {
      group: "Assets",
      items: [
        { label: "Assets Add", value: "assets_add" },
        { label: "Assets Edit", value: "assets_edit" },
        { label: "Assets Delete", value: "assets_delete" },
        { label: "Assets View", value: "assets_view" },
      ],
    },
  ];

  /* ================= FORM FIELDS ================= */
  const formFields = [
    {
      name: "role",
      label: "Role Title",
      type: "text",
      required: true,
    },
    {
      name: "permissions",
      label: "Assigned Permissions",
      type: "checkbox-group",
      groups: permissionGroups,
      required: true,
    },
  ];

  return (
    <div className="space-y-10">
      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-text-main">Roles</h1>

        <button
          onClick={() => setOpen(true)}
          className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
        >
          <Plus size={16} />
          Create Role
        </button>
      </div>

      {/* ================= FILTER ================= */}
      <BaseFilterBox
        searchPlaceholder="Type to filter roles..."
        filters={[]}
        onClear={() => {}}
      />

      {/* ================= TABLE ================= */}
      <BaseTable
        columns={COLS}
        data={roles}
        renderRow={{
          header: [
            "Role",
            "Assigned Users",
            "Assigned Permissions",
            "Action",
          ],
          body: (row) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm font-medium text-text-main">
                {row.role}
              </span>

              <span className="text-sm">{row.users}</span>

              <span className="text-sm">{row.permissions}</span>

              <div className="flex justify-end gap-2">
                {[Eye, Pencil, Trash].map((Icon, i) => (
                  <button key={i} className="icon-btn">
                    <Icon size={16} />
                  </button>
                ))}
              </div>
            </div>
          ),
        }}
      />

      {/* ================= FORM MODAL ================= */}
      <BaseFormModal
        open={open}
        onClose={() => setOpen(false)}
        title="Create Role"
        fields={formFields}
        onSubmit={() => setOpen(false)}
      />
    </div>
  );
}
