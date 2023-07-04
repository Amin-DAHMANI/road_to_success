import HomeCards from "./HomeCards";

function HomeCardSection() {
  const free = "./assets/images/other_images/coin-rainbow.png";
  const diversified = "./assets/images/other_images/list-rainbow.png";
  const progressive = "./assets/images/other_images/progress-rainbow.png";

  return (
    <section>
      <h2 id="titleHomeCardSection">
        Les avantages de la plateforme Road To Success
      </h2>
      <section id="homeCardSection">
        <HomeCards
          src={free}
          alt="Image représentant la gratuité des cours"
          title="Cours gratuits"
          children="Tous les cours sur la plateforme sont disponibles gratuitement"
        ></HomeCards>
        <HomeCards
          src={diversified}
          alt="Image représentant la diversité des cours"
          title="Cours variés"
          children="Le catalogue de cours sur la plateforme est très diversifié"
        ></HomeCards>
        <HomeCards
          src={progressive}
          alt="Image représentant le rythme progressif des cours"
          title="Rythme de cours progressif"
          children="Les cours de la plateforme sont adaptés à tous les niveaux et avancent progressivement"
        ></HomeCards>
      </section>
    </section>
  );
}

export default HomeCardSection;
