import profiles from "./profiles.js";

const cardsContainer = document.querySelector(".cardsContainer");

profiles.forEach(
  (profile) =>
    (cardsContainer.innerHTML += `
  <figure class="cardContainer">
  <img alt=${profile.name} src=${profile.img}  />
  <figcaption class="informations">
    <span>Name: ${profile.name}</span>
    <span>Age: ${profile.age} </span>
    <span>Gender: ${profile.gender} </span>
    <span>Hobbies: ${profile.hobby}  </span>
    <span>IT Skills: ${profile.itSkills} </span>
  </figcaption>
</figure>`)
);
