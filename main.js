"use strict";

// const gotPersonajesApi = fetch("https://thronesapi.com/api/v2/Characters")
//   .then((response) => response.json())
//   .then((data) => data);

const modalImg = document.querySelector(".modal-img > img");
const modalTitle = document.querySelector(".modal-title");
const modalDato1 = document.querySelector(".modal-dato1");
const modalDato2 = document.querySelector(".modal-dato2");
const modalDato3 = document.querySelector(".modal-dato3");
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
          personaje.family,
          personaje.id
        )
      );

      const btnVerMas = document.querySelector(`#personaje${personaje.id}`);
      btnVerMas.addEventListener("click", () => {
        modalImg.src = personaje.imageUrl;
        modalTitle.innerHTML = personaje.firstName;
        modalDato1.innerHTML = personaje.fullName;
        modalDato2.innerHTML = personaje.title;
        modalDato3.innerHTML = personaje.family;
        localStorage.setItem(personaje.fullName, personaje.fullName);
      });
    });
    return data;
  });

const templateCardsPersonajes = function (img, nombreCompleto, familia, id) {
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
                  id="personaje${id}"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>`;
};
