import { useContext } from "react";
import { ResizeContext } from "../../../utils/context/ResizeContext";

import ButtonLink from "../../Reusable/ButtonLink";

function HomeFirstSection() {
  const { isDesktopWidth } = useContext(ResizeContext);
  return (
    <section id="homeFirstSection">
      <section id="textHomeFirstSection">
        <h1>Apprenez tout ce que vous désirez</h1>
        <p>
          Road To Success est une plateforme dédiée à l'e-learning. Sur cette
          plateforme, vous pouvez étudier des sujets divers et variés, comme les
          mathématiques, les langues, ou encore l'informatique. Cliquez sur le
          bouton ci-dessous pour accéder aux différents cours.
        </p>
        <ButtonLink>Accéder aux cours</ButtonLink>
      </section>
      {isDesktopWidth && (
        <section id="imageHomeFirstSection">
          <img
            alt="Illustration avec des personnes tenant un trophée géant"
            title="Illustration de la page d'accueil"
            src="./assets/images/other_images/home_image.png"
          />
        </section>
      )}
    </section>
  );
}

export default HomeFirstSection;
