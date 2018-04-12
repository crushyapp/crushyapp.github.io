import $ from 'jquery';
import './style.scss';

$('#main').html('Here we go!');

let i = 1;
setInterval(() => {
  $('#main').html(`You've been on this page for ${i} seconds`);
  i += 1;
}, 1000);
