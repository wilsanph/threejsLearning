

function App()
{
	App.instance = this;

	this.m_camera = null;
	this.m_scene = null;
	this.m_renderer = null;

	this.m_tGeometry = null;
	this.m_tMaterial = null;
	this.m_tMesh = null;

	this.init();
};

App.instance = null;

App.prototype.init = function() 
{
	this.m_camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1000 );
	this.m_camera.position.z = 500;

	this.m_scene = new THREE.Scene();

	this.m_tGeometry = new THREE.IcosahedronGeometry( 200, 1 );
	this.m_tMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true, wireframeLinewidth: 2 } );
	this.m_tMesh = new THREE.Mesh( this.m_tGeometry, this.m_tMaterial );
	this.m_scene.add( this.m_tMesh );

	this.m_renderer = new THREE.WebGLRenderer( { antialias: true } );
	this.m_renderer.setSize( window.innerWidth, window.innerHeight );

	document.body.appendChild( this.m_renderer.domElement );
};

App.prototype.update = function()
{
	this.m_tMesh.rotation.x = Date.now() * 0.0010;
	this.m_tMesh.rotation.y = Date.now() * 0.0010;
};

App.prototype.render = function() 
{
	this.m_renderer.render( this.m_scene, this.m_camera );
};