import Main from "../../Structure/Main/Main";

import HomeFirstSection from "./HomeFirstSection";
import HomeCardSection from "./HomeCardSection";

function Home() {
  return (
    <Main>
      <div className="page" id="home">
        <HomeFirstSection />
        <HomeCardSection />
      </div>
    </Main>
  );
}

export default Home;
