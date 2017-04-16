setup = ->
	createCanvas windowWidth,windowHeight
	bg 0.5
	
draw = ->
	text "x=#{mouseX} y=#{mouseY}", mouseX, mouseY					
