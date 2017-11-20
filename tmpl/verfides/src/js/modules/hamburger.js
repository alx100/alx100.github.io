const Hamburger = () => {
  let $hamburger = $(".hamburger");
  $hamburger.on("click", function () {
    $hamburger.toggleClass("is-active");
    $(".main-nav__list").toggleClass("nav-hidden");
  });
};

export default Hamburger;
