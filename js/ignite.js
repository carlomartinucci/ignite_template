$(function () {
  $('.progress').hide();
  setBackground(1, "#preload");
});

function setBackground(slideNumber, of) {
  if (of == null) {of = "#content";}
  $(of).css("backgroundImage", "url(img/"+slideNumber+".jpg)")
}

function startIgnite() {
  $('.progress').show();
  $('#actual-slide').html("" + 1 );
  setBackground(1);
  setBackground(2, "#preload");
  content = $("#"+1).html();
  $("#change-content").html(content);
  progressBar(15000, 200);
  $('#content').css("cursor", "none");
}

function endIgnite() {
  $('.progress').hide();
  // inserire il proprio nome al posto di #IL TUO NOME#
  $('#actual-slide').html('<span style="color: white">#IL TUO NOME#</span> <i id="flame" class="fa fa-fire" style="color: rgba(255,83,13,0.8); transition: color 0.5s ease"></i>');
  alternateFlame1();
  $('#actual-slide').css('padding', "1vh 2vh");
  setBackground(21);
  content = $("#tnx").html();
  $('#content').css("background-color", setColor('asd'));
  $("#content").html(content);
  setTimeout(function(){
    $('#content').animate({
        opacity: 0,
      }, 5000, function() {
        $('#content').css("cursor", "auto");
      });
  }, 2000)
}

function progressBar(T, t) {
  var actualSlide = 1;
  var percentage = 0;
  var color = 0;
  var delta_percentage = t/T;
  // Un po' fatto male, ma funziona
  function advanceProgressBar(dp){
    setTimeout(function(){
      percentage += dp;
      var newVal = 3.10 * percentage * $(window).width() / 10;
      $('.progress-bar').css("width", newVal);
      //$('.progress-bar').html("" + Math.round(percentage*T/1000) );
      if (percentage>=0.98){
        actualSlide += 1;
        $('#actual-slide').html("" + actualSlide );
        setBackground(actualSlide);
        setBackground(actualSlide+1, "#preload");
        content = $("#"+actualSlide).html();
        $("#change-content").html(content);
        $('#content p').css("font-size", "10vh");
        $('#content p').css("padding", "0 3vh");
        animateSlide(actualSlide);
        percentage = 0;
        color += 50505;
        console.log(color)
        $('.progress-bar').css("background-color", setColor(actualSlide));
      }
      if (actualSlide <= 20 ) {
        advanceProgressBar(dp);
      }
      else {
        endIgnite();
      }
    }, t)
  }
  advanceProgressBar(delta_percentage);
}


// per impostare il colore della slide (barra e numero), come negli esempi commentati
function setColor(slideNumber) {
  var color = ""
  switch(slideNumber) {
    case 2:
      // color = "rgba(255,0,0,0.7)"
      break;
    case 3:
      // color = "rgba(255, 115, 132,0.7)"
      break;
    case 5:
      // color = "rgba(255,0,0,0.7)"
      break;
    case 6:
      // color = "rgba(10,10,123,0.7)"
      break
    case 7:
      // color = "rgba(10,123,10,0.7)"
      break;
    case 11:
      // color = "rgba(20,133,133,0.7)"
      break;
    case 13:
      // color = "rgba(255,255,10,0.7)"
      break;
    case 14:
      // color = "rgba(255,255,10,0.7)"
      break;
    case 15:
      // color = "rgba(255,255,10,0.7)"
      break;
    case 18:
      // color = "rgba(123,10,123,0.7)"
      break;
    case 20:
      // color = "rgba(255,255,10,0.7)"
      break;
    default:
      color = "#333"
  }
  return color
}

// per aggiungere animazioni alle slides, come negli esempi commentati
function animateSlide(slideNumber) {
  switch(slideNumber) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      // setTimeout(function(){
      //     $('.change-color').css("color", "rgba(123,10,123,0.7)")
      //     $('.progress-bar').css("background-color", "rgba(123,10,123,0.7)")
      //   }, 10000);
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
      // setTimeout(function(){
      //   $('.sitetree').append("<br><i class='fa fa-sitemap'></i><i class='fa fa-sitemap'></i>")
      //   setTimeout(function(){
      //     $('.sitetree').append("<br><i class='fa fa-sitemap'></i><i class='fa fa-sitemap'></i><i class='fa fa-sitemap'></i><i class='fa fa-sitemap'></i>")
      //   }, 1000);
      // }, 8000);
      break;
    case 11:
      // setTimeout(function(){
      //   $('.duplicate').append(
      //     '<br><i style="color: rgba(10,60,123,0.7); transition: color 1s;" class="dup1 fa fa-square-o"></i> ' +
      //     '<i style="color: rgba(10,123,10,0.7); transition: color 1s;" class="dup2 fa fa-square-o"></i> ' +
      //     '<i class="fa fa-arrow-right"></i> ' +
      //     '<i style="color: rgba(20,133,133,0.7)" class="fa fa-square"></i> '
      //   );
      //   setTimeout(function(){
      //     $('.dup1').css("color", "rgba(10,0,183,0.7)");
      //     $('.dup2').css("color", "rgba(10,183,0,0.7)");
      //   }, 1000)
      // }, 8000);
      break;
    case 12:
      break;
    case 13:
      break;
    case 14:
      break;
    case 15:
      break;
    case 16:
      break;
    case 17:
      break;
    case 18:
      break;
    case 19:
      // setTimeout(function(){
      //   $('.battery').removeClass("fa-battery-0").addClass("fa-battery-1");
      //   setTimeout(function(){
      //     $('.battery').removeClass("fa-battery-1").addClass("fa-battery-2");
      //     setTimeout(function(){
      //       $('.battery').removeClass("fa-battery-2").addClass("fa-battery-3");
      //       setTimeout(function(){
      //         $('.battery').removeClass("fa-battery-3").addClass("fa-battery-4");
      //       }, 1000);
      //     }, 1000);
      //   }, 1000);
      // }, 10000);
      break;
    case 20:
      break;
    case 21:
      break;
  }
}

function alternateFlame1 () {
  $('#flame').css('color', 'rgba(255,83,13,0.6)')
  setTimeout(function(){
    alternateFlame2();
  }, 1000)
}

function alternateFlame2 () {
  $('#flame').css('color', 'rgba(255,83,13,1)')
  setTimeout(function(){
    alternateFlame1();
  }, 200)
}
