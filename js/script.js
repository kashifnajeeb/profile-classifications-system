import profiles from "./profiles.js";

const categoriesSet = new Set(profiles.flatMap((profile) => profile.itSkills));
const cardsContainer = document.querySelector(".cardsContainer");
const categoriesList = document.querySelector("#categories-list");

const renderedProfileNames = new Set();

const renderCards = (profile) => {
  if (!renderedProfileNames.has(profile.name)) {
    cardsContainer.innerHTML += `
      <figure class="cardContainer">
        <img loading="lazy" alt=${profile.name} src=${profile.img} />
        <figcaption class="informations">
          <span>Name: ${profile.name}</span>
          <span>Age: ${profile.age} </span>
          <span>Gender: ${profile.gender} </span>
          <span>Hobbies: ${profile.hobbies.join(", ")} </span>
          <span>IT Skills: ${profile.itSkills.join(", ")} </span>
        </figcaption>
      </figure>`;
    renderedProfileNames.add(profile.name);
  }
};

const clearCards = () => {
  cardsContainer.innerHTML = "";
  renderedProfileNames.clear();
};

categoriesSet.forEach((category) => {
  categoriesList.innerHTML += `
    <li>
      <label for="${category}">
        <input class="categories-filter-input" type="checkbox" id="${category}" name="${category}" />
        <span>${category}</span>
      </label>
    </li>`;
});

const inputBoxes = categoriesList.querySelectorAll(".categories-filter-input");

inputBoxes.forEach((inputBox) => {
  inputBox.addEventListener("change", () => {
    clearCards();

    inputBoxes.forEach((box) => {
      if (box.checked) {
        const filteredProfiles = profiles.filter((profile) =>
          profile.itSkills.includes(box.getAttribute("id"))
        );

        filteredProfiles.forEach((profile) => renderCards(profile));
      }
    });
  });
});
