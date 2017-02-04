setup = ->
	createCanvas windowWidth,windowHeight
	bg 0.5
					
mousePressed = ->
	text "x=#{mouseX} y=#{mouseY}", mouseX, mouseY