$(function() {
  var canvas = new fabric.Canvas('staff');
  canvas.setDimensions({width: 900, height: 300});

  var staff = {
    lines: [],

    draw: function(canvas) {
      for (var i = 0; i < this.lines.length; i++) {
        canvas.add(this.lines[i]);
      }
    }
  }

  for (var i = 0; i < 5; i++) {
    var height = ((i+1)*50);
    staff.lines[i] = new fabric.Line([0,height, canvas.getWidth(), height], {
      stroke: 'black',
      selectable: false
    });
  }

  canvas.add(new fabric.Rect({
    width: canvas.getWidth(),
    height: canvas.getHeight(),
    fill: 'rgba(230,230,230,0.25)',
    selectable: false
  }));

  staff.draw(canvas);

});

