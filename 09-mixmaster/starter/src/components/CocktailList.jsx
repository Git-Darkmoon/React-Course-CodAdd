import CocktailListDiv from "../assets/wrappers/CocktailList"
import CocktailCard from "../components/CocktailCard"

function CocktailList({ drinks }) {
  if (!drinks) {
    return <h4>No matching cocktails found...</h4>
  }

  const formattedDrink = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    }
  })

  return (
    <CocktailListDiv>
      {formattedDrink.map((item) => {
        return <CocktailCard key={item.id} {...item} />
      })}
    </CocktailListDiv>
  )
}
export default CocktailList
