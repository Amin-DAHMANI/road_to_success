import { Link } from "react-router-dom";

function NavLink(props) {
  return (
    <Link className="navLink" to={props.path}>
      {props.children}
    </Link>
  );
}

export default NavLink;
