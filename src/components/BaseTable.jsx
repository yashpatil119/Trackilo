import React from "react";

export default function BaseTable({
  columns,
  data,
  renderRow,
}) {
  return (
    <div className="dashboard-panel glass glass-edge elev-1 rounded-xl overflow-hidden">
      
      {/* HEADER */}
      <div className="table-header">
        <div className={`grid ${columns} gap-4`}>
          {renderRow.header.map((h) => (
            <span key={h}>{h}</span>
          ))}
        </div>
      </div>

      {/* ROWS */}
      {data.map((row, idx) => (
        <div
          key={row.id || idx}
          className={`
            px-6 py-4 transition row-hover
            ${idx !== data.length - 1 ? "border-b border-subtle" : ""}
          `}
        >
          {renderRow.body(row)}
        </div>
      ))}
    </div>
  );
}
