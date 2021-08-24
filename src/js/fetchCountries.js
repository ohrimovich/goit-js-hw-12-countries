
export default function fetchCountries(searchQuery) {

return fetch(`https://restcountries.eu/rest/v2/name/${searchQuery}`)
    .then(response => {
            if (!response.ok) {
              throw response;
            }
          return  response.json()
    })
      
}
    
