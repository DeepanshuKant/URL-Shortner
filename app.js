const hamburger = document.querySelector('.nav_ham_bar')
const mobileNav = document.querySelector('.nav__bar__mobile')

const shortbtn = document.querySelector('.sub_btn')
const urlInput = document.querySelector('.url_input')

const shortedLinkParent = document.querySelector('.link_parent')


shortedLinkParent.addEventListener('click', (event) => {


    const target = event.target;

    if (target.matches('li')) {

        navigator.clipboard.writeText(target.innerText);

        // Alert the copied text
        alert("Copied the text: " + target.innerText);
    }


})



function processRequest(inputValue) {

    fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        .then(function (response) {
            return response.json();
        })
        .then((data) => {
            // console.log(data.result.short_link);

            const liChild = document.createElement('li');
            liChild.classList.add('link_child');
            liChild.innerText = `${data.result.short_link}`;

            shortedLinkParent.appendChild(liChild);
        })
        .catch((error) => {
            alert(error.message)
        })

}


function getWorkDone() {

    if (!urlInput.value || urlInput.value == ' ') {
        alert('Please enter a valid URL')
    }
    else {
        processRequest(urlInput.value);
    }

}


shortbtn.addEventListener('click', function () {

    getWorkDone();

})


hamburger.addEventListener("click", function () {
    mobileNav.classList.toggle('change_mob_nav')
})





