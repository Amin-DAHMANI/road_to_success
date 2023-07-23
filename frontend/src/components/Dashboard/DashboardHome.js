import Main from "../Structure/Main/Main";
import NavDashboard from "../Structure/Dashboard/NavDashboard";
import NavDashboardButton from "../Structure/Dashboard/NavDashboardButton";

function DashboardHome() {
  return (
    <div id="dashboardHome">
      <Main>
        <NavDashboard />
        <NavDashboardButton />
      </Main>
    </div>
  );
}

export default DashboardHome;
