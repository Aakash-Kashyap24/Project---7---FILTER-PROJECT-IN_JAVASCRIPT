// console.log("HHHHHHHHHHHHHH");

// console.log(imageBox);

let imageStore = Array.from(document.querySelectorAll('.imgBoxImg'));
let imagess = [];
imageStore.forEach((value, index, array) => {
    imagess.push(value.src);
})
let imageSectionStore = document.querySelector('.imgSectionStore');
let imageContainerBox = Array.from(document.querySelectorAll('.imgContainerBox'));
let leftBtn = document.querySelector('.leftBtn');
let rightBtn = document.querySelector('.rightBtn')
let close = document.querySelector('.closeBtn')
let popUp = document.querySelector(".popUp");
let showOrNot = document.querySelector(".showOrNot");
// let 
let option = Array.from(document.querySelectorAll(".chooseAlldiv"))
let imageBox = Array.from(document.querySelectorAll(".imgBox"));
let clicked = document.querySelector(".clicked")
let count = 0;
// console.log(imageStore[0].classList);
console.log(option);

console.log(imageBox);




imageContainerBox.forEach((value, index, array) => {
    value.addEventListener('click', (Element) => {
        let imgId = Element.target.classList;
        let imgSrc = Element.target.src;

        popUp.style.backgroundImage = `url(${imgSrc})`;
        imagess.forEach((value, index, array) => {
            if (value == imgSrc) {
                count = index;
            }
        })
        // console.log(imgId);
        showOrNot.style.display = "flex";


    })
})




close.addEventListener('click', () => {
    showOrNot.style.display = "none";

})



leftBtn.addEventListener('click', () => {


    // console.log("left clicked")
    if (count > 0) {

        count--;

    }
    else {
        count = imagess.length;
    }

    popUp.style.backgroundImage = `url(${imagess[count]})`;

})

rightBtn.addEventListener('click', () => {

    // console.log("right clicked")

    if (count < imagess.length) {

        count++;

    }
    else {
        count = 0;
    }

    popUp.style.backgroundImage = `url(${imagess[count]})`;

});


let all = true;
option.forEach((value, index, array) => {
    value.addEventListener('click', (Element) => {

        let btnName = Element.target.id;
        let btnValue = document.getElementById(`${btnName}`).innerHTML;
        console.log(Element.target.classList)

        if (btnValue == "ALL") {

            if (all) {
                imageBox.forEach((value, index, array) => {


                    value.style.display = 'none'

                })
                all = false;
                value.classList.remove("clicked")
            }
            else {
                imageBox.forEach((value, index, array) => {


                    value.style.display = 'block'

                })
                all = true;
                value.classList.add("clicked")

            }


        }
        else if (btnValue != "ALL") {
            imageBox.forEach((value, index, array) => {


                value.style.display = 'none'

            })
            console.log("clicked Herrr")
            all = false;
            // value.style.display = 'none'


        }

        if (btnValue == "CAKES") {
            imageBox.forEach((value, index, array) => {

                let imgTexts = value.children[1].firstElementChild.innerHTML.toUpperCase().replace("ITEM",'');
                let imgText = imgTexts.split(" ").join('');
                // console.log(imgText,btnValue);
                // console.log(imgText.length, btnValue.length);

                if (imgText==btnValue) {
                    console.log("reached Here")
                    value.style.display='inline-block'
                }
            })
        }

        // if (btnValue == "CAKES") {
        //     imageBox.forEach((value, index, array) => {

        //         let imgTexts = value.children[1].firstElementChild.innerHTML.toUpperCase().replace("ITEM", '');
        //         let imgText = imgTexts.split(" ").join('');
        //         // console.log(imgText,btnValue);
        //         // console.log(imgText.length, btnValue.length);

        //         if (imgText == btnValue) {
        //             console.log("reached Here")
        //             value.style.display = 'inline-block'
        //         }
        //     })
        // }

        if (btnValue == "DAUGHTNUT") {
            imageBox.forEach((value, index, array) => {

                let imgTexts = value.children[1].firstElementChild.innerHTML.toUpperCase().replace("ITEM", '');
                let imgText = imgTexts.split(" ").join('');
                // console.log(imgText,btnValue);
                // console.log(imgText.length, btnValue.length);

                if (imgText == btnValue) {
                    console.log("reached Here")
                    value.style.display = 'inline-block'
                }
            })
        }


        if (btnValue == "SWEETS") {
            imageBox.forEach((value, index, array) => {

                let imgTexts = value.children[1].firstElementChild.innerHTML.toUpperCase().replace("ITEM",'');
                let imgText = imgTexts.split(" ").join('');
                // console.log(imgText,btnValue);
                // console.log(imgText.length, btnValue.length);

                if (imgText==btnValue) {
                    console.log("reached Here")
                    value.style.display='inline-block'
                }
            })
        }


        if (btnValue == "CUPCAKES") {
            imageBox.forEach((value, index, array) => {

                let imgTexts = value.children[1].firstElementChild.innerHTML.toUpperCase().replace("ITEM", '');
                let imgText = imgTexts.split(" ").join('');
                // console.log(imgText,btnValue);
                // console.log(imgText.length, btnValue.length);

                if (imgText == btnValue) {
                    console.log("reached Here")
                    value.style.display = 'inline-block'
                }
            })
        }
    })
})

