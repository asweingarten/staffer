var staff = {
  notes: null,
  lines: [],
  lineHeight: 0,
  canvas: null,

  init(canvas, notes) {
    this.canvas = canvas;
    this.notes = notes;
    this.lineHeight = this.canvas.getHeight()/20;
    for (var i = 0; i < 5; i++) {
      var height = ((i+4)*this.lineHeight);
      staff.lines[i] = new fabric.Line([0,height, this.canvas.getWidth(), height], {
        stroke: 'black',
        selectable: false
      });
    }
  },

  draw() {

    this.canvas.add(new fabric.Rect({
      width: this.canvas.getWidth(),
      height: this.canvas.getHeight(),
      fill: 'rgba(230,230,230,0.25)',
      selectable: false
    }));

    for (var i = 0; i < this.lines.length; i++) {
      this.canvas.add(this.lines[i]);
    }

    if (this.notes !== null) {
      for(var i = 0; i < this.notes.length; i++) {
        console.log('yo');
        let noteWidth = this.canvas.getWidth()/this.notes.length/2;
        let gutter = 20;
        this.canvas.add(new fabric.Ellipse({rx: noteWidth/2, ry: this.lineHeight/2,
                                            left: noteWidth*i+gutter, top: 100,
                                            fill: 'black'}));
      }
    }
  }
}

$(function() {
  var canvas = new fabric.Canvas('staff');
  canvas.setDimensions({width: 900, height: 400});

  $.get('/c-major').success((res) => {
    staff.init(canvas, res.notes);
    staff.draw();
  });
  
});

