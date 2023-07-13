function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = e.target.elements.search.value
  }

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="Cat"
          autoComplete="off"
          required
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}

export default SearchForm
