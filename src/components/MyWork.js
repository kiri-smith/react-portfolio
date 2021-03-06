import React from 'react';
import travelPlanner from "../assets/Travel-Planner.png"
import drinkRater from "../assets/Drink-Rating-App.JPG"
import managementSystem from "../assets/Employee-Management-System.JPG"
import noteTaker from "../assets/Note-Taker.JPG"
import readmeGenerator from "../assets/README-Generator.JPG"
import workdayScheduler from "../assets/Workday-Scheduler.JPG"
import '../styles/App.css';
//import 'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js'

function MyWork() {
  return (
    <div class="card" id="showcase">
      <h3>Showcased Projects</h3>
      <div class="travel-app card">
        <h6>Traveleeze: Where Traveling's A Breeze</h6>
        <img src={travelPlanner} alt="Traveleeze App" class="picture-format"></img>
        <button class="card-action first-link project-images">
          <a href="https://evening-fjord-31070.herokuapp.com/login" target="_blank" rel="noreferrer" class="big-link">Explore the App!</a>
        </button>
        <button class="card-action second-link project-images">
          <a href="https://github.com/kiri-smith/trip_planner" target="_blank" rel="noreferrer" class="big-link">View the
            code!</a>
        </button>
      </div>
      <div class="drink-app card col lg6 m6 s12">
        <h6>Rank-A-Drank: A Five-Star App for Drink Suggestions</h6>
        <img src={drinkRater} alt="Drink Rating App" class="picture-format"></img>
        <button class="card-action app-link">
          <a href="https://amackenzie26.github.io/drink-rating-app/" target="_blank" rel="noreferrer"
            class="big-link">Explore
            the App!</a>
        </button>
        <button class="card-action app-link">
          <a href="https://github.com/kiri-smith/drink-rating-app" target="_blank" rel="noreferrer" class="big-link">View
            the
            code!</a>
        </button>
      </div>
      <div class="management-app card col lg6 m6 s12">
        <h6>Employee Management System</h6>
        <img src={managementSystem} alt="Employee Management System"
          class="picture-format"></img>
        <button class="card-action app-link">
          <a href="https://watch.screencastify.com/v/utDIFIbYTvfHSGlBOETn" target="_blank" rel="noreferrer" class="big-link">App Demo</a>
        </button>
        <button class="card-action app-link">
          <a href="https://github.com/kiri-smith/employee-tracker" target="_blank" rel="noreferrer" class="big-link">View
            the
            code!</a>
        </button>
      </div>
      <div class="management-app card col lg6 m6 s12">
        <h6>Note Taker</h6>
        <img src={noteTaker} alt="Note Taker App"
          class="picture-format"></img>
        <button class="card-action app-link">
          <a href="https://ksmith-notetaker.herokuapp.com/" target="_blank" rel="noreferrer" class="big-link">Explore the App!</a>
        </button>
        <button class="card-action app-link">
          <a href="https://github.com/kiri-smith/note-taker" target="_blank" rel="noreferrer" class="big-link">View
            the
            code!</a>
        </button>
      </div>
      <div class="management-app card col lg6 m6 s12">
        <h6>README Generator</h6>
        <img src={readmeGenerator} alt="README Generator App"
          class="picture-format"></img>
        <button class="card-action app-link">
          <a href="https://watch.screencastify.com/v/82NR27gUrYBzt9ccy5Wj" target="_blank" rel="noreferrer" class="big-link">App Demo</a>
        </button>
        <button class="card-action app-link">
          <a href="https://github.com/kiri-smith/readme-generator" target="_blank" rel="noreferrer" class="big-link">View
            the
            code!</a>
        </button>
      </div>
      <div class="management-app card col lg6 m6 s12">
        <h6>Workday Scheduler</h6>
        <img src={workdayScheduler} alt="Workday Scheduler"
          class="picture-format"></img>
        <button class="card-action app-link">
          <a href="https://kiri-smith.github.io/work-day-scheduler/" target="_blank" rel="noreferrer" class="big-link">Explore the App!</a>
        </button>
        <button class="card-action app-link">
          <a href="https://github.com/kiri-smith/work-day-scheduler" target="_blank" rel="noreferrer" class="big-link">View
            the
            code!</a>
        </button>
      </div>
    </div>
  );
}

export default MyWork;
