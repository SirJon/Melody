import Timer from "../utils/timer";

// Создаем таймер
export const createGameTimer = (state, maxGameTime) => {
  state.timer = new Timer(maxGameTime);
};

// Запускаем таймер
export const startGameTimer = (state, minTimerDangerZone) => {
  return setInterval(() => {

    // Когда осталось менее 30 секунд таймер должен начать мигать красным цветом
    if (state.timer.seconds < minTimerDangerZone) {}

    state.timer.tick();
  }, 1000);
};