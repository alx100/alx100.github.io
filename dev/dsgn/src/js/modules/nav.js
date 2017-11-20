const Nav = () => {
  let $hamburger = $(".hamburger");
  let $nav = $(".menu-nav");
  $hamburger.on("click", function() {
    $hamburger.toggleClass("is-active");
    $nav.toggleClass("nav-opened");
  });
};

export default Nav;