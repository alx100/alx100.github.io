const Scroll = () => {
  $(".scroll-btn").on("click", function () {
    $("html, body").animate({ scrollTop: $(".header").height() + 5 }, "slow");
  });
};

export default Scroll;