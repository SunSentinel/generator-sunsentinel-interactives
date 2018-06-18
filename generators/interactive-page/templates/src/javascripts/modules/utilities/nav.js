export default function doNavigation() {
  $(function() {
    var menuVisible = false;
    $(".nav-bars").click(function() {
      if (menuVisible) {
        $('.nav-root').css({
          'display': 'none'
        });
        menuVisible = false;
        return;
      }
      $(".nav-root").css({
        'display': 'block'
      });
      menuVisible = true;
    });
    $(" .nav-root").click(function() {
      $(".nav-root").css({
        'display': 'none'
      });
      menuVisible = false;
    });
  });

  $(window).on('resize', function(event) {

    if (navigator.userAgent.indexOf('Safari') != -1 || navigator.userAgent.indexOf('Firefox') != -1) {
      var windowWidth = $(window).width();
    } else {
      var windowWidth = $(window).width() + 15;
    }
    if (windowWidth >= 1000) {
      var menuVisible = true;
      $('.nav-list').css({
        'display': 'block'
      });
      $("#topper, .project, .nav-list").click(function() {
        $(".nav-list").css({
          'display': 'inline-block'
        });
        menuVisible = false;
      });
      return;

    } else if (windowWidth < 1000) {


      var menuVisible = false;
      $('.nav-list').css({
        'display': 'none'
      });
      $('.bottom-nav .nav-list').css({
        'display': 'block'
      });
      $(".nav-label").click(function() {
        if (menuVisible) {
          $('.nav-list').css({
            'display': 'none'
          });
          $('.bottom-nav .nav-list').css({
        'display': 'block'
      });
          menuVisible = false;
          return;
        }
        $(".nav-list").css({
          'display': 'block'
        });
        menuVisible = true;
        if (navigator.userAgent.indexOf('Firefox') != -1) {
          $('body').trigger('click');
        }
      });
      $("#topper, .project, .nav-list").click(function() {
        $(".nav-list").css({
          'display': 'none'
        });
        $('.bottom-nav .nav-list').css({
        'display': 'block'
      });
        menuVisible = false;
      });
    }
  }).resize();
  $(window).scroll(function(){
    if($(window).scrollTop()+ $(window).height() == $(document).height()){
      $(".bottom-nav .nav-list").css({
        'display':'none'
      })
    }else{
      $(".bottom-nav .nav-list").css({
        'display':'block'
      })
    }
  })

};

export { doNavigation };