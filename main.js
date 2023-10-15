"use strict";

// const gotPersonajesApi = fetch("https://thronesapi.com/api/v2/Characters")
//   .then((response) => response.json())
//   .then((data) => data);

const containerCards = document.querySelector(".container-cards");

// const gotPersonajesApi = fetch("https://thronesapi.com/api/v2/Characters")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((personaje) => {
//       const personajes = personaje.fullName;
//       const familia = personaje.family;
//       console.log(personajes);
//       console.log(familia);
//     });
//   });

const gotPersonajesApi = fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((personaje) => {
      containerCards.insertAdjacentHTML(
        "beforeend",
        templateCardsPersonajes(
          personaje.imageUrl,
          personaje.fullName,
          personaje.family
        )
      );
    });
    return data;
  });

const templateCardsPersonajes = function (img, nombreCompleto, familia) {
  return `<div class="pt-4 col-lg-4 col-md-6 col-sm-12">
            <div class="card text-center">
              <img
                src="${img}"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h2 class="card-title">${nombreCompleto}</h2>
                <div class="row">
                  <p class="col-6"><strong>Familia:</strong></p>
                  <p class="col-6 card-description">${familia}</p>
                </div>
                <button
                  type="button"
                  class="btn btn-style"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
        `;
};
