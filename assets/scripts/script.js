let dropdownList = document.querySelectorAll(".dropdown__list");
    
function AddFilter(dropdown, filter){
    filter.Code = 
    `<li class="dropdown__list__item">
        ${filter.Type}
        <span class="list__item__count">
            (${filter.Count})
        </span>
    </li>`;

    dropdown.innerHTML += filter.Code;
}

dropdownList.forEach(element => {
    AddFilter(element, {Type: "Magenta ", Count: 1032});
    AddFilter(element, {Type: "Fuscia ", Count: 1032});
    AddFilter(element, {Type: "Burgundy ", Count: 1032});
});

let offers = [
    {
        Image: "assets/images/offer.jpg",
        Description: "SEXY BOI",
        Paragraph: "Wrangler small logo crew neck t-shirt in white",
        Price: "£16.63"
    },
    {
        Image: "assets/images/offer.jpg",
        Description: "SEXY BOI",
        Paragraph: "Wrangler logo chest stripe rugby polo in blue/white",
        Price: "£50.63"
    },
    {
        Image: "assets/images/offer.jpg",
        Description: "SEXY BOI",
        Paragraph: "Wrangler kobel retro large logo ringer t-shirt in white",
        Price: "£20.97"
    },
    {
        Image: "assets/images/offer.jpg",
        Description: "SEXY BOI",
        Paragraph: "Lyle & Scott polo in burgundy",
        Price: "£44.12"
    },
    {
        Image: "assets/images/offer.jpg",
        Description: "SEXY BOI",
        Paragraph: `<span class="item__paragraph__brand">COLLUSION</span> Unisex 
            long sleeve t-shirt with graphic print in neon green`,
        Price: "£12.29"
    },
    {
        Image: "assets/images/offer.jpg",
        Description: "SEXY BOI",
        Paragraph: `<span class="item__paragraph__brand">ASOS DESIGN</span> Disney 
            oversized t-shirt with rainbow`,
        Price: "£22.42"
    },
    {
        Image: "assets/images/offer.jpg",
        Description: "SEXY BOI",
        Paragraph: `<span class="item__paragraph__brand">COLLUSION</span> Unisex 
            oversized t-shirt with back print`,
        Price: "£10.12"
    },
    {
        Image: "assets/images/offer.jpg",
        Description: "SEXY BOI",
        Paragraph: `<span class="item__paragraph__brand">ASOS DESIGN</span> Mickey 
            reloxed t-shirt with retro print`,
        Price: "£18.08"
    }
]

function AddOfferItems(location, offersList){
    offersList.forEach(offer => {
        offer.Code = `<div class="offers__item">
        <img class="item__img" src="${offer.Image}" alt="Offer" />
        <img class="item__heart-shape" src="./assets/images/heart-shape.png" alt="Hearth Shape">
        <img class="item__heart-full" src="./assets/images/heart-full.png" alt="Hearth Full">
        <p class="item__img-description">${offer.Description}</p>
        <p class="item__paragraph">
            ${offer.Paragraph}
        </p>
        <span class="item__price">${offer.Price}</span>
      </div>`;

      location.innerHTML += offer.Code;
    });
}

AddOfferItems(document.querySelector(".main__offers"), offers);

let mainFavourites = document.querySelector(".main__favourites-found");
let offerItems = document.querySelectorAll(".offers__item");
let favourites = 0;
let numberPattern = /\d+/;

offerItems.forEach(offerItem => {
    offerItem.addEventListener("mouseover", function() {
        let itemDescription = offerItem.querySelector(".item__img-description");
        itemDescription.classList.add("item__img-description-hover");
    });

    offerItem.addEventListener("mouseout", function() {
        let itemDescription = offerItem.querySelector(".item__img-description");
        itemDescription.classList.remove("item__img-description-hover");
    });
    
    let itemHeart = offerItem.querySelector(".item__heart-full");

    itemHeart.addEventListener("click", function(event) {
        itemHeart.classList.toggle("item__heart-full-click");

        if(itemHeart.classList.contains("item__heart-full-click")){
            favourites++;
        }
        else{
            favourites--;
        }

        mainFavourites.innerHTML = `Favourites: ${favourites}`;

        event.stopPropagation();
    });


    offerItem.addEventListener("click", function() {
        let offerWindow = window.open("", "_blank");
        offerWindow.document.write(`<link rel="stylesheet" href="./assets/styles/main.css"/>
        <link rel="stylesheet" href="./assets/styles/common.css" />
        <main>
            <div class="main__offers">
        ${offerItem.outerHTML}
            </div>
        </main>`);
    });
})

