import React from "react";
import { getActivityLogs } from "../helpers/ActivityLogger";

function LogsDashboard() {
  const events = getActivityLogs();

  return (
    <div>
      <h2>System Logs</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.time} – {event.label} – {JSON.stringify(event.payload)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LogsDashboard;
