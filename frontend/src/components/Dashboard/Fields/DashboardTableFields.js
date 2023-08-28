import CreateButton from "../Reusable/CreateButton";
import ShowButton from "../Reusable/ShowButton";
import UpdateButton from "../Reusable/UpdateButton";
import DeleteButton from "../Reusable/DeleteButton";

function DashboardTableFields() {
  return (
    <div>
      <div id="containerDashboardTables">
        <table id="dashboardTableFields" className="dashboardTables">
          <thead>
            <tr>
              <td className="checkboxColumn">
                <input type="checkbox" />
              </td>
              <td>Cours</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr className="impairLine">
              <td>
                <input type="checkbox" />
              </td>
              <td>Mathématiques</td>
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

export default DashboardTableFields;
