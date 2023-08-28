import { useContext } from "react";
import { ResizeContext } from "../../../utils/context/ResizeContext";

import ButtonLink from "../../Reusable/ButtonLink";

function HomeFirstSection() {
  const { isDesktopWidth } = useContext(ResizeContext);
  return (
    <section id="homeFirstSection">
      <section id="textHomeFirstSection">
        <h1>
          Road To Success : Accessible, Gratuit, Vaste, Facile, et Passionnant !
        </h1>
        <div id="homeFirstSectionParagraph">
          <ul>
            <li>
              Road To Success, c'est un projet dedié à l'enseignement et au
              développement personnel !
            </li>
            <li>
              Road To Success, c'est une plateforme en ligne où tu pourras
              apprendre à tout moment, de n'importe où tant que tu es connecté à
              internet, avec un même un mode hors-ligne !
            </li>
            <li>
              Road To Success, c'est un condensé de cours gratuits, sans devoir
              payer le moindre centime !
            </li>
            <li>
              Road To Success, c'est un catalogue de cours vaste, divers et
              varié, avec de nombreuses disciplines !
            </li>
            <li>
              Road To Success, c'est des enseignements adaptés à tous peu
              importe le niveau où l'age !
            </li>
            <li>
              Road To Success, c'est une tonne de cours tous aussi passionant
              les uns que les autres !
            </li>
          </ul>
          Convaincu ? Clique vite sur le bouton en-dessous pour accéder à tous
          les cours !
        </div>
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
