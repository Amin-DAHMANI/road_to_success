function DashboardTableAccounts() {
  const deleteIconLink = "./../assets/images/icone_images/delete.png";
  const updateIconLink = "./../assets/images/icone_images/update.png";
  return (
    <table id="dashboardTableAccounts">
      <thead>
        <tr>
          <td className="checkboxColumn">
            <input type="checkbox" />
          </td>
          <td className="tdAlignLeft">Catégorie</td>
          <td className="tdAlignLeft">Identifiant</td>
          <td className="tdAlignLeft">Mot de passe (crypté)</td>
          <td className="tdAlignLeft">Pseudo</td>
          <td className="tdAlignLeft">Email</td>
          <td className="tdAlignLeft">Photo de profil</td>
          <td className="tdAlignLeft">Biographie</td>
          <td className="updateColumn">Modifier</td>
          <td className="deleteColumn">Supprimer</td>
        </tr>
      </thead>
      <tbody>
        <tr className="impairLine">
          <td>
            <input type="checkbox" />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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

export default DashboardTableAccounts;
