import $ from "jquery";
import ModuleTest from "./modules/ModuleTest";
import SubmenuList from "./modules/SubmenuList";
import Collapsible from "./modules/Collapsible";
import ProductMobileNav from "./modules/ProductMobileNav";
import PagesNav from "./modules/PagesNav";
import PagesMobileNav from "./modules/PagesMobileNav";
import DonationStatementAjaxCart from "./modules/DonationStatementAjaxCart";
import DonationStatementAjaxCartProduct from "./modules/DonationStatementAjaxCartProduct";
import DonationStatementAjaxCartTotal from "./modules/DonationStatementAjaxCartTotal";
import DonationsBar from "./modules/DonationsBar";
import AccountDonationsTotal from "./modules/AccountDonationsTotal";
import DonationStatementProduct from "./modules/DonationStatementProduct";
import MobileNavToggle from "./modules/MobileNavToggle";

$(document).ready(function () {
  $(".js-submenu-list").each((index, element) => {
    new SubmenuList(element);
  });
  $(".js-collapse").each((index, element) => {
    new Collapsible(element);
  });
  $(".js-product-mobile-nav").each((index, element) => {
    new ProductMobileNav(element);
  });
  $(".js-pages-nav").each((index, element) => {
    new PagesNav(element);
  });
  $(".js-pages-mobile-nav").each((index, element) => {
    new PagesMobileNav(element);
  });
  $(".js-donation-statement-ajaxcart").each((index, element) => {
    new DonationStatementAjaxCart(element);
  });
  $(".js-donation-statement-ajaxcart__product").each((index, element) => {
    new DonationStatementAjaxCartProduct(element);
  });
  $(".js-donation-statement-ajaxcart__total").each((index, element) => {
    new DonationStatementAjaxCartTotal(element);
  });
  $(".js-donations-bar").each((index, element) => {
    new DonationsBar(element);
  });
  $(".js-account-donations-total").each((index, element) => {
    new AccountDonationsTotal(element);
  });
  $(".js-product-donation").each((index, element) => {
    new DonationStatementProduct(element);
  });
  $(".mobile-nav__toggle").each((index, element) => {
    new MobileNavToggle(element);
  });
});
