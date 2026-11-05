import Icon from "../components/Icon";
import AlertCard from "../components/AlertCard";
import { MetricCard, NpkCard } from "../components/MetricCard";
import SoilChart from "../components/SoilChart";
import { Intro, PageFooter } from "../components/Shared";


function SoilHealthPanel() {
  return (
    <section className="panel health-panel">
      <div className="health-score">
        <div className="section-heading">
          <strong>Soil Health</strong>
          <Icon name="sprout" size={22} />
        </div>
        <div className="score-line"><span>88</span><small>/100</small><b>Healthy</b></div>
        <div className="progress-track"><span style={{ width: "88%" }} /></div>
        <div className="progress-labels"><span>Needs attention</span><span>Optimal</span></div>
        <p>Balanced nutrients and steady moisture. Your soil is in a good place.</p>
      </div>
      <div className="health-trend">
        <div className="chart-heading"><span>Health over the last 6 hours</span><strong>Stable conditions</strong></div>
        <SoilChart variant="overview" compact />
        <div className="chart-times"><span>04:00</span><span>06:00</span><span>08:00</span><span>10:00</span></div>
      </div>
    </section>
  );
}

const recentRows = [
  ["10:42 AM", "6.5", "65%", "27°C", "120 / 45 / 180"],
  ["10:37 AM", "6.5", "65%", "27°C", "120 / 45 / 180"],
  ["10:32 AM", "6.5", "64%", "26.9°C", "119 / 45 / 180"],
  ["10:27 AM", "6.4", "64%", "26.8°C", "119 / 44 / 179"],
];

function RecentReadings() {
  return (
    <section className="panel table-panel">
      <div className="panel-title-row"><h3>Recent Readings</h3><span>Every 5 minutes</span></div>
      <div className="table-scroll">
        <table className="data-table">
          <thead><tr><th>Time</th><th>pH</th><th>Moisture</th><th>Temp</th><th>N / P / K · mg/kg</th><th /></tr></thead>
          <tbody>
            {recentRows.map((r, i) => (
              <tr key={r[0]}>
                {r.map((cell, j) => <td key={j}>{cell}{i === 0 && j === 0 ? <i className="row-live-dot" /> : null}</td>)}
                <td><Icon name="checkCircle" size={15} className="success-icon" /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


export default function Overview() {
  return (
    <>
      <Intro title="A little check-in for your soil." subtitle="Indoor planter  ·  Single measuring point" />
      <div className="metric-grid">
        <MetricCard icon="flask" label="pH" value="6.5" unit="pH" range="Ideal range  6.0–7.0 pH" />
        <MetricCard icon="droplet" label="Moisture" value="65" unit="%" range="Ideal range  40–70%" />
        <MetricCard icon="thermometer" label="Temp" value="27" unit="°C" range="Ideal range  20–30°C" />
        <NpkCard />
      </div>
      <SoilHealthPanel />
      <div className="overview-bottom">
        <RecentReadings />
        <AlertCard />
      </div>
      <PageFooter />
    </>
  );
}
