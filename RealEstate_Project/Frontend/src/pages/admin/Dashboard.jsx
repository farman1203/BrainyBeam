import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Users,
  Home,
  UserCheck,
  ListChecks,
  Activity,
} from "lucide-react";

import DashboardCard from "../../components/common/DashboardCard";
import "./Dashboard.css";

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalAgents: 0,
    totalProperties: 0,
    totalBuyers: 0,
    totalLeads: 0,
  });

  const [agents, setAgents] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getDashboard();
  }, []);

  const getDashboard = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/api/admin/dashboard",
        {
          withCredentials: true,
        }
      );
      setStats(res.data.stats);
      setAgents(res.data.agents);
      setActivities(res.data.recentProperties);
    } catch (error) {
      console.log(error);
    }
  };

  const cards = [
    {
      label: "Total Agents",
      value: stats.totalAgents,
      icon: Users,
      tone: "brand",
    },
    {
      label: "Total Properties",
      value: stats.totalProperties,
      icon: Home,
      tone: "gold",
    },
    {
      label: "Total Buyers",
      value: stats.totalBuyers,
      icon: UserCheck,
      tone: "success",
    },
    {
      label: "Total Leads",
      value: stats.totalLeads,
      icon: ListChecks,
      tone: "danger",
    },
  ];

  return (
    <div className="page-stack-6">

      <div>
        <h1 className="page-title">Admin Dashboard</h1>

        <p className="page-subtitle">
          Overview of platform activity.
        </p>
      </div>

      <div className="stats-grid-4">
        {cards.map((item) => (
          <DashboardCard key={item.label} {...item} />
        ))}
      </div>

      <div className="admin-dashboard-grid">

        {/* Agents */}

        <div className="admin-dashboard-agents-panel">

          <h2 className="admin-dashboard-panel-title">
            Recent Agents
          </h2>

          <div className="admin-dashboard-agent-list">

            {agents.map((agent) => (

              <div
                key={agent._id}
                className="admin-dashboard-agent-row"
              >

                <div className="admin-dashboard-agent-info">

                  <img
                    src=""
                    alt={agent.name}
                    className="admin-dashboard-agent-avatar"
                  />

                  <div>

                    <p className="admin-dashboard-agent-name">
                      {agent.name}
                    </p>

                    <p className="admin-dashboard-agent-meta">
                      {agent.email}
                    </p>

                  </div>

                </div>

                <span className="status-pill status-pill--success">
                  Active
                </span>

              </div>

            ))}

          </div>

        </div>

        {/* Activities */}

        <div className="admin-dashboard-activity-panel">

          <h2 className="admin-dashboard-panel-title admin-dashboard-panel-title--icon">

            <Activity size={18} />

            Recent Properties

          </h2>

          <ul className="admin-dashboard-activity-list">

            {activities.map((property) => (

              <li
                key={property._id}
                className="admin-dashboard-activity-item"
              >

                <p className="admin-dashboard-activity-text">

                  <strong>{property.title}</strong>

                  {" "}added by{" "}

                  {property.agent?.name}

                </p>

                <p className="admin-dashboard-activity-time">

                  {new Date(property.createdAt).toLocaleDateString()}

                </p>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>
  );
}