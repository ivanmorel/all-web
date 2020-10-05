import $ from 'jquery';
import ModuleTest from './modules/ModuleTest';
import SubmenuList from './modules/SubmenuList';
import Collapsible from './modules/Collapsible';
import ProductMobileNav from './modules/ProductMobileNav';
import PagesNav from './modules/PagesNav';
import PagesMobileNav from './modules/PagesMobileNav';

$(document).ready(function() {
  $('.js-submenu-list').each((index, element) => {
    new SubmenuList(element);
  });
  $('.js-collapse').each((index, element) => {
    new Collapsible(element);
  });
  $('.js-product-mobile-nav').each((index, element) => {
    new ProductMobileNav(element);
  });
  $('.js-pages-nav').each((index, element) => {
    new PagesNav(element);
  });
  $('.js-pages-mobile-nav').each((index, element) => {
    new PagesMobileNav(element);
  });
})