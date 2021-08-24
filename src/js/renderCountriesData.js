import templateForListCountries from '../templates/templateForList.hbs';
import templateForCountry from '../templates/templateForCountry.hbs';
import { error, defaultModules } from '@pnotify/core/dist/PNotify';

const container = document.querySelector('.countries-list-js');

export function noticeError() {
    
    return error({
        text: 'To many matches found. Please enter more specific query!',
        sticker: false,
        delay: 2000
    })
 }
  
export function renderCountriesList(arr) {
 
    const markup = templateForListCountries(arr);

    container.innerHTML = markup;
}

export function resetMarkup() {
    container.innerHTML = '';
}

export function renderCountry(arr) {
     container.innerHTML = templateForCountry(arr)
}

export function noticeInputError() {
      return error({
        text: 'oops, wrong input value or no target country',
          sticker: false,
        delay: 2000
    })
}
