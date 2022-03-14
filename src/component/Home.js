export default function Home(props) {
  return (
    <div id="home">
      <img src={props.image} alt="hero-image" />
      <div>
        <h1>{props.headingText}</h1>
        <p>{props.paragraph}</p>
        <button className="cta-button">
          shop now
          <img src="/images/icon-arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
}
