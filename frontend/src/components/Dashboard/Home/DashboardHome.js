import MainDashboard from "../../Structure/Dashboard/MainDashboard";
import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

function DashboardHome() {
  return (
    <section id="dashboardHome">
      <MainDashboard>
        <NavDashboard />
        <NavDashboardMobileButton />
      </MainDashboard>
    </section>
  );
}

export default DashboardHome;
