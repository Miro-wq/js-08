# Code Modularity 

## Description 
Homework practice project, using Node.js, Node Package Manager (npm), Code Modularity and Webpack to enhance code organization and performance.

This repository contains JavaScript exercises focused on enhancing skills in DOM manipulation, API integration, and event handling. Each exercise is structured into specific tasks:

Exercise 1 - SimpleLightbox Library:
Integrate the SimpleLightbox library using npm, refactor JavaScript code for previous themes, and ensure CSS connection.

Exercise 2 - Video Player:
Utilize the Vimeo player library via npm, track timeupdate events to save playback time in local storage, and resume playback from the saved position on page reload. Implement throttling using lodash.throttle.

Exercise 3 - Feedback Form:
Develop a script to save form field values (email and message) in local storage on input events. Populate form fields with saved data on page load. Upon form submission, clear local storage and display current email and message values in the console. Implement data storage and updates using lodash.throttle to occur no more than once every 500 milliseconds.

Each exercise is implemented in separate HTML and JavaScript files (01-gallery.html, 01-gallery.js, 02-video.html, 02-video.js, 03-feedback.html, 03-feedback.js), focusing on practical application and skill development in web development techniques.

## 🛠 Tools 
[![My Skills](https://skillicons.dev/icons?i=nodejs,npm,webpack,js,html,css,)](https://skillicons.dev)

## Requirements

## Exercise 1 - SimpleLightbox Library
Complete this task in the files `01-gallery.html` and `01-gallery.js`. Break it down into multiple subtasks:

- Add the SimpleLightbox library as a project dependency using npm (CDN links are no longer needed).
- Use the refactored JavaScript code from the previous assignment. Ensure the library is installed via npm (using import/export syntax).
- To link the CSS code to the project, add another import in addition to the one described in the documentation.

```
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
```

## Exercise 2 - Video Player

In the HTML, there is an `<iframe>` for the Vimeo player. Write a script that will save the current playback time of the video in local storage, and when the page is reloaded, it will resume playing the video from that point.

```
<iframe
  id="vimeo-player"
  src="https://player.vimeo.com/video/236203659"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
  allow="autoplay; encrypted-media"
></iframe>
```

Complete this task in the files `02-video.html` and `02-video.js`. Break it down into multiple subtasks:

- Read the documentation for the Vimeo player library.
- Add the library as a project dependency via npm.
- Initialize the player in the script file as described in the "pre-existing player" section, remembering the player is added as an npm package, not through a CDN.
- Read the documentation for the `on()` method and track the `timeupdate` event to update the playback time.
- Save the playback time in local storage. "videoplayer-current-time" will be the storage key.
- On page reload, use the `setCurrentTime()` method to resume playback from the saved position.
- Add the `lodash.throttle` library to the project to ensure the playback time is updated in storage no more than once per second.


## Exercise 3 - Feedback Form

The HTML code includes a form structure. Write a script that will save the values of the form fields in local storage whenever the user enters a character.

```
<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>
```

Complete this task in the files `03-feedback.html` and `03-feedback.js`. Break it down into multiple subtasks:

1. Monitor the form for the input event, and save an object with the fields `email` and `message` locally on each change. The object key will be "feedback-form-state".
2. On page load, check the storage state. If data is saved, populate the form fields with this data; otherwise, the fields remain empty.
3. When the form is submitted, clear the local storage and log the object with the `email` and `message` fields and their current values to the console.
4. Ensure the data is stored and updated no more than once every 500 milliseconds by adding and using the `lodash.throttle` library in the project.

