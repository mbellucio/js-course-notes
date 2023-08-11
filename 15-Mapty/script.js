'use strict';

// prettier-ignore

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// ======================= How to Plan a Project =======================
console.log('');
console.log('=================================');
console.log('===== How to Plan a Project =====');
console.log('=================================');

/* 
============================== Planning Step ==============================
1.USER STORIES 
  -> Description of the application's functionality from the 
  user's perspective. All user stories put togheter describe 
  the entire application.

2.FEATURES

3.FLOWCHART
  -> What we build

4.ARCHITECTURE
  -> How we build it
===========================================================================

1. USER STORY 
  * Commom format: As a [type of user], i want [an action] so
    that [a benefit]. 

    e.g.
    "As a user, i want to [log my running workouts with location]
    [distance, time, pace and steps/minute], so i can keep a log
    of all my running."

    "As a user, i want to [log my cycling workouts with location,
    distance, time, speed and elevatio gain], so i can keep a log
    of all my cycling."
    
    "As a user, i want to [see all mu workouts at a glance], so i
    can easily track my progress over time."

    "As a user, i want to [also see my workouts on a map], so i can
    easily check where i workout the most."

    "As a user, i want to [see all my workouts when i leave the app
    and come back later], so that i can keep using there app over time."

2. FEATURES
  * Map where user clicks to add a new workout (best way to get location
    coordinates)

  * Geolocation to display map at current location (more user friendly)

  * Form to input distance, time, pace, steps/minute
  
  * Form to input distance, time, speed, elevation gain

  * Display all workouts in a list

  * Display all workouts on the map

  * Store workout data in the browser using local storage API

  * On page load, read the saved data from local storage and display

3. FlowChart
  * link: 
    https://miro.com/app/board/uXjVM9JyJog=/?share_link_id=538542650323

4. Architecture
  * For this project we will start coding! no Architecture!
*/

// ======================= Using Geolocation API =======================
console.log('');
console.log('=================================');
console.log('===== Using Geolocation API =====');
console.log('=================================');

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      console.log(position);
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(`https://www.google.com.br/maps/@${latitude},${longitude}`);
    },
    function () {
      alert('Could not get your position');
    }
  );

// ======================= Displaying a Map using Leaflet Library =======================
console.log('');
console.log('==================================================');
console.log('===== Displaying a Map using Leaflet Library =====');
console.log('==================================================');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance;
    this.duration = duration;
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';
  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// ===============================================================================
class App {
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoom = 15;

  constructor() {
    // get users position
    this._getPosition();

    // get data from local storage
    this._getLocalStorage();

    // attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.com.br/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoom);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work); 
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // prettier-ignore
    inputDistance.value = inputDuration.value =
    inputCadence.value = inputElevation.value = '';
    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(event) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));

    const allPositive = (...inputs) => inputs.every(inp => inp > 0);

    event.preventDefault();

    // Get Data from Form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // if activity running create Running()
    if (type === 'running') {
      // Check if data is valid
      const cadence = +inputCadence.value;
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be a Number');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // if activity cycling create cycling()
    if (type === 'cycling') {
      // Check if data is valid
      const elevationGain = +inputElevation.value;
      if (
        !validInputs(distance, duration, elevationGain) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be a Number');

      workout = new Cycling([lat, lng], distance, duration, elevationGain);
    }

    // Add new object to workout array
    this.#workouts.push(workout);
    // render workout on map as marker
    console.log(workout);
    this._renderWorkoutMarker(workout);
    // render workout on list
    this._renderWorkout(workout);
    // Clear inputs
    this._hideForm();

    // set Local Storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    // display marker
    L.marker([...workout.coords])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 150,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  _renderWorkout(workout) {
    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description}</h2>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>`;

    if (workout.type === 'running')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed(1)}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>`;

    if (workout.type === 'cycling')
      html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed.toFixed(1)}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>`;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(event) {
    // selects the whole html element, the ID found will match the ID on the
    // objects array.
    const workoutEl = event.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoom, {
      animate: true,
      pan: {
        duration: 0.7,
      },
    });
    // workout.click();
    console.log(workout);
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    this.#workouts = data;

    this.#workouts.forEach(work => {
      this._renderWorkout(work); 
    });
  }

  reset() {
    localStorage.removeItem('workouts'); 
    location.reload();
  }
}

const app = new App();
