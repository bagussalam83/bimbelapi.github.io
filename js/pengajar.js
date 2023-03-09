// modal 1
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("pengajar-card-img")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("pengajar-modal")
    );
    myModal.show();
  }
});

// modal 2
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("pengajar-card-img-2")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img-2").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("pengajar-modal-2")
    );
    myModal.show();
  }
});

// modal 3
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("pengajar-card-img-3")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img-3").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("pengajar-modal-3")
    );
    myModal.show();
  }
});

// modal 4
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("pengajar-card-img-4")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img-4").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("pengajar-modal-4")
    );
    myModal.show();
  }
});

// modal 5
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("pengajar-card-img-5")) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img-5").src = src;
    const myModal = new bootstrap.Modal(
      document.getElementById("pengajar-modal-5")
    );
    myModal.show();
  }
});
