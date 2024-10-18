const dinoElem = document.querySelector("[data-dino]");
const JUMP_SPEED = 0.45;
const GRAVITY = 0.0015;
const DINO_FRAME_COUNT = 2;
const FRAME_TIME = 100;

let isJumping;
let dinoFrame;
let currentFrameTime;

export function setupDino() {}

isJumping = false;
dinoFrame = 0;
currentFrameTime = 0;

export function updateDino(delta, speedScale) {
  handleRun(delta, speedScale);
  handleJump();
}

function handleRun(delta, speedScale) {
  if (isJumping) {
    dinoElem.src = `image/dino-run-1.png`;
    return;
  }
  if (currentFrameTime >= FRAME_TIME) {
    dinoFrame = (dinoFrame + 1) % DINO_FRAME_COUNT;
    dinoElem.src = `image/dino-run-${dinoFrame}.png`;
    currentFrameTime -= FRAME_TIME;
  }
  currentFrameTime += delta * speedScale;
}

function handleJump() {}
