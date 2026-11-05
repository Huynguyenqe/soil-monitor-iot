import { NavLink } from "react-router";
import Icon from "./Icon";
import { Avatar, Brand } from "./Shared";

const navItems = [
  { to: "/overview", label: "Overview", icon: "grid" },
  { to: "/analytics", label: "Analytics", icon: "chart" },
  { to: "/sensors", label: "Sensor Monitoring", icon: "radio" },
  { to: "/settings", label: "Settings", icon: "settings" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Brand />
      <div className="nav-section-label">Workspace</div>
      <nav className="side-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            <Icon name={item.icon} size={19} />
            <span>{item.label}</span>
            <span className="active-dot" />
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="grow-card">
          <Icon name="sprout" size={21} />
          <strong>My growing space</strong>
          <p>One pot. One measuring point. A closer connection.</p>
          <span className="live-line"><i /> Live monitoring</span>
        </div>
        <div className="sidebar-user">
          <Avatar initials="AL" />
          <div>
            <strong>Alex Lee</strong>
            <span>Personal workspace</span>
          </div>
        </div>
      </div>
    </aside>
  );
}
