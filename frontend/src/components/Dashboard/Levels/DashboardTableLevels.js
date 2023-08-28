import CreateButton from "../Reusable/CreateButton";
import ShowButton from "../Reusable/ShowButton";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

function DashboardTableLevels() {
  return (
    <div>
      <div id="containerDashboardTables">
        <table id="dashboardTableLevels" className="dashboardTables">
          <thead>
            <tr>
              <td className="checkboxColumn">
                <input type="checkbox" />
              </td>
              <td>Niveaux</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr className="impairLine">
              <td>
                <input type="checkbox" />
              </td>
              <td>Débutant</td>
              <td>
                <ShowButton />
                <UpdateButton />
                <DeleteButton />
              </td>
            </tr>
            <tr className="pairLine">
              <td>
                <input type="checkbox" />
              </td>
              <td>Intermédiaire</td>
              <td>
                <ShowButton />
                <UpdateButton />
                <DeleteButton />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CreateButton />
    </div>
  );
}

export default DashboardTableLevels;
