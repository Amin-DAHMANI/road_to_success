import Main from "../Structure/Main/Main";
import NavDashboard from "../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../Structure/Dashboard/NavDashboardMobileButton";

function DashboardHome() {
  return (
    <div id="dashboardHome">
      <Main>
        <NavDashboard />
        <NavDashboardMobileButton />
      </Main>
    </div>
  );
}

export default DashboardHome;
