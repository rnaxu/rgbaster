(function() {

var sampleImage = document.getElementById('sample');

RGBaster.colors(sampleImage, {
  paletteSize: 30,　
  exclude: [ 'rgb(0,0,0)' ],
  success: function(payload) {
    console.log(payload.dominant);
    console.log(payload.secondary);
    console.log(payload.palette);
    $('.js-color').css({backgroundColor:payload.dominant});
  }
});

})();