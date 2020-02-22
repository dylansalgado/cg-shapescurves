class Renderer 
{
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        let framebuffer = this.ctx.getImageData(0, 0, this.canvas.width, this.canvas.height);

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(framebuffer);
                break;
            case 1:
                this.drawSlide1(framebuffer);
                break;
            case 2:
                this.drawSlide2(framebuffer);
                break;
            case 3:
                this.drawSlide3(framebuffer);
                break;
        }

        this.ctx.putImageData(framebuffer, 0, 0);
    }

    // framebuffer:  canvas ctx image data
    drawSlide0(framebuffer) {
		var left_bottom = ({x: 100, y: 100});
		var top_right = ({x: 500, y: 300});
		var color_array = [255, 0, 0, 255];
		this.drawRectangle(left_bottom, top_right, color_array, framebuffer);
		
	}
	

    // framebuffer:  canvas ctx image data
    drawSlide1(framebuffer) {
		var center = ({x: 300, y: 300});
		var radius = 50;
		var color = [0, 0, 0, 255];
		this.drawCircle(center, radius, color, framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide2(framebuffer) {
		var pt0 = ({x: 100, y: 100});
		var pt3 = ({x: 300, y: 300});
		var pt1 = ({x: 50, y: 300});
		var pt2 = ({x: 300, y: 50});
		var color = [0, 0, 255, 255];
		this.drawBezierCurve(pt0, pt1, pt2, pt3, color, framebuffer);
    }

    // framebuffer:  canvas ctx image data
    drawSlide3(framebuffer) {
		// plot out name
    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawRectangle(left_bottom, right_top, color, framebuffer) {
		var right_bottom = ({x: right_top.x, y: left_bottom.y});
		var left_top = ({x: left_bottom.x, y: right_top.y});
		this.drawLine(left_bottom, left_top, color, framebuffer);
		this.drawLine(left_top, right_top, color, framebuffer);
		this.drawLine(left_bottom, right_bottom, color, framebuffer);
		this.drawLine(right_bottom, right_top, color, framebuffer);
		var p1 = left_bottom;
		var p2 = left_top;
		var p3 = right_top;
		var p4 = right_bottom;
		
		if (this.show_points == true) {
				var left_bottom1 = ({x: p1.x - 2, y: p1.y - 2});
				var right_bottom1 = ({x: p1.x + 2, y: p1.y - 2});
				var left_top1 = ({x: p1.x - 2, y: p1.y + 2});
				var right_top1 = ({x: p1.x + 2, y: p1.y + 2});
				this.drawLine(left_bottom1, left_top1, color, framebuffer);
				this.drawLine(left_top1, right_top1, color, framebuffer);
				this.drawLine(left_bottom1, right_bottom1, color, framebuffer);
				this.drawLine(right_bottom1, right_top1, color, framebuffer);
				var left_bottom2 = ({x: p2.x - 2, y: p2.y - 2});
				var right_bottom2 = ({x: p2.x + 2, y: p2.y - 2});
				var left_top2 = ({x: p2.x - 2, y: p2.y + 2});
				var right_top2 = ({x: p2.x + 2, y: p2.y + 2});
				this.drawLine(left_bottom2, left_top2, color, framebuffer);
				this.drawLine(left_top2, right_top2, color, framebuffer);
				this.drawLine(left_bottom2, right_bottom2, color, framebuffer);
				this.drawLine(right_bottom2, right_top2, color, framebuffer);
				var left_bottom3 = ({x: p3.x - 2, y: p3.y - 2});
				var right_bottom3 = ({x: p3.x + 2, y: p3.y - 2});
				var left_top3 = ({x: p3.x - 2, y: p3.y + 2});
				var right_top3 = ({x: p3.x + 2, y: p3.y + 2});
				this.drawLine(left_bottom3, left_top3, color, framebuffer);
				this.drawLine(left_top3, right_top3, color, framebuffer);
				this.drawLine(left_bottom3, right_bottom3, color, framebuffer);
				this.drawLine(right_bottom3, right_top3, color, framebuffer);
				var left_bottom4 = ({x: p4.x - 2, y: p4.y - 2});
				var right_bottom4 = ({x: p4.x + 2, y: p4.y - 2});
				var left_top4 = ({x: p4.x - 2, y: p4.y + 2});
				var right_top4 = ({x: p4.x + 2, y: p4.y + 2});
				this.drawLine(left_bottom4, left_top4, color, framebuffer);
				this.drawLine(left_top4, right_top4, color, framebuffer);
				this.drawLine(left_bottom4, right_bottom4, color, framebuffer);
				this.drawLine(right_bottom4, right_top4, color, framebuffer);
			}
		
    }

    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawCircle(center, radius, color, framebuffer) {
        var initial_point = ({x: center.x + radius, y: center.y});
		var current_phi = 2*(Math.PI/this.num_curve_sections);
		var initial_phi = current_phi;
		var previous_point = initial_point;
		var current_point = ({x: center.x + Math.floor(radius*Math.cos(current_phi)), y: center.y + Math.round(radius*Math.sin(current_phi))});
		this.drawLine(current_point, previous_point, color, framebuffer);
		if (this.show_points == true) {
			var left_bottom = ({x: initial_point.x - 2, y: initial_point.y - 2});
			var right_bottom = ({x: initial_point.x + 2, y: initial_point.y - 2});
			var left_top = ({x: initial_point.x - 2, y: initial_point.y + 2});
			var right_top = ({x: initial_point.x + 2, y: initial_point.y + 2});
			this.drawLine(left_bottom, left_top, color, framebuffer);
			this.drawLine(left_top, right_top, color, framebuffer);
			this.drawLine(left_bottom, right_bottom, color, framebuffer);
			this.drawLine(right_bottom, right_top, color, framebuffer);
		}
		while (current_point.x != initial_point.x || current_point.y != initial_point.y) {
			current_phi = current_phi + initial_phi
			previous_point = current_point;
			current_point = ({x: center.x + Math.floor(radius*Math.cos(current_phi)), y: center.y + Math.round(radius*Math.sin(current_phi))});
			this.drawLine(current_point, previous_point, color, framebuffer);
			if (this.show_points == true) {
				var left_bottom = ({x: previous_point.x - 2, y: previous_point.y - 2});
				var right_bottom = ({x: previous_point.x + 2, y: previous_point.y - 2});
				var left_top = ({x: previous_point.x - 2, y: previous_point.y + 2});
				var right_top = ({x: previous_point.x + 2, y: previous_point.y + 2});
				this.drawLine(left_bottom, left_top, color, framebuffer);
				this.drawLine(left_top, right_top, color, framebuffer);
				this.drawLine(left_bottom, right_bottom, color, framebuffer);
				this.drawLine(right_bottom, right_top, color, framebuffer);
			}
		}
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
    drawBezierCurve(pt0, pt1, pt2, pt3, color, framebuffer) {
		var current_point = pt0;
		var t_initial = 1/this.num_curve_sections;
		var t = t_initial;
		var next_point = ({x: 0, y: 0});
		var x_term_1 = (Math.pow((1-t), 3)) * pt0.x;
		var x_term_2 = 3*(Math.pow((1-t), 2))*t*pt1.x;
		var x_term_3 = 3*(1-t)*(Math.pow(t, 2))*pt2.x;
		var x_term_4 = (Math.pow(t, 3))*pt3.x;
		var y_term_1 = (Math.pow((1-t), 3)) * pt0.y;
		var y_term_2 = 3*(Math.pow((1-t), 2))*t*pt1.y;
		var y_term_3 = 3*(1-t)*(Math.pow(t, 2))*pt2.y;
		var y_term_4 = (Math.pow(t, 3))*pt3.y;
		var next_x = Math.round(x_term_1 + x_term_2 + x_term_3 + x_term_4);
		var next_y = Math.round(y_term_1 + y_term_2 + y_term_3 + y_term_4);
		next_point.x = next_x;
		next_point.y = next_y;
		this.drawLine(current_point, next_point, color, framebuffer);
		if (this.show_points == true) {
			var left_bottom = ({x: current_point.x - 2, y: current_point.y - 2});
			var right_bottom = ({x: current_point.x + 2, y: current_point.y - 2});
			var left_top = ({x: current_point.x - 2, y: current_point.y + 2});
			var right_top = ({x: current_point.x + 2, y: current_point.y + 2});
			this.drawLine(left_bottom, left_top, color, framebuffer);
			this.drawLine(left_top, right_top, color, framebuffer);
			this.drawLine(left_bottom, right_bottom, color, framebuffer);
			this.drawLine(right_bottom, right_top, color, framebuffer);
		}
		current_point.x = next_point.x;
		current_point.y = next_point.y;
		while (current_point.x != pt3.x || current_point.y != pt3.y) {
			t = t + t_initial;
			x_term_1 = (Math.pow((1-t), 3)) * pt0.x;
			x_term_2 = 3*(Math.pow((1-t), 2))*t*pt1.x;
			x_term_3 = 3*(1-t)*(Math.pow(t, 2))*pt2.x;
			x_term_4 = (Math.pow(t, 3))*pt3.x;
			y_term_1 = (Math.pow((1-t), 3)) * pt0.y;
			y_term_2 = 3*(Math.pow((1-t), 2))*t*pt1.y;
			y_term_3 = 3*(1-t)*(Math.pow(t, 2))*pt2.y;
			y_term_4 = (Math.pow(t, 3))*pt3.y;
			next_x = Math.round(x_term_1 + x_term_2 + x_term_3 + x_term_4);
			next_y = Math.round(y_term_1 + y_term_2 + y_term_3 + y_term_4);
			next_point.x = next_x;
			next_point.y = next_y;
			this.drawLine(current_point, next_point, color, framebuffer);
			if (this.show_points == true) {
				var left_bottom = ({x: current_point.x - 2, y: current_point.y - 2});
				var right_bottom = ({x: current_point.x + 2, y: current_point.y - 2});
				var left_top = ({x: current_point.x - 2, y: current_point.y + 2});
				var right_top = ({x: current_point.x + 2, y: current_point.y + 2});
				this.drawLine(left_bottom, left_top, color, framebuffer);
				this.drawLine(left_top, right_top, color, framebuffer);
				this.drawLine(left_bottom, right_bottom, color, framebuffer);
				this.drawLine(right_bottom, right_top, color, framebuffer);
			}
			current_point.x = next_point.x;
			current_point.y = next_point.y;
		}
		if (this.show_points == true) {
			var left_bottom = ({x: current_point.x - 2, y: current_point.y - 2});
			var right_bottom = ({x: current_point.x + 2, y: current_point.y - 2});
			var left_top = ({x: current_point.x - 2, y: current_point.y + 2});
			var right_top = ({x: current_point.x + 2, y: current_point.y + 2});
			this.drawLine(left_bottom, left_top, color, framebuffer);
			this.drawLine(left_top, right_top, color, framebuffer);
			this.drawLine(left_bottom, right_bottom, color, framebuffer);
			this.drawLine(right_bottom, right_top, color, framebuffer);
			
			var left_bottom1 = ({x: pt1.x - 5, y: pt1.y - 5});
			var right_bottom1 = ({x: pt1.x + 5, y: pt1.y - 5});
			var left_top1 = ({x: pt1.x - 5, y: pt1.y + 5});
			var right_top1 = ({x: pt1.x + 5, y: pt1.y + 5});
			this.drawLine(left_bottom1, right_top1, [0, 0, 0, 255], framebuffer);
			this.drawLine(left_top1, right_bottom1, [0, 0, 0, 255], framebuffer);
			
			var left_bottom2 = ({x: pt2.x - 5, y: pt2.y - 5});
			var right_bottom2 = ({x: pt2.x + 5, y: pt2.y - 5});
			var left_top2 = ({x: pt2.x - 5, y: pt2.y + 5});
			var right_top2 = ({x: pt2.x + 5, y: pt2.y + 5});
			this.drawLine(left_bottom2, right_top2, [0, 0, 0, 255], framebuffer);
			this.drawLine(left_top2, right_bottom2, [0, 0, 0, 255], framebuffer);
			
		}
        
    }

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // framebuffer:  canvas ctx image data
	
    drawLine(pt0, pt1, color, framebuffer) {
		var x0 = pt0.x;
		var x1 = pt1.x;
		var y0 = pt0.y;
		var y1 = pt1.y;
		if (y1 == y0) { // horizontal line
			this.drawLineHorizontal(x0, x1, y0, color, framebuffer);
		}
		else if (x1 == x0) { // vertical line
			this.drawLineVertical(y0, y1, x0, color, framebuffer);
		}
		else { // no dividing by 0 or slope of 0
			if (Math.abs(y1-y0) <= Math.abs(x1 - x0)) { // |m| <=1
				if (x0 < x1) {
					this.drawLineLow(x0, y0, x1, y1, color, framebuffer);
				}
				if (x0 > x1) {
					this.drawLineLow(x1, y1, x0, y0, color, framebuffer);
				}
			}
			else //(Math.abs(y1-y0) > Math.abs(x1 - x0)), 1 < m < infinity
			{
				if (y0 < y1) {
					this.drawLineHigh(x0, y0, x1, y1, color, framebuffer);
				} 
				else if (y0 > y1) {
					this.drawLineHigh(x1, y1, x0, y0, color, framebuffer);
				}
			}
		}	
	}		
		
		
		



	
	drawLineLow(x0, y0, x1, y1, color, framebuffer)
	{
		var A = y1 - y0;
		var B = x0 - x1;
		var iy = 1;
		if (A < 0) {
			iy = -1;
			A *= -1;
		}
		var D = 2 * A + B;
		var x = x0;
		var y = y0;
		var px;
		while (x <= x1)
		{
			px = this.pixelIndex(x, y, framebuffer);
			this.setFramebufferColor(framebuffer, px, color);
			x += 1;
			if (D <= 0)
			{
				D += 2 * A;
			}
			else
			{
				D += 2 * A + 2 * B;
				y += iy;
			}
		}
	}

	drawLineHigh(x0, y0, x1, y1, color, framebuffer) {
		//copied from text since what i had from class didn't work
		var dx = x1 - x0;
		var dy = y1- y0;
		var ix = 1;
		if (dx < 0) {
			ix = -1;
			dx = -dx;
		}
		var D = (2 * dx) - dy;
		var x = x0;
		var y, px;
		for (y = y0; y <= y1; y++) {
			px = 4 * y * framebuffer.width + 4 * x;
			this.setFramebufferColor(framebuffer, px, color);
			if (D > 0) {
				x += ix;
				D -= 2 * dy;
			}
			D += 2 * dx;
			
		}
	}
		
	

	pixelIndex(x, y, framebuffer)
	{
		return 4 * y * framebuffer.width + 4 * x;
	}	
	
	setFramebufferColor(framebuffer, px, color)
	{
		framebuffer.data[px + 0] = color[0];
		framebuffer.data[px + 1] = color[1];
		framebuffer.data[px + 2] = color[2];
		framebuffer.data[px + 3] = color[3];
	}
	
	drawLineHorizontal(x0, x1, y, color, framebuffer) {
		var x = x0;
		while (x < x1) {
			var px = this.pixelIndex(x, y, framebuffer);
			this.setFramebufferColor(framebuffer, px, color);
			x += 1; 
		}
	}
	
	drawLineVertical(y0, y1, x, color, framebuffer) {
		var y = y0;
		while (y < y1) {
			var px = this.pixelIndex(x, y, framebuffer);
			this.setFramebufferColor(framebuffer, px, color);
			y += 1;
		}
	}

};
	
