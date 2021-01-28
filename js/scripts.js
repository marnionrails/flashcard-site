
$(document).ready(function() {
  $(".git").click(function() {
    $(".git.front").slideToggle();
    $(".git.back").slideToggle();
  });

  $(".help").click(function() {
    $(".help.front").slideToggle();
    $(".help.back").slideToggle();
  });

  $(".status").click(function() {
    $(".status.front").slideToggle();
    $(".status.back").slideToggle();
  });

  $(".reset").click(function() {
    $(".reset.front").slideToggle();
    $(".reset.back").slideToggle();
  });

  $(".amend").click(function() {
    $(".amend.front").slideToggle();
    $(".amend.back").slideToggle();
  });

  $(".name").click(function() {
    $(".name.front").slideToggle();
    $(".name.back").slideToggle();
  });

  $(".email").click(function() {
    $(".email.front").slideToggle();
    $(".email.back").slideToggle();
  });
});