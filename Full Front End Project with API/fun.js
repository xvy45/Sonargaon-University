// function handalSearch(){
//     const SearchInputElement = document.getElementByIdd('search_input_filed');
//     const searchInputValue = searchInputElament.value;

//     loadPhone =(searchInputValue);
// }

// const loadPhone = async(searchText) => {
//     const res = await fetch(
//         `https://openapi.programming-hero.com/api/phone?search=${searchTex}`
//     );

//     console.log("Server Response: ", res);
//     const serverData = await res.json();
//     displayPhone(serverData.data);
// };

// const displayPhone = (data) => {
//     // console.log("Inside displayPhone function: ", data);
//     const cardContaner = document.getElementById("Card_Section");

//     cardContaner.innerHTML = "";
//     data.array.forEach( Phone => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("card");
//         console.log(productCard);

//         productCard.innerHTML= `
//         <div class="card_img">
//                 <img src=${phone.image} alt="phone-img" />
//             </div>
//             <div>
//                 <h3 class="cardTitle"> ${Phone.phone_name}</h3>
//                 <p class="cardDecraption">There are many variations of passages of available, but the majority have suffered</p>
//             </div>
//             <div class="card_prize">
//                 <span>$</span>
//                 <span id="card_item_Prize">999</span>
//             </div>
//             <div class="card_btn">
//                 <button class="btn">Show Details</button>
//             </div>
//         `;
//         cardContaner.appendChild(productCard);
//     });
// };


function handalSearch(){
    const searchInputElament = document.getElementById('search_input_filed');
    console.log(searchInputElament)
}


