//Get all page sections
const AllSections = document.querySelectorAll('section');

//Select the <ul> by its id
const navBar = document.getElementById('navbar__list');



//Create iterable array
const navLength = [1, 2, 3, 4, 5];

//Function that will create all the nav <li> elements
const addNavElements = () => {
    //Iterate through the array
    for(let i = 1; i < navLength.length; i++) {
        //Create 4 new <li> elements
        const newElement = document.createElement('li');
        //Add text
        newElement.innerHTML = 'Section  ' + [i];
        //Add class
        newElement.classList.add('menu__link');
        //Add the href to each of the sections
        newElement.addEventListener('click', () => {
            window.location.href = '#section' + [i];
        });
        //Insert the new elements in the nav bar
        navBar.insertAdjacentElement('beforeend', newElement);
    }
};

addNavElements();

//Add highlighting on scroll using IntersectionObserver
//Add options to improve the user scroll experience by setting the top & bot root margins
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "-250px 0px -250px 0px"
};

//Create the IntersectionObserver function
const observer = new IntersectionObserver(function(entries, observer) {
    //Iterate over each entry
    entries.forEach(entry => {
        //For each entry, when the entry is intersecting with any of the sections we add the active class
        if (entry.isIntersecting === true) {
            entry.target.classList.add('active__section');
        } else {
            //If the entry is no longer intersecting then we remove the class and therefore the styling    
            if (entry.isIntersecting === false) {
                entry.target.classList.remove('active__section');
            }
        }
    
    });
}, options);

//We apply the observer to every section
AllSections.forEach(section => {
    observer.observe(section);
});

//Create a back to top text in the footer
const pageFooter = document.querySelector('.page__footer');
//Create the text tag + add the href
const backToTop = () => {
    const navElement = `<p><a class="footer__link" href="#top">Back to Top</a></p>`;
    pageFooter.insertAdjacentHTML('beforeend', navElement);
};

backToTop();
