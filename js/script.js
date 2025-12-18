// ハンバーガーメニュー
$(function () {
  $('.menu-trigger').click(function () {        //ハンバーガーボタン（.menu-trigger）をタップすると、
    $(this).toggleClass('active');              //タップしたハンバーガーボタン（.menu-trigger）に（.active）を追加・削除する。
    if ($(this).hasClass('active')) {           //もし、ハンバーガーボタン（.menu-trigger）に（.active）があれば、
      $('.g-navi').addClass('active');          //(.g-navi)にも（.active）を追加する。
    } else {                                    //それ以外の場合は、
      $('.g-navi').removeClass('active');       //(.g-navi)にある（.active）を削除する。
    }
  });
  $('.nav-wrapper ul li a').click(function () { //各メニューリンク（.nav-wrapper ul li a）をタップすると、
    $('.menu-trigger').removeClass('active');   //ハンバーガーボタン（.menu-trigger）にある（.active）を削除する。
    $('.g-navi').removeClass('active');         //(.g-navi)にある（.active）も削除する。
  });
});

// スライド
$(function () {
  function toggleChangeBtn() {
    var slideIndex = $('.staff-box').index($('.active'));
    $('.slide-button').show();
    if (slideIndex == 0) {
      $('.prev').hide();
    } else if (slideIndex == 2) {
      $('.next').hide();
    }
  }
  toggleChangeBtn();
  $('.next').click(function () {  // nextボタンを押したとき
    var $displaySlide = $('.active');  // 現在表示中のスライドを取得
    $displaySlide.removeClass('active box-design');  // そのスライドからactiveクラスを除いて表示されないようにする。
    $displaySlide.next().addClass('active box-design');  // 次のスライドにactiveクラスをつけ、表示させる。
    toggleChangeBtn();  // nextボタンを隠すか判断
  });
  $('.prev').click(function () {  // prevボタンを押したとき
    var $displaySlide = $('.active');  // 現在表示中のスライドを取得
    $displaySlide.removeClass('active box-design');  // そのスライドからactiveクラスを除いて表示されないようにする。
    $displaySlide.prev().addClass('active box-design');  // 前のスライドにactiveクラスをつけ、表示させる。
    toggleChangeBtn();  // prevボタンを隠すか判断
  });
});

// タブ切り替え
$(function () {
  var $filters = $('.filter [data-filter]'), // ①
    $boxes = $('.lineup-wrapper [data-category]'); // ②

  $filters.on('click', function (e) { // ③
    e.preventDefault(); // ③
    var $this = $(this); // ④
    $filters.removeClass('active'); // ⑤
    $this.addClass('active'); // ⑥

    var $filterTime = $this.attr('data-filter');

    if ($filterTime == 'ranking') {
      $boxes.fadeOut().promise().done(function () {
        $boxes.fadeIn();
      });
    } else {
      $boxes.fadeOut().promise().done(function () {
        $boxes.filter('[data-category = "' + $filterTime + '"]')
          .fadeIn();
      });
    }
  });
});
