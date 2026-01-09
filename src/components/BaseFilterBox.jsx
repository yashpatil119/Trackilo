import React from "react";

export default function BaseFilterBox({
  searchPlaceholder,
  filters = [],
  onClear,
}) {
  return (
    <div className="dashboard-panel glass glass-edge elev-1 rounded-xl p-4">
      <div className="flex flex-wrap items-center gap-3">
        {/* SEARCH */}
        <input
          type="text"
          placeholder={searchPlaceholder}
          className="
            flex-1 min-w-[260px]
            px-4 py-2 rounded-lg
            bg-app-frame
            text-text-main placeholder:text-text-muted
            border border-subtle
            focus:outline-none focus:ring-2 focus:ring-primary/30
          "
        />

        {/* FILTER SELECTS */}
        {filters.map((label) => (
          <select
            key={label}
            className="
              px-3 py-2 rounded-lg
              bg-app-frame text-text-main
              border border-subtle
              focus:outline-none
            "
          >
            <option>{label}</option>
          </select>
        ))}

        {/* CLEAR */}
        <button
          onClick={onClear}
          className="text-sm text-text-muted hover:text-text-main transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
