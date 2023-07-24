function DashboardTableCourses() {
  const deleteIconLink = "./assets/images/icone_images/trash.png";
  return (
    <table id="dashboardTableCourses">
      <thead>
        <td>Cours</td>
        <td>Delete</td>
      </thead>
      <tbody>
        <tr>
          <td>Test</td>
          <td>
            <img
              className="deleteButton"
              src="./../assets/images/icone_images/trash.png"
              alt="Supprimer l'entrée"
              title="Supprimer l'entrée"
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default DashboardTableCourses;
