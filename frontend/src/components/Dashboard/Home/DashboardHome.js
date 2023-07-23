import MainDashboard from "../../Structure/Dashboard/MainDashboard";
import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

function DashboardHome() {
  return (
    <div id="dashboardHome">
      <MainDashboard>
        <NavDashboard />
        <NavDashboardMobileButton />
      </MainDashboard>
    </div>
  );
}

export default DashboardHome;
