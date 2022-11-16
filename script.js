let filterClasses = Array.from(document.querySelectorAll(".imagesTag"));
let filterOption = document.querySelector(".filterOption");
let all = document.querySelector(".imagesTag0");
let images = Array.from(document.querySelectorAll(".imgBOxes"));
let searchInput = document.querySelector(".searchINput");
let searchBtn = document.querySelector(".searchBtn");
let img = Array.from(document.querySelectorAll(".images"));
console.log(img[0].firstElementChild.alt)
    // console.log(images)
let allSelected = true;

let values = ["all"];
// console.log(filterOption.childNodes.forEach((value, index, array) => {
//     console.log(value)
// }));
let displayImages = (name) => {
    console.log("Parent Nmaeeeeeeeeeeee")

    let planetName = Array.from(document.querySelectorAll(".planetName"));
    console.log(planetName[0].innerHTML)

    planetName.forEach((value, index, array) => {
        if (name == value.innerHTML) {
            console.log("Parent Nameeee " + name);
            value.parentElement.parentElement.style.display = "block"
            console.log()
        }
    })
}


document.addEventListener('click', (e) => {
    // Retrieve id from clicked element
    let elementId = e.target.id;
    let elementClass = e.target.classList;
    // If element has id
    if (e.target.classList.contains("imagesTag")) {

        if (!e.target.classList.contains("filterSelected") && e.target.classList.contains("imagesTag")) {

            if (!e.target.classList.contains('imagesTag0')) {
                e.target.classList.add("filterSelected");
                all.classList.remove("filterSelected")

                let va = e.target.innerText;
                displayImages(va)
                    // allSelected = false;
                    // console.log(allSelected)

                if (!values.includes(va)) {
                    let inputed = false;
                    if (values.length > 0) {
                        for (let index = 0; index < values.length; index++) {

                            if (values[index] == "") {
                                values[index] = va;
                                console.log("Entered '' Input Area")
                                inputed = true;
                                break;

                            }


                        }
                    }
                    if (inputed == false) {
                        console.log("Entered inputed false  Area")
                            // console.log("Entered '' Input Area")

                        values.unshift(va);

                    } else {
                        inputed = false;
                        console.log("Entered inputed true makiing  Area")

                    }

                }


            } else {
                allSelected = true;

                filterClasses.forEach((value, index, array) => {
                    values.forEach((value, index, array) => {
                        console.log(values)
                        console.log("Entered Crossing All shifting area")

                        array.shift();
                        console.log(values)

                    })
                    console.log("Entered value ,calsall")
                    value.classList.remove('filterSelected');


                    console.log(values)
                })
                console.log("Entered All classList " + all.classList)

                all.classList.add("filterSelected");

                console.log("Entered All classList " + all.classList)


            }
            console.log(values)
            console.log("ENtered Crossing All first Area")


        } else if (e.target.classList.contains("filterSelected") && e.target.classList.contains("imagesTag")) {
            console.log("ENtered filteredSelected area")

            if (!e.target.classList.contains('imagesTag0')) {
                console.log("removed", e.target.classList)
                console.log("ENtered filteredSelected none all area")
                allSelected = false;

                values.forEach((value, index, array) => {
                    if (e.target.innerText == value) {
                        console.log("Values " + values)
                        array.shift();
                        console.log(values)

                    }
                })

                e.target.classList.remove("filterSelected");
                console.log("removed", e.target.classList)
            } else {
                all.classList.add("filterSelected")
                allSelected = true;

            }





        }
    }


})




console.log(images)
let showImages = () => {
    images.forEach((value, index, array) => {
        console.log("images cccc")
        array[index].style.display = "block";
    })
}

let hideImages = () => {
    images.forEach((value, index, array) => {
        console.log("images Hide")
        array[index].style.display = "none";
    })
}
if (values[0] == "all" || values.length == 0) {
    showImages()
}

function normalFun() {
    if (values[0] == "all" || values.length == 0) {
        showImages()
    }
}

function searchFun() {
    console.log('all claseess   ' + all.classList.contains("filterSelected"))

    hideImages();


    console.log("HHHHHHHHHHHHHH")
    console.log(img)



    // }

}