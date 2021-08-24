import  fetchCountries  from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { noticeError,renderCountriesList, resetMarkup, renderCountry, noticeInputError } from './js/renderCountriesData';

const input = document.querySelector('input');

input.addEventListener('input', debounce(function () {
    fetchCountries(input.value)
        .then(responce => {
            if (responce.length > 10) {
                resetMarkup();
                noticeError();
            } else if (responce.length >= 2 && responce.length <= 10) {
                renderCountriesList(responce);
            } else {
                renderCountry(responce);
            }
        })
        .catch(() => {
            noticeInputError();
            resetMarkup();
        });
    
}, 300));


