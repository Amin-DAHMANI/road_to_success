import ShowIcon from "./../../Reusable/ShowIcon";
import UpdateIcon from "./../../Reusable/UpdateIcon";
import DeleteIcon from "./../../Reusable/DeleteIcon";

function DashboardTableFields() {
  return (
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
            <ShowIcon />
            <UpdateIcon />
            <DeleteIcon />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DashboardTableFields;
