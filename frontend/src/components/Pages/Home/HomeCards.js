function HomeCards(props) {
  return (
    <section className="homeCards">
      <img src={props.src} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.children}</p>
    </section>
  );
}

export default HomeCards;
