"use strict";

const gotPersonajesApi = fetch("https://thronesapi.com/api/v2/Characters")
  .then((response) => response.json())
  .then((data) => data);

const templatePersonajes = function (img, nombreCompleto, familia) {
  ` <div class="pt-4 col-lg-4 col-md-6 col-sm-12">
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
