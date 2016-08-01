


function main()
{
	Log.log( "foooooo!!!!!!!!" );
	new App();

	loop();
};


function loop()
{
	requestAnimationFrame( loop );
	
	App.instance.update();
	App.instance.render();
};