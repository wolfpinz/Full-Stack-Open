import axios from "axios"
import { useEffect, useMemo, useState } from "react"

function App

() {
  const [searchInput, setSearchInput] = useState("")
  const [countries, setCountries] = useState([])
  // const [expandedCountry, setExpandedCountry] = useState([])
  useEffect(() => {
    axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(res => {
      console.log(res.data)
      setCountries(res.data)
    })
  }, [])
  // console.log(countries)

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value)
  }

  // const filteredCountries = useMemo(() => {
  //   !searchInput
  //     ? []
  //     : countries.filter(c => c.name.common.includes(searchInput))
  //   }, [countries, searchInput])
  // useEffect(() => {
  //   if (searchInput) {
  //     setCountries(countries.filter(c => c.name.common.includes(searchInput)))
  //   }
  // }, [searchInput, countries])
  const filteredCountries =
    !searchInput
      ? []
      : countries.filter(c => c.name.common.includes(searchInput))
  console.log(filteredCountries)


  // const getCountryInfo = (country) =>
  //   if (filteredCountries.length === 1)
  //     axios
  //       .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${filteredCountries[0].name.common}`)
  //       .then(res => setExpandedCountry(res.data))


  // console.log(expandedCountry[0])
  return (
    <>
      find countries: <input value={searchInput} onChange={handleSearchInput} />
      {filteredCountries > 1 && <h2>countries</h2>}
      {filteredCountries.length > 10
        ? <div>Please be more specific</div>
        : filteredCountries.map((country) => {
        return filteredCountries.length > 1 ? (
          <div key={country.name.common}>
            <span>{country.name.common}</span>
            <button>show</button>
          </div>
          ) : (
            <div>
              <h1>{country.name.common}</h1>
              <p>capitol: </p>
              <p>area: area</p>
              <h3>languages:</h3>
              <ul>
                {Object.values(country.languages).map((l) => {
                  return (<li key={l}>{l}</li>)
                })}
              </ul>
              <img src={country.flags.png} />
            </div>
          )
      })}
    </>
  )
}

export default App
