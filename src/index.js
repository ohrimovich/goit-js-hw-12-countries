import { error, defaultModules } from '../node_modules/@pnotify/core/dist/PNotify.js';
fetch('https://restcountries.eu/rest/v2/name/U')
    .then(responce => responce.json())
    .then(countries => {
        if (countries.length > 10) {
            const er = error;
            return er({
  text: 'To many matches found'
})
        }
        else {
            
            return console.log(countries);
        }
    }).catch(error => console.log(error))