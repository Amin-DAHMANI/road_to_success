import Main from "../../Structure/Main/Main";

function NotFound() {
  return (
    <Main>
      <div className="page" id="notFoundSection">
        <h1>
          Error 404 Not Found - Le serveur n'a pas trouvé la page ou la
          ressource demandée.
        </h1>
      </div>
    </Main>
  );
}

export default NotFound;
