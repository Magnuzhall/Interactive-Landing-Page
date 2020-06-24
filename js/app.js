//Get all sections page sections
const AllSections = document.querySelectorAll('section');

//Select the <ul> by its id
const navBar = document.getElementById('navbar__list');

//Create all the <li> elements adding the class already being used in the css doc and link with the corresponding id
const navElements = (element) => {
    const navElement = `<li><a class="menu__link" href="#${element.id}">${element.id}</a></li>`;
    navBar.insertAdjacentHTML('beforeend', navElement);
};

//Add each nav bar <li> element to the corresponding section in the array
AllSections.forEach(element => {
    navElements(element);
});

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