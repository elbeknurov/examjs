const elData = document.querySelector(".father");
const elBtn = document.querySelector(".btn");
const elSearch = document.querySelector(".search");
const elEmail = document.querySelector("#form2");
const elForm = document.querySelector(".form-select");

//function
function render(items) {
  elData.textContent = "";
  items.forEach((element) => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.width = "18rem";
    div.innerHTML = `
                  <img
                  class="card-img-top "
                  src="https://img.freepik.com/free-vector/books-stack-realistic_1284-4735.jpg?w=740&t=st=1670614351~exp=1670614951~hmac=44bd91cb74b820673dc16f39ad43fccb1610e61a6c7c5368bc70455a1ba29ec5"
                  alt="Card image cap"
                  style="height: 225px; width: 100%;"
                  />
                  <div class="p-3" style="display: flex;
                  flex-direction: column;
                  justify-content: space-between; height:100%" >
                  <h5 class="card-title ">${element.name}</h5>
                  <p class="card-text ">${element.email}</p>
                  <p class="card-text ">${element.body}</p>
                  <button href="#" class="btn btn-primary" data-id="${element.id}" >Delete</button>`;
    elData.appendChild(div);
  });
}
render(data);

// search part
elSearch.addEventListener("input", () => {
  const value = elSearch.value;
  const filteredData = data.filter((element) => {
    console.log(element);
    if (element.name.toLowerCase().match(value.toLowerCase())) {
      return element;
    }
  });
  render(filteredData);
});

// search with email part
elEmail.addEventListener("input", () => {
  const value = elEmail.value;
  const filteredData = data.filter((element) => {
    console.log(element);
    if (element.email.toLowerCase().match(value.toLowerCase())) {
      return element;
    }
  });
  render(filteredData);
});

//delete part
elData.addEventListener("click", function (e) {
  const delet = e.target;
  if (delet.matches(".btn")) {
    const id = delet.dataset.id;
    const filteredArray = data.filter((item) => {
      if (item.id != Number(id)) {
        return item;
      }
    });
    data = filteredArray;
    render(data);
  }
});
