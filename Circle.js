// Generated by CoffeeScript 1.11.1
var Circle;

Circle = (function() {
  function Circle(col, radius, circles) {
    var c, count, i, len;
    this.col = col;
    this.radius = radius;
    count = 1;
    while (count > 0) {
      this.x = random(width);
      this.y = random(height);
      count = 0;
      for (i = 0, len = circles.length; i < len; i++) {
        c = circles[i];
        if (dist(c.x, c.y, this.x, this.y) < this.radius * 0.4) {
          count += 1;
        }
      }
    }
    this.marked = false;
  }

  Circle.prototype.draw = function() {
    fill(this.col);
    noStroke();
    sw(0.05 * this.radius);
    circle(this.x, this.y, 0.975 * this.radius);
    noFill();
    stroke(255, 255, 255, 225);
    sw(0.05 * self.radius);
    return circle(this.x, this.y, 0.975 * this.radius);
  };

  Circle.prototype.within = function(x, y) {
    return dist(this.x, this.y, x, y) < this.radius;
  };

  return Circle;

})();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2lyY2xlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2lyY2xlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBQTs7QUFBTTtFQUNTLGdCQUFDLEdBQUQsRUFBTSxNQUFOLEVBQWMsT0FBZDtBQUNiLFFBQUE7SUFEYyxJQUFDLENBQUEsTUFBRDtJQUFLLElBQUMsQ0FBQSxTQUFEO0lBQ25CLEtBQUEsR0FBUTtBQUNSLFdBQU0sS0FBQSxHQUFRLENBQWQ7TUFDQyxJQUFDLENBQUEsQ0FBRCxHQUFLLE1BQUEsQ0FBTyxLQUFQO01BQ0wsSUFBQyxDQUFBLENBQUQsR0FBSyxNQUFBLENBQU8sTUFBUDtNQUNMLEtBQUEsR0FBUTtBQUNSLFdBQUEseUNBQUE7O1FBQ0MsSUFBRyxJQUFBLENBQUssQ0FBQyxDQUFDLENBQVAsRUFBUyxDQUFDLENBQUMsQ0FBWCxFQUFhLElBQUMsQ0FBQSxDQUFkLEVBQWdCLElBQUMsQ0FBQSxDQUFqQixDQUFBLEdBQXNCLElBQUMsQ0FBQSxNQUFELEdBQVEsR0FBakM7VUFBMEMsS0FBQSxJQUFTLEVBQW5EOztBQUREO0lBSkQ7SUFNQSxJQUFDLENBQUEsTUFBRCxHQUFVO0VBUkc7O21CQVVkLElBQUEsR0FBTyxTQUFBO0lBQ04sSUFBQSxDQUFLLElBQUMsQ0FBQSxHQUFOO0lBQ0EsUUFBQSxDQUFBO0lBQ0EsRUFBQSxDQUFHLElBQUEsR0FBTyxJQUFDLENBQUEsTUFBWDtJQUNBLE1BQUEsQ0FBTyxJQUFDLENBQUEsQ0FBUixFQUFXLElBQUMsQ0FBQSxDQUFaLEVBQWUsS0FBQSxHQUFRLElBQUMsQ0FBQSxNQUF4QjtJQUVBLE1BQUEsQ0FBQTtJQUNBLE1BQUEsQ0FBTyxHQUFQLEVBQVcsR0FBWCxFQUFlLEdBQWYsRUFBbUIsR0FBbkI7SUFDQSxFQUFBLENBQUcsSUFBQSxHQUFPLElBQUksQ0FBQyxNQUFmO1dBQ0EsTUFBQSxDQUFPLElBQUMsQ0FBQSxDQUFSLEVBQVcsSUFBQyxDQUFBLENBQVosRUFBZSxLQUFBLEdBQU0sSUFBQyxDQUFBLE1BQXRCO0VBVE07O21CQVdQLE1BQUEsR0FBUyxTQUFDLENBQUQsRUFBRyxDQUFIO1dBQ1IsSUFBQSxDQUFLLElBQUMsQ0FBQSxDQUFOLEVBQVEsSUFBQyxDQUFBLENBQVQsRUFBWSxDQUFaLEVBQWMsQ0FBZCxDQUFBLEdBQW1CLElBQUMsQ0FBQTtFQURaIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ2lyY2xlXHJcblx0Y29uc3RydWN0b3IgOiAoQGNvbCxAcmFkaXVzLGNpcmNsZXMpIC0+ICBcclxuXHRcdGNvdW50ID0gMSBcclxuXHRcdHdoaWxlIGNvdW50ID4gMFxyXG5cdFx0XHRAeCA9IHJhbmRvbSB3aWR0aFxyXG5cdFx0XHRAeSA9IHJhbmRvbSBoZWlnaHRcclxuXHRcdFx0Y291bnQgPSAwXHJcblx0XHRcdGZvciBjIGluIGNpcmNsZXNcclxuXHRcdFx0XHRpZiBkaXN0KGMueCxjLnksQHgsQHkpIDwgQHJhZGl1cyowLjQgdGhlbiBjb3VudCArPSAxXHJcblx0XHRAbWFya2VkID0gZmFsc2VcclxuXHJcblx0ZHJhdyA6ICgpIC0+XHJcblx0XHRmaWxsIEBjb2xcclxuXHRcdG5vU3Ryb2tlKClcclxuXHRcdHN3IDAuMDUgKiBAcmFkaXVzXHJcblx0XHRjaXJjbGUgQHgsIEB5LCAwLjk3NSAqIEByYWRpdXNcclxuXHJcblx0XHRub0ZpbGwoKVxyXG5cdFx0c3Ryb2tlIDI1NSwyNTUsMjU1LDIyNVxyXG5cdFx0c3cgMC4wNSAqIHNlbGYucmFkaXVzXHJcblx0XHRjaXJjbGUgQHgsIEB5LCAwLjk3NSpAcmFkaXVzXHJcblxyXG5cdHdpdGhpbiA6ICh4LHkpIC0+XHJcblx0XHRkaXN0KEB4LEB5LCB4LHkpIDwgQHJhZGl1c1x0XHQiXX0=
//# sourceURL=C:\github\ColorPair\circle.coffee