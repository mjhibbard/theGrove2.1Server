// $(document).on('click', function(){
//     alert("connected");
// });

// $(document).ready(function(){
//     $('nav li ul').hide().removeClass('dropDown-content');
//     $('nav li').hover(
//         function () {
//             $('ul', this).stop().slideDown(500);
//         },
//         function () {
//             $('ul', this).stop().slideUp(300);
//         }
//     );
//     $('#header-bars-toggle').click(function() {
//         $('#jQ-header__nav-menu').toggle('.active');
//     });
// });

function initNav() {
  // makeNavToggler :: HTMLElement -> void -> void
  function makeNavToggler(wrap) {
    // toggleNav :: HTMLElement -> void
    function toggleNav(wrap) {
      if (wrap.classList.contains("nav-menu__screen--show")) {
        wrap.classList.remove("nav-menu__screen--show");
        document.body.classList.remove("body__no-scroll");
      } else {
        wrap.classList.add("nav-menu__screen--show");
        document.body.classList.add("body__no-scroll");
      }
    }

    return function() {
      toggleNav(wrap);
    };
  }

  var wrap = document.getElementById("nav__wrap");
  var toggles = makeNavToggler(wrap);

  var button = document.getElementById("nav-menu__toggle");
  button.addEventListener("click", toggles);

  var links = wrap.getElementsByClassName("nav__link");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", toggles);
  }
}
initNav();
