import DashboardTableFields from "./DashboardTableFields";

import MainDashboard from "../../Structure/Dashboard/MainDashboard";
import CreateIcon from "./../../Reusable/CreateIcon";

import NavDashboard from "../../Structure/Dashboard/NavDashboard";
import NavDashboardMobileButton from "../../Structure/Dashboard/NavDashboardMobileButton";

import { useContext } from "react";

import { AuthContext } from "./../../../utils/context/AuthContext";

function DashboardFields() {
  const { UserID } = useContext(AuthContext);
  return (
    <section id="dashboardFields">
      <>
        <NavDashboard />
        <NavDashboardMobileButton />
      </>
      {UserID && (
        <MainDashboard>
          <DashboardTableFields />
          <CreateIcon />
        </MainDashboard>
      )}
    </section>
  );
}

export default DashboardFields;
