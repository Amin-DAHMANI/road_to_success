import DashboardTableCourses from "./DashboardTableCourses";

import MainDashboard from "../../Structure/Dashboard/MainDashboard";

import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

function DashboardCourses() {
  return (
    <div id="dashboardCourses">
      <NavDashboard />
      <MainDashboard>
        <DashboardTableCourses />
      </MainDashboard>
      <NavDashboardMobileButton />
    </div>
  );
}

export default DashboardCourses;
