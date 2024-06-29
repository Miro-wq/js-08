
import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const VIDEO_CURRENT_TIME_KEY = 'video-current-time'
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
localStorage.setItem(VIDEO_CURRENT_TIME_KEY, data.seconds)
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(VIDEO_CURRENT_TIME_KEY)) || 0);

// setCurrentTime(seconds: number)
// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the videos duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });
// https://www.npmjs.com/package/lodash.throttle

// =========================DRAFT======================================

//Parameters
// key: This is a unique identifier that can be used later to retrieve a value from localStorage.
// value: This is the data to be stored in the localStorage.
// function populateStorage() {
//     localStorage.setItem("bgcolor", "red");
//localStorage.setItem(keyname, value)
// localStorage.setItem("mytime", Date.now());

// const onPlay = function(data) {
//     // data is an object containing properties specific to that event
// };
// player.on('play', onPlay); ✓


// player.on('play', function() {
//         console.log('played the video!');
//     });

// player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     }); x

// const iframe = document.querySelector('iframe'); ✓
// const player = new Vimeo.Player(iframe); ?????????
// const player = new Player(iframe);✓

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// }); x

// // on(event: string, callback: function): void

// player.on('eventName', function(data) {
// // data is an object containing properties specific to that event
// });

// setCurrentTime(seconds: number)
// player.setCurrentTime(30.456).then(function(seconds) {
// // seconds = the actual time that the player seeked to
// }).catch(function(error) {
// switch (error.name) {
//     case 'RangeError':
//         // the time was less than 0 or greater than the videos duration
//         break;

//     default:
//         // some other error occurred
//         break; xxx
// }
// });