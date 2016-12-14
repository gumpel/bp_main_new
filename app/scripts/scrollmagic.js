$(document).ready(function() {
  if ($('#aboutpath').length) {
    $('#pathline').height($('#aboutpath').height() - $('#aboutpath .row:last-child').height());
    $('#pathline').css('top', $('#aboutpath .row:first-child').height() / 2 - 11);
    var pathTop = -6;
    $('.pathdot').each(function() {
      $(this).css('top', pathTop);
      var hStart = $('#aboutpath .row:first-child').height() / 2 - 11;
      pathTop += $('#abouthpath_inner .row').eq($(this).index()).height() + 1;
      //console.log(pathTop);
    })
  }
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      //duration: 200
    }
  });

  var proggres = new ScrollMagic.Scene({
      triggerElement: '#pathline', duration:$('#pathline').height()
    })
    .setClassToggle('#pathdot_1', 'hvr-ripple-out-path')
    .addTo(controller).on('progress', function(e) {
      $('#progress').height((e.progress*100).toFixed(1) + '%')
    })


  var trigger1 = new ScrollMagic.Scene({
      triggerElement: '#trigger1', duration:300
    })
    .setClassToggle('#pathdot_1', 'hvr-ripple-out-path')
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  new ScrollMagic.Scene({
      triggerElement: '#trigger2'
    })
    .setClassToggle('#pathdot_2', 'hvr-ripple-out-path') // add class toggle
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
      triggerElement: '#trigger3'
    })
    .setClassToggle('#pathdot_3', 'hvr-ripple-out-path') // add class toggle
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
      triggerElement: '#trigger4'
    })
    .setClassToggle('#pathdot_4', 'hvr-ripple-out-path') // add class toggle
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
      triggerElement: '#trigger5'
    })
    .setClassToggle('#pathdot_5', 'hvr-ripple-out-path') // add class toggle
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
      triggerElement: '#trigger5'
    })
    .setClassToggle('#pathdot_5', 'hvr-ripple-out-path') // add class toggle
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
      triggerElement: '#trigger6'
    })
    .setClassToggle('#pathdot_6', 'hvr-ripple-out-path') // add class toggle
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  new ScrollMagic.Scene({
      triggerElement: '#trigger7'
    })
    .setClassToggle('#pathdot_7', 'hvr-ripple-out-path') // add class toggle
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);
});
