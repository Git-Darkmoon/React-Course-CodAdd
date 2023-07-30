import { Link } from "react-router-dom"
import CocktailCardDiv from "../assets/wrappers/CocktailCard"

function CocktailCard({ image, name, id, info, glass }) {
  return (
    <CocktailCardDiv>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </CocktailCardDiv>
  )
}
export default CocktailCard
