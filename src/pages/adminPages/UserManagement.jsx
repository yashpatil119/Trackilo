import React, { useState } from "react";
import {
  Plus,
  Upload,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";

import BaseFilterBox from "../../components/BaseFilterBox";
import BaseTable from "../../components/BaseTable";
import BaseFormModal from "../../components/BaseFormModel";

/* ---------------- MOCK DATA ---------------- */
const users = [
  {
    id: 1,
    fullName: "Sourabh",
    email: "sourabh@example.co.in",
    phone: "9876543210",
    role: "Super Admin",
    city: "Pune",
    status: "Active",
  },
  {
    id: 2,
    fullName: "John Doe",
    email: "johndoe@example.com",
    phone: "N/A",
    role: "Owner",
    city: "N/A",
    status: "Active",
  },
  {
    id: 3,
    fullName: "Yash Patil",
    email: "yash@example.com",
    phone: "N/A",
    role: "Admin",
    city: "N/A",
    status: "Active",
  },
];

/* ---------------- TABLE GRID ---------------- */
const COLS =
  "grid-cols-[220px_260px_140px_160px_140px_120px_120px]";

/* ---------------- FORM FIELDS ---------------- */
const FORM_FIELDS = [
  {
    name: "fullName",
    label: "Full Name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    required: true,
  },
  {
    name: "phone",
    label: "Phone",
    type: "text",
    required: true,
  },
  {
    name: "role",
    label: "Role",
    type: "select",
    required: true,
    options: ["Super Admin", "Owner", "Admin", "User"],
  },
  {
    name: "city",
    label: "City",
    type: "text",
    required: true,
  },
  {
    name: "status",
    label: "Status",
    type: "select",
    required: true,
    options: ["Active", "Inactive"],
  },
];

export default function Users() {
  const [isAddOpen, setIsAddOpen] = useState(false);

  return (
    <div className="space-y-10">

      {/* ================= HEADER ================= */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-text-main">
            Users
          </h1>
          <p className="text-sm text-text-muted mt-1">
            Manage application users and roles
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsAddOpen(true)}
            className="btn-add flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <Plus size={16} />
            Add
          </button>

          <button className="btn-export flex items-center gap-2 px-4 py-2 rounded-xl">
            <Upload size={16} />
            Export to Excel
          </button>
        </div>
      </div>

      {/* ================= FILTER ================= */}
      <BaseFilterBox
        searchPlaceholder="Search by name or email"
        filters={[]}
        onClear={() => {}}
      />

      {/* ================= TABLE ================= */}
      <BaseTable
        columns={COLS}
        data={users}
        renderRow={{
          header: [
            "Full Name",
            "Email",
            "Phone",
            "Role",
            "City",
            "Status",
            "Action",
          ],

          body: (u) => (
            <div className={`grid ${COLS} gap-4 items-center`}>
              <span className="text-sm font-medium">{u.fullName}</span>
              <span className="text-sm">{u.email}</span>
              <span className="text-sm">{u.phone}</span>
              <span className="text-sm">{u.role}</span>
              <span className="text-sm">{u.city}</span>

              <span className="status-pill">
                {u.status}
              </span>

              <div className="flex justify-end gap-2">
                {[Eye, Pencil, Trash2].map((Icon, i) => (
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
        open={isAddOpen}
        onClose={() => setIsAddOpen(false)}
        title="Add User"
        fields={FORM_FIELDS}
        onSubmit={() => setIsAddOpen(false)}
      />
    </div>
  );
}
