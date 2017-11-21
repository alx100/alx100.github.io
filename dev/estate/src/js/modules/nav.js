const Nav = () => {
  $('.nav-opener').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('nav-opened');
  });
};

export default Nav;