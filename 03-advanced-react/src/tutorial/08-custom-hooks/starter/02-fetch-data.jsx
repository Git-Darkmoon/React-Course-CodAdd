import useFetch from "./useFetch"

const API_URL = "https://api.github.com/users/QuincyLarson"

const FetchData = () => {
  const { data: user, isLoading, isError } = useFetch(API_URL)

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>There was an error...</h2>
  }

  const { avatar_url, name, company, bio } = user

  return (
    <div>
      <img
        style={{ width: "6.25rem", borderRadius: "1.6rem" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
}
export default FetchData
