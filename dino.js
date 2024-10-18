const dinoElem = document.querySelector("[data-dino]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

export function setupDino() {}

export function updateDino(delta, speedScale) {
  handleRun();
  handleJump();
}

function handleRun() {}

function handleJump() {}
