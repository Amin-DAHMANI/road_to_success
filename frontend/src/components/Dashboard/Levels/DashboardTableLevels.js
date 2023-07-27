import ShowIcon from "./../../Reusable/ShowIcon";
import UpdateIcon from "./../../Reusable/UpdateIcon";
import DeleteIcon from "./../../Reusable/DeleteIcon";

function DashboardTableLevels() {
  return (
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
            <ShowIcon />
            <UpdateIcon />
            <DeleteIcon />
          </td>
        </tr>
        <tr className="pairLine">
          <td>
            <input type="checkbox" />
          </td>
          <td>Intermédiaire</td>
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

export default DashboardTableLevels;
