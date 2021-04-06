import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import MovieService from './movie-service.js';

function clearFields() {
  $('.movie').val("");
  $('.showErrors').text("");
}

function getElements(response) {
  if (response.results.length) {
    response.results.forEach(movie => {
      $('.reviews-area').prepend(`<div class='result-block'>
        <span>Title: ${movie.display_title}</span>
        <span>Rating: ${movie.mpaa_rating}</span>
        <span>Critics: ${movie.critics_pick}</span>
        <span>Headline: ${movie.headline}</span>
        <span>Summary: ${movie.summary_short}</span>
        <span><a href=${movie.link.url}>${movie.link.suggested_link_text}</a></span> 
      </div`);
    });
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(name) {
  const response = await MovieService.getMovie(name);
  getElements(response);
}

$(document).ready(function() {
  $('#movieName').click(function() {
    let name = $('#movieName').val();
    clearFields();
    makeApiCall(name);
  });
});