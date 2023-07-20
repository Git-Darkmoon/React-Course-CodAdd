import heroImg from "../assets/hero.svg"

function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby intelligentsia deserunt 90's shabby chic. Raclette esse
            palo santo consequat incididunt neutra ennui bespoke lorem
            single-origin coffee occaecat schlitz. Dolore meh narwhal, id beard
            shaman bruh plaid. Occaecat lyft ethical pop-up pok pok la croix.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
