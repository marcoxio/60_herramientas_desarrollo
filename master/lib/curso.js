var $texto = $("#txtArc");

$texto.arctext({
  radius: 300,
});

// $texto.arctext({
//   radius: 300,
//   dir: -1,
// });

// $texto.arctext({ radius: 500, rotate: false });

setTimeout(function () {
  $texto.arctext('set', {
    radius: 300,
    dir: -1,
    animation: {
      speed: 300,
      easing: 'ease-out'
    }
  });
}, 1000);
