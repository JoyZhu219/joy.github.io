//console.log(dayjs());

//Day.js Web: https://day.js.org/en/

const events=document.querySelectorAll('.event');
//console.log(events)//

events.forEach(event => {
  //console.log(event)//
  const date = dayjs(event.dataset.date).format('MMM, ddd D. h:mm:ss A');
  const dateElement = event.querySelector('.date');
  dateElement.innerText = date;
})


//Three.js Web:https://threejs.org/
let camera, scene, renderer, cube;

function init() {
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(
		75,
		window.innerWidth / window.innerHeight,
		0.1,
		1000
	);

	renderer = new THREE.WebGLRenderer({ antialias: true });
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	const geometry = new THREE.BoxGeometry(3, 3, 3);

	const material = new THREE.MeshBasicMaterial({ color: 0x0000ff });
	cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 100;
}

// Draw the scene every time the screen is refreshed
function animate() {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
}

function onWindowResize() {
	// Camera frustum aspect ratio
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize, false);

init();
animate();
