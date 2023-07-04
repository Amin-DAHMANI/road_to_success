import { Link } from "react-router-dom";

function ButtonLink(props) {
  return (
    <Link className="buttonLink" to="/cours">
      {props.children}
    </Link>
  );
}

export default ButtonLink;
