var Boot = {} || Boot;

Boot.jsFiles = [
	'lib/three.js/build/three.js',
	'main.js',
	'core/Log.js',
	'core/App.js'

];
Boot.filesToLoad = 0;
Boot.filesLoaded = 0;

Boot._includeFile = function ( filePath )
{
	var scriptElement = document.createElement( "script" );
	scriptElement.type = "text/javascript";
	Boot.filesToLoad++;
	scriptElement.onload = Boot.onFileLoaded;
	scriptElement.src = filePath;
	document.head.appendChild( scriptElement );
};

Boot.boot = function ()
{
	for ( var q = 0; q < Boot.jsFiles.length; q++ )
	{
		Boot._includeFile( Boot.jsFiles[q] );
	}
};

Boot.onFileLoaded = function()
{
	Boot.filesLoaded++;
	if ( Boot.filesLoaded == Boot.filesToLoad )
	{
		Boot.init();
	}
};

Boot.init = function ()
{
	main();
};

Boot.boot();