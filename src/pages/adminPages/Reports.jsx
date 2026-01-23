import React from "react";

const Reports = () => {
  const reportCards = [
    {
      id: 1,
      title: "Asset Activity Report",
      description: "View detailed Asset Activity Report.",
    },
    {
      id: 2,
      title: "Component Activity Report",
      description: "View detailed Component Activity Report.",
    },
    {
      id: 3,
      title: "Maintenance Report",
      description: "View detailed Maintenance Report.",
    },
    {
      id: 4,
      title: "Report by Type",
      description: "View detailed Report by Type.",
    },
    {
      id: 5,
      title: "Report by Status",
      description: "View detailed Report by Status.",
    },
    {
      id: 6,
      title: "Report by Supplier",
      description: "View detailed Report by Supplier.",
    },
    {
      id: 7,
      title: "Report by Location",
      description: "View detailed Report by Location.",
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="bg-white rounded-lg">
        {/* Header */}
        <div className="px-6 py-4">
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        </div>

        {/* Reports Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportCards.map((report) => (
              <div
                key={report.id}
                className="bg-cyan-50 rounded-lg p-6 cursor-pointer transition-all duration-200 hover:shadow-md hover:bg-cyan-100"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {report.title}
                </h2>
                <p className="text-gray-600 text-sm">{report.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
