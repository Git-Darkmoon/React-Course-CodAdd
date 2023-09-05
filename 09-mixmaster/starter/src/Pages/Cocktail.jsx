import axios from "axios"
import { Link, Navigate, useLoaderData } from "react-router-dom"
import CocktailDiv from "../assets/wrappers/CocktailPage"
import { useQuery } from "@tanstack/react-query"

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const singleCocktailQuery = (id) => {
  return {
    queryKey: ["cocktail", id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`)
      return data
    },
  }
}

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params

    await queryClient.ensureQueryData(singleCocktailQuery(id))

    return { id }
  }

function Cocktail() {
  const { id } = useLoaderData()

  // if (!data) return <h2>Something went wrong...</h2>
  const { data } = useQuery(singleCocktailQuery(id))
  if (!data) return <Navigate to={"/"} />

  const singleDrink = data.drinks[0]
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink

  // Object.keys will return an array with the keys
  // of the object passed as parameter.

  const validIngredients = Object.keys(singleDrink).filter((eachKey) => {
    return eachKey.startsWith("strIngredient") && singleDrink[eachKey] !== null
  })
  // console.log(validIngredients)

  const validIngredientValues = validIngredients.map(
    (eachKey) => singleDrink[eachKey]
  )

  // console.log(validIngredientValues)

  return (
    <CocktailDiv>
      <header>
        <Link to={"/"}>back home</Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">ingredients:</span>
            {validIngredientValues.join(", ")}
          </p>
          <p>
            <span className="drink-data">instructions:</span>
            {instructions}
          </p>
        </div>
      </div>
    </CocktailDiv>
  )
}
export default Cocktail
