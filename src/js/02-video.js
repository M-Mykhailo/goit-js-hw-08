import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';
autoplayVideo();

player.on('timeupdate', throttle(onPlayer, 1000));

function onPlayer({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
};

function autoplayVideo() {
  const localStorageValue = localStorage.getItem(STORAGE_KEY);
  if (localStorageValue) {
    player.setCurrentTime(localStorageValue);
  }
}





