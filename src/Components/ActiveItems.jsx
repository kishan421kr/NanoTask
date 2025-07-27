import React from "react";
import "../Style/ActionItems.css"

const actionItems = [
  {
    id: 1,
    task: "Share revised costing with the  Buyer and get it approved.",
    status: "In Progress",
    dueDate: "01 May, 2025",
    assignedTo: "Mohd Saleem",
    role: "Merchandiser",
  },
  {
    id: 2,
    task: "Send fabric swatches",
    status: "Pending",
    dueDate: "01 May, 2025",
    assignedTo: "Mohd Saleem",
    role: "Merchandiser",
  },
  {
    id: 3,
    task: "Confirm delivery window",
    status: "Completed",
    dueDate: "01 May, 2025",
    assignedTo: "Mohd Saleem",
    role: "Merchandiser",
  },
];

const statusColors = {
  Pending: "status-pending",
  "In Progress": "status-inprogress",
  Completed: "status-completed",
  Overdue: "status-overdue",
};

export default function ActionItems() {
  return (
    <div className="action-items-container">
      <h3 className="title">Action Items (3)</h3>
      <table className="action-table">
        <thead style={{backgroundColor:"rgba(245, 245, 245, 1)"}}>
          <tr>
            <th>Action Items</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Assigned to</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {actionItems.map((item) => (
            <tr key={item.id}>
              <td>{item.task}</td>
              <td>
                <span className={`status-label ${statusColors[item.status]}`}>
                  {item.status}
                </span>
              </td>
              <td>{item.dueDate}</td>
              <td>
                <div className="assigned-person">
                  <div className="avatar">M</div>
                  <div>
                    <div className="name">{item.assignedTo}</div>
                    <div className="role">{item.role}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="action-dropdown">
                  <span className="dots">⋮</span>
                  <div className="dropdown-menu">
                    <div className="dropdown-item">Edit</div>
                    <div className="dropdown-item">Delete</div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}