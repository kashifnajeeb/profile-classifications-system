import profiles from "./profiles.js";

const categories = Array.from(
  new Set(profiles.map((profile) => profile.itSkills).flat())
);

const cardsContainer = document.querySelector(".cardsContainer");
const categoriesList = document.querySelector("#categories-list");

profiles.forEach(
  (profile) =>
    (cardsContainer.innerHTML += `
  <figure class="cardContainer">
  <img loading="lazy" alt=${profile.name} src=${profile.img}  />
  <figcaption class="informations">
    <span>Name: ${profile.name}</span>
    <span>Age: ${profile.age} </span>
    <span>Gender: ${profile.gender} </span>
    <span>Hobbies: ${profile.hobbies}  </span>
    <span>IT Skills: ${profile.itSkills} </span>
  </figcaption>
</figure>`)
);

categories.forEach((category) => {
  return (categoriesList.innerHTML += `<li>
<label for=${category}>
  <input class="categories-filter-input" type="checkbox" id=${category} name=${category} />
  <span>${category}</span>
</label>
</li>`);
});

const inputBoxes = categoriesList.querySelectorAll(".categories-filter-input");

inputBoxes.forEach((inputBox) => {
  inputBox.addEventListener("change", () => {
    console.log(inputBox.getAttribute("id"), inputBox.checked);
  });
});
