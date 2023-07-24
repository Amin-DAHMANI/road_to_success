function DashboardTableFields() {
  const deleteIconLink = "./../assets/images/icone_images/delete.png";
  const updateIconLink = "./../assets/images/icone_images/update.png";
  return (
    <table id="dashboardTableFields">
      <thead>
        <tr>
          <td className="checkboxColumn">
            <input type="checkbox" />
          </td>
          <td className="tdAlignLeft">Cours</td>
          <td className="updateColumn">Modifier</td>
          <td className="deleteColumn">Supprimer</td>
        </tr>
      </thead>
      <tbody>
        <tr className="impairLine">
          <td>
            <input type="checkbox" />
          </td>
          <td className="tdAlignLeft">Français</td>
          <td>
            {" "}
            <img
              className="updateButton"
              src={updateIconLink}
              alt="Modifier l'entrée"
              title="Modifier l'entrée"
            />
          </td>
          <td>
            <img
              className="deleteButton"
              src={deleteIconLink}
              alt="Supprimer l'entrée"
              title="Supprimer l'entrée"
            />
          </td>
        </tr>
        <tr className="pairLine">
          <td>
            <input type="checkbox" />
          </td>
          <td className="tdAlignLeft">Mathématiques</td>
          <td>
            {" "}
            <img
              className="updateButton"
              src={updateIconLink}
              alt="Modifier l'entrée"
              title="Modifier l'entrée"
            />
          </td>
          <td>
            <img
              className="deleteButton"
              src={deleteIconLink}
              alt="Supprimer l'entrée"
              title="Supprimer l'entrée"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DashboardTableFields;
