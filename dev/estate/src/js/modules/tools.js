const Tools = () => {

  $(function () {
    $('.app__links-title ').matchHeight();

    $('.item-content').matchHeight({
      byRow: false,
      property: 'min-height',
      target: null,
      remove: false
    });

    var hideChatOnScroll = {
      /**
      * Elements define
      */
      elementsInit: function () {
        this.footer = document.querySelector(".footer");
        if (!this.footer) return;
        this.footerPosition = this.footer.offsetTop;
        this.body = document.body;
        this.windowHeight = window.innerHeight;
        this.documentHeight = document.documentElement.scrollHeight;
      },

      /**
       * Calculating sizes of window and page
       */
      calcSizes: function () {
        var self = this;
        window.clearTimeout(timer);
        var timer = setTimeout(function () {
          self.footerPosition = self.footer.offsetTop;
          self.windowHeight = window.innerHeight;
          self.documentHeight = document.documentElement.scrollHeight;
        }, 400);

      },
      /**
      * Add or remove class on body
      */
      addRemoveClass: function (flag) {
        if (flag) {
          this.body.classList.add("hide-btn");
        }
        else {
          this.body.classList.remove("hide-btn");
        }
      },
      /**
      * Check offset of page while scrolling
      */
      checkOffset: function () {
        if (window.pageYOffset + this.windowHeight >= this.footerPosition) {
          this.addRemoveClass(true);
        }
        else {
          this.addRemoveClass(false);
        }
      },
      /**
      * Resize function
      */
      resize: function () {
        var self = this;

        window.addEventListener('resize', function () {
          self.calcSizes();
        });
      },

      /**
       * On scroll
       */
      scroll: function () {
        var self = this;
        document.addEventListener("scroll", function () {
          self.checkOffset();
          self.calcSizes();
        });
      },

      /**
       * Init
       */
      init: function () {
        this.elementsInit();
        this.scroll();
        this.resize();
      }
    };

    hideChatOnScroll.init();

  });

};

export default Tools;