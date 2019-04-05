$(function() {
  var title = $("#circle span");
  title.hide();
  var periods = ["day", "dusk", "night", "dawn"];
  var lengths = [20, 3, 14, 3];
  var colors = ["orange", "yellow", "purple", "navy"];
  $("#sleep").on("click", render);
  var circle = $("#circle");
  function render() {
    title.show();
    var period = periods.shift();
    periods.push(period);
    var startcolor = colors.shift();
    var endcolor = colors[0];
    colors.push(startcolor);
    var length = lengths.shift();
    lengths.push(length);
    title.text(period);
    title.css("color", endcolor);
    circle.circleProgress({
      value: 1,
      size: 100,
      fill: {
        gradient: [startcolor, endcolor]
      },
      animation: {
        duration: length*1000,
        complete: render
      }
    });
  };
});
