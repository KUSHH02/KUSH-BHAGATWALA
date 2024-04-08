$(".fa-bars-staggered").click(function () {
  $("aside").toggleClass("w-70");
  $(".grid").toggleClass("mr60");
  $(".content").toggleClass("mr60");
  $(".dash_span").toggleClass("d-none");
  $(".apps_span").toggleClass("d-none");
  $(".chart_span").toggleClass("d-none");
  $(".bootstrap_span").toggleClass("d-none");
  $(".wid_span").toggleClass("d-none");
  $(".form_span").toggleClass("d-none");
  $(".table_span").toggleClass("d-none");
  $(".page_span").toggleClass("d-none");
  $(".fa-chevron-down").toggleClass("d-none");
  $(".brand-title").toggleClass("d-none");
  $(".copyright").toggleClass("d-none");
  // $(".fa-bars-staggered").css("position", "fixed");
});

// admin dropdown
$(".admin").click(function () {
  $(".admin_dropdown").slideToggle(500);
});
// lang dropdown
$(".lang").click(function () {
  $(".lang_dropdown").slideToggle(500);
});

// dropdown
$(".dash").click(function () {
  $(".dropdown").slideToggle(500);
});
// apps
$(".apps").click(function () {
  $(".dropdown_apps").slideToggle(500);
});
$(".email").click(function () {
  $(".dropdown_apps_emails").slideToggle(500);
});
// charts
$(".Chart").click(function () {
  $(".dropdown_charts").slideToggle(500);
});
// bootstarp
$(".bootstarp").click(function () {
  $(".dropdown_bootstrap").slideToggle(500);
});
// form
$(".form").click(function () {
  $(".dropdown_form").slideToggle(500);
});
// table
$(".table").click(function () {
  $(".dropdown_table").slideToggle(500);
});
// pages
$(".page").click(function () {
  $(".dropdown_pages").slideToggle(500);
});
$(".errors").click(function () {
  $(".dropdown_pages_errors").slideToggle(500);
});


// school finace dropdown

$('.fa-ellipsis-vertical').click(function(){
  $('.sp_dropdown').slideToggle(500);
});
$('.fa-arrow-down').click(function(){
  $('.sf_dropdown').slideToggle(500);
});
$('.fa-filter').click(function(){
  $('.sc_dropdown').slideToggle(500);
});
$('.fa-caret-down').click(function(){
  $('.upl_dropdown').slideToggle(500);
});


// heading cal
$('.heading_cal').click(function(){
  $('.heading_dropdown').slideToggle(500);
});
