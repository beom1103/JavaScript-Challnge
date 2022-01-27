const canvas = document.getElementById("c");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

// Threejs에는 몇가지 카메라가 있는데, 여기서는 PerspectiveCamera를 사용했다. PerspectiveCamera의 인자는 차례대로 field of view(시야각), aspect, near, far이다.
// 1. field of view(시야각): 말 그대로 볼 수 있는 각도.
// 2. aspect: canvas의 크기 비율, canvas크기를 따로 설정하지 않으면 2가 기본값이다.
// 3. near, far: 랜더링 범위를 near~far로 제한

let camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  5
);

camera.position.z = 2; //카메라 위치 이동, default로 아래쪽 바라봄.

const scene = new THREE.Scene();

// 큐브 생성 default = 1
const geometry = new THREE.BoxGeometry();
// 색을 칠하는 요소
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function render(time) {
  time *= 0.001;

  mesh.rotation.x = time;
  mesh.rotation.y = time;

  renderer.render(scene, camera);
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

{
  const color = 0xffffff;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);
}

window.addEventListener("resize", resize, false);

function resize() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    5
  );
  camera.position.z = 2;
}
