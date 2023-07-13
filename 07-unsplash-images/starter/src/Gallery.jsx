import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const url =
  "https://api.unsplash.com/search/photos?client_id=ZFzIGxfyqS_e5XhOfRfwH_due8FTcNI0i3MzCGwpUgA&page=1&query=luxury"

function Gallery() {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url)
      return result.data
    },
  })

  if (response.isLoading) {
    return (
      <section className="image-container">
        <h4>Loading...</h4>
      </section>
    )
  }
  if (response.isError) {
    return (
      <section className="image-container">
        <h4>There was an error...</h4>
      </section>
    )
  }

  const results = response.data.results

  if (results.length < 1) {
    return (
      <section className="image-container">
        <h4>No results found...</h4>
      </section>
    )
  }

  return (
    <section className="image-container">
      {results.map((item) => {
        const url = item?.urls?.regular

        return (
          <img
            key={item.id}
            src={url}
            alt={item.alt_description}
            className="img"
            loading="lazy"
          />
        )
      })}
    </section>
  )
}

export default Gallery
