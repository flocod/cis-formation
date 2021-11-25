// Toggle language button

$(document).ready(function () {
  $(".lang").bind("click", function () {
    $(".lang_select").toggle();
  });
  $(".lang_select").bind("click", function () {
    temp_lang = $(".lang_select").text();
    if (temp_lang == "EN") {
      $("#toggle_lang_box__text").text("EN");
      $(".lang_select").text("FR");
      $(".lang .EN").fadeIn();
      $(".lang .FR").fadeOut();
    } else {
      $("#toggle_lang_box__text").text("FR");
      $(".lang_select").text("EN");
      $(".lang .EN").fadeOut();
      $(".lang .FR").fadeIn();
    }
  });
});

// select actual page
$(".nav li").bind("click", function () {
  $(".nav li .nav_item .text").removeClass("active");
  $(this).find(".nav_item .text").addClass("active");
});

// margin top main
$(document).ready(function () {
  $(document).ready(function () {
    $(".main").css("margin-top", $(".header1").innerHeight() + "px");
  });

  carouselHeight = $(window).innerHeight() - $(".header1").innerHeight();

  // height carousel
  $(".carousel").css("height", carouselHeight + "px");
});

$(document).ready(function () {
  formation_owl = $(".formation_owl");
  formation_owl.owlCarousel({
    items: 1,
    loop: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
      682: {
        items: 2,
      },
      1001: {
        items: 3,
      },
      1264: {
        items: 4,
      },
    },
  });
});
$(document).ready(function () {
  owl_partenaire = $(".owl_partenaire");
  owl_partenaire.owlCarousel({
    center: true,
    loop: true,
    nav: false,
    autoplay: true,
    margin: 10,
    responsive: {
      531: {
        items: 2,
      },

      600: {
        items: 3,
      },

      615: {
        items: 4,
      },
    },
  });
});

// carousel

carousel_state = 0;
i = carousel_state;

function carousel_right() {
  images = $(".images img");
  img1 = $(".img1");
  img2 = $(".img2");
  img3 = $(".img3");
  img4 = $(".img4");

  img = Array(img1, img2, img3, img4);

  while (i < 4) {
    images.removeClass("active");
    img[i].addClass("active");
    console.log("i:" + i);
    i++;
    if (i == 4) {
      i = 0;
    }
    carousel_state = i;
    break;
  }
}

function carousel_left() {
  images = $(".images img");
  img1 = $(".img1");
  img2 = $(".img2");
  img3 = $(".img3");
  img4 = $(".img4");

  img = Array(img1, img2, img3, img4);

  if (carousel_state == 3) {
    images.removeClass("active");
    img[2].addClass("active");
    carousel_state = 2;
  } else if (carousel_state == 2) {
    images.removeClass("active");
    img[1].addClass("active");
    carousel_state = 1;
  } else if (carousel_state == 1) {
    images.removeClass("active");
    img[0].addClass("active");
    carousel_state = 0;
  } else if (carousel_state == 0) {
    images.removeClass("active");
    img[3].addClass("active");
    carousel_state = 3;
  }
}

$(document).ready(function () {
  $(".btn_carousel_right").bind("click", function () {
    carousel_right();
  });
  $(".btn_carousel_left").bind("click", function () {
    carousel_left();
  });
});

setInterval(carousel_right, 8000);

// select actual page
$(".contain_item_menu .menu_item").bind("click", function () {
  $(".contain_item_menu .menu_item").removeClass("active");
  $(this).addClass("active");
});

$(document).ready(function () {
  owl_groupformation = $(".owl_groupformation");
  owl_groupformation.owlCarousel({
    items: 1,
    loop: true,
    center: true,
    nav: false,
    autoplay: true,
    margin: 0,
    responsive: {
      642: {
        items: 2,
        center: true,
        margin: 5,
      },
      673: {
        items: 2,
        center: true,
        margin: 5,
      },
      1063: {
        items: 3,
      },
      1370: {
        items: 4,
      },
    },
  });

  $(".btn_owl_groupformation_left").click(function () {
    owl_groupformation.trigger("prev.owl.carousel");
  });

  $(".btn_owl_groupformation_right").click(function () {
    owl_groupformation.trigger("next.owl.carousel");
  });

  owl_groupformation.on("changed.owl.carousel", function (event) {
    var pages = event.page.count; // Number of pages
    var page = event.page.index;
    $(".owl_groupformation_state_control .total").text(pages);
    $(".owl_groupformation_state_control .value").text(page + 1);

    // $(".formation_item").removeClass('active_formation');
    // $(".formation_item:nth-child(1)").addClass('active_formation');
  });
});

$(".btn_owl_groupformation_right").trigger("click");

//  cacher et montrer l'element after du side menu au scroll.......
let progress_state;
$(document).ready(function () {
  totalheight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    progress = (window.pageYOffset / totalheight) * 100;
    progress = Math.round(Number(progress));
    progress = progress + "%";
    header2 = $(".header2");

    if (progress_state < progress) {
      header2.addClass("go");
      console.log("scroll to bottom");
    } else if (window.pageYOffset == 0) {
      header2.removeClass("go");
    }
    progress_state = progress;
  };
});

// /////
// GALERIE MEDIA SCRIPTS
$(document).ready(function () {
  $(".action_viewer").on("click", function () {
    $(this).toggleClass("action_viewer_pause");
  });
});

state_gal = 0;
screen_img = $(".screen_img");
screen_img1 = $(".screen_img1");
screen_img2 = $(".screen_img2");
screen_img3 = $(".screen_img3");
screen_img4 = $(".screen_img4");

screen_img.on("click", function () {
  $(".view_screen img").attr("src", $(this).attr("src"));

  setTimeout(function () {
    $(".view_screen").toggleClass("active_view_screen");
  }, 200);
});

$(".view_screen").on("click", function () {
  $(".view_screen").toggleClass("active_view_screen");
});

function next_gal() {
  if (state_gal == 0) {
    screen_img.removeClass("active");
    screen_img1.addClass("active");
    state_gal = 1;
  } else if (state_gal == 1) {
    screen_img.removeClass("active");
    screen_img2.addClass("active");
    state_gal = 2;
  } else if (state_gal == 2) {
    screen_img.removeClass("active");
    screen_img3.addClass("active");
    state_gal = 3;
  } else if (state_gal == 3) {
    screen_img.removeClass("active");
    screen_img4.addClass("active");
    state_gal = 0;
  }
}

$(".btn_screen_img1").on("click", function () {
  screen_img.removeClass("active");
  screen_img1.addClass("active");
  state_gal = 1;
});
$(".btn_screen_img2").on("click", function () {
  screen_img.removeClass("active");
  screen_img2.addClass("active");
  state_gal = 2;
});
$(".btn_screen_img3").on("click", function () {
  screen_img.removeClass("active");
  screen_img3.addClass("active");
  state_gal = 3;
});
$(".btn_screen_img4").on("click", function () {
  screen_img.removeClass("active");
  screen_img4.addClass("active");
  state_gal = 0;
});

function prev_gal() {
  u = state_gal;

  img = Array(screen_img1, screen_img2, screen_img3, screen_img4);

  while (u < 4) {
    screen_img.removeClass("active");
    img[u].addClass("active");
    console.log("u:" + u);
    u++;
    if (u == 4) {
      u = 0;
    }
    state_gal = u;
    break;
  }
}

$(document).ready(function () {
  $(".btn_viewer_next").on("click", function () {
    next_gal();
  });
  $(".btn_viewer_prev").on("click", function () {
    prev_gal();
  });

  let slide_gal;
  let play = false;
  $(".action_viewer").on("click", function () {
    if (!play) {
      slide_gal = setInterval(next_gal, 1000);
      play = true;
    } else {
      clearInterval(slide_gal);
      play = false;
    }
  });
});

// ///////
//comments scripts

$(document).ready(function () {
  state_comment = 0;
  view_testimonie = $("#main_view_testimonie");
  comments = $(".comment");
  comment1 = $(".comment1");
  comment2 = $(".comment2");
  comment3 = $(".comment3");
  comment4 = $(".comment4");
  comment5 = $(".comment5");
  comment6 = $(".comment6");

  item_testimoni = $(".item_testimoni");

  item_testimoni1 = $(".item_testimoni1");
  item_testimoni2 = $(".item_testimoni2");
  item_testimoni3 = $(".item_testimoni3");
  item_testimoni4 = $(".item_testimoni4");
  item_testimoni5 = $(".item_testimoni5");
  item_testimoni6 = $(".item_testimoni6");

  function next_comment() {
    if (state_comment == 0) {
      comments.removeClass("active");
      comment1.addClass("active");
      view_testimonie.toggleClass("animate");

      temp_img_attr = item_testimoni1.find("img").attr("src");
      view_testimonie.attr("src", temp_img_attr);
      state_comment = 1;
    } else if (state_comment == 1) {
      comments.removeClass("active");
      comment2.addClass("active");
      view_testimonie.toggleClass("animate");

      temp_img_attr = item_testimoni2.find("img").attr("src");
      view_testimonie.attr("src", temp_img_attr);

      state_comment = 2;
    } else if (state_comment == 2) {
      comments.removeClass("active");
      comment3.addClass("active");
      view_testimonie.toggleClass("animate");

      temp_img_attr = item_testimoni3.find("img").attr("src");
      view_testimonie.attr("src", temp_img_attr);

      state_comment = 3;
    } else if (state_comment == 3) {
      comments.removeClass("active");
      comment4.addClass("active");
      view_testimonie.toggleClass("animate");

      temp_img_attr = item_testimoni4.find("img").attr("src");
      view_testimonie.attr("src", temp_img_attr);

      state_comment = 4;
    } else if (state_comment == 4) {
      comments.removeClass("active");
      comment5.addClass("active");
      view_testimonie.toggleClass("animate");

      temp_img_attr = item_testimoni5.find("img").attr("src");
      view_testimonie.attr("src", temp_img_attr);

      state_comment = 5;
    } else if (state_comment == 5) {
      comments.removeClass("active");
      comment6.addClass("active");
      view_testimonie.toggleClass("animate");

      temp_img_attr = item_testimoni6.find("img").attr("src");
      view_testimonie.attr("src", temp_img_attr);

      state_comment = 0;
    }
  }

  $(".item_testimoni1").on("click", function () {
    comments.removeClass("active");
    comment1.addClass("active");
    view_testimonie.toggleClass("animate");

    temp_img_attr = item_testimoni1.find("img").attr("src");
    view_testimonie.attr("src", temp_img_attr);
    state_comment = 1;
  });
  $(".item_testimoni2").on("click", function () {
    comments.removeClass("active");
    comment2.addClass("active");
    view_testimonie.toggleClass("animate");

    temp_img_attr = item_testimoni2.find("img").attr("src");
    view_testimonie.attr("src", temp_img_attr);
    state_comment = 2;
  });
  $(".item_testimoni3").on("click", function () {
    comments.removeClass("active");
    comment3.addClass("active");
    view_testimonie.toggleClass("animate");

    temp_img_attr = item_testimoni3.find("img").attr("src");
    view_testimonie.attr("src", temp_img_attr);
    state_comment = 3;
  });
  $(".item_testimoni4").on("click", function () {
    comments.removeClass("active");
    comment4.addClass("active");
    view_testimonie.toggleClass("animate");

    temp_img_attr = item_testimoni4.find("img").attr("src");
    view_testimonie.attr("src", temp_img_attr);
    state_comment = 4;
  });
  $(".item_testimoni5").on("click", function () {
    comments.removeClass("active");
    comment5.addClass("active");
    view_testimonie.toggleClass("animate");

    temp_img_attr = item_testimoni5.find("img").attr("src");
    view_testimonie.attr("src", temp_img_attr);
    state_comment = 5;
  });
  $(".item_testimoni6").on("click", function () {
    comments.removeClass("active");
    comment6.addClass("active");
    view_testimonie.toggleClass("animate");

    temp_img_attr = item_testimoni6.find("img").attr("src");
    view_testimonie.attr("src", temp_img_attr);
    state_comment = 6;
  });

  setInterval(next_comment, 5000);
});

// ////
// MENU SCRIPTS

$(".btn_menu").on("click", function () {
  $(".menu_mobile").toggleClass("off_social_menu");
});
