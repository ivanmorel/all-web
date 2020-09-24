import $ from 'jquery';
import ModuleTest from './modules/ModuleTest';

$(document).ready(function() {
  $('.js-test-module').each((index, element) => {
    new ModuleTest(element);
  });
})