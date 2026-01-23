// src/pages/adminPages/QRCode.jsx
import React, { useState } from "react";
import { QrCode, Search } from "lucide-react";

export default function QRCode() {
  const [searchValue, setSearchValue] = useState("");
  const [startTag, setStartTag] = useState("");
  const [endTag, setEndTag] = useState("");

  return (
    <div className="space-y-8">

      {/* ================= HEADER ================= */}
      <div>
        <h1 className="text-2xl font-semibold text-text-main">
          Generate QR Code
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Generate and print QR codes for assets or components
        </p>
      </div>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* -------- Search & Print -------- */}
        <div className="dashboard-panel rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-text-main font-semibold">
            <Search size={18} />
            <span>Search & Print</span>
          </div>

          <div className="space-y-2">
            <label className="form-label">
              Asset or Component Tag / Serial No / Name
            </label>

            <div className="flex gap-2">
              <input
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="e.g. AST-001 or SN123"
                className="form-input flex-1"
              />

              <button className="btn-primary px-4">
                <QrCode size={16} className="mr-2" />
                Generate
              </button>
            </div>

            <p className="text-xs text-text-muted">
              Search for a specific item to print its QR code.
            </p>
          </div>
        </div>

        {/* -------- Generate by Series -------- */}
        <div className="dashboard-panel rounded-xl p-6 space-y-4">
          <div className="flex items-center gap-2 text-text-main font-semibold">
            <QrCode size={18} />
            <span>Generate by Series</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="form-label">Start Tag</label>
              <input
                value={startTag}
                onChange={(e) => setStartTag(e.target.value)}
                placeholder="e.g. NY-LAP-001"
                className="form-input"
              />
            </div>

            <div className="space-y-1">
              <label className="form-label">End Tag</label>
              <input
                value={endTag}
                onChange={(e) => setEndTag(e.target.value)}
                placeholder="e.g. NY-LAP-010"
                className="form-input"
              />
            </div>
          </div>

          <p className="text-xs text-text-muted">
            Generate a series of tags (e.g. TAG-0001 to TAG-0010).
          </p>

          <button className="btn-primary w-full mt-2">
            Generate QR Code
          </button>
        </div>
      </div>
    </div>
  );
}
