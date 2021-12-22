const arrayCards = [
   {
      name: "Burger1",
      description: "deliceuse trache de lard avec sa sauce bbq!",
      img: "./img/mae-mu-I7A_pHLcQK8-unsplash.jpg"
   },
   {
      name: "Burger2",
      description: "deliceuse trache de lard avec sa sauce bbq!",
      img: "./img/nicholas-grande-d9jcPTRD9fo-unsplash.jpg"
      
   },
   {
      name: "Burger3",
      description: "deliceuse trache de lard avec sa sauce bbq!",
      img: "./img/sahal-hameed-Nq9KlQTTEbQ-unsplash.jpg"
   },
   {
      name: "Burger4",
      description: "deliceuse trache de lard avec sa sauce bbq!",
      img: "./img/zoran-borojevic-cvHxQExdKw8-unsplash.jpg"
   }

]

const cardsContainer = document.querySelector(".cards-container");

window.addEventListener("DOMContentLoaded", function () {
   let displayCard = arrayCards.map(function (item) {
      return `
      <div class="card">
         <img src="${item.img}" class="card-img-top" alt="${item.name}">
         <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
         </div>
      </div>`;
   });
   displayCard = displayCard.join("");
   cardsContainer.innerHTML = displayCard;
});
// for (let arrayCard of arrayCards){
//    console.log("mon burger" + arrayCard.name );
// }