const menuItems = document.getElementById('menu-items');
const blobMaker = document.getElementById('blobmaker');
const items = document.getElementById('items');
const back = document.getElementById('back');
const containerMenu = document.getElementById('container-menu');
const designList = [
    '<path fill="#e87d85" d="M20.6,-40.9C23.5,-33.9,20.5,-22,20.1,-14.4C19.7,-6.7,21.9,-3.4,31.1,5.3C40.3,14,56.5,28,55.1,32.5C53.7,36.9,34.6,31.9,22.4,27.4C10.3,23,5.2,19.2,-4.8,27.5C-14.7,35.8,-29.5,56.2,-41.6,60.6C-53.7,65,-63.3,53.5,-68.5,40.8C-73.8,28,-74.7,14,-64.1,6.1C-53.6,-1.8,-31.5,-3.7,-21.7,-8.5C-11.9,-13.3,-14.3,-21,-12.7,-28.7C-11.1,-36.4,-5.5,-44.1,1.6,-46.9C8.8,-49.7,17.6,-47.8,20.6,-40.9Z" transform="translate(100 100)" />',
    '<path fill="#e87d85" d="M28.8,-56C33.8,-46.9,31.9,-32.1,40.6,-21.8C49.3,-11.6,68.6,-5.8,75.2,3.8C81.8,13.4,75.8,26.9,68.2,39.1C60.7,51.4,51.6,62.5,40,61C28.3,59.5,14.2,45.4,3.5,39.4C-7.2,33.4,-14.5,35.5,-16.7,31.6C-18.9,27.6,-16,17.6,-25.5,11.4C-35,5.1,-56.8,2.5,-69,-7.1C-81.2,-16.6,-83.9,-33.3,-72.2,-35.8C-60.6,-38.3,-34.6,-26.7,-20.2,-30.3C-5.8,-34,-2.9,-52.9,4.5,-60.7C11.9,-68.4,23.7,-65.1,28.8,-56Z" transform="translate(100 100)" />',
    '<path fill="#e87d85" d="M31,-46.1C42.1,-47.3,54.4,-42.9,57.9,-34.3C61.3,-25.7,56,-12.8,58.3,1.3C60.6,15.5,70.5,31,69.9,44.4C69.2,57.9,57.9,69.2,44.4,67.7C31,66.2,15.5,51.7,3.3,45.9C-8.8,40.1,-17.6,43,-21.9,39.2C-26.1,35.4,-25.7,25,-27.6,17.4C-29.4,9.7,-33.6,4.9,-37.2,-2.1C-40.9,-9.1,-44.1,-18.2,-45.9,-32.1C-47.6,-46.1,-47.9,-64.8,-40,-65.5C-32.2,-66.2,-16.1,-48.8,-3.1,-43.5C10,-38.2,19.9,-45,31,-46.1Z" transform="translate(100 100)" />',
    '<path fill="#e87d85" d="M28.5,-49.6C35.8,-45.2,39.6,-35.2,47.9,-26C56.1,-16.8,68.6,-8.4,70.7,1.2C72.7,10.7,64.1,21.4,57.2,32.9C50.3,44.4,45.1,56.7,35.8,68C26.6,79.3,13.3,89.5,2.4,85.4C-8.5,81.3,-17,62.8,-28.1,52.5C-39.1,42.2,-52.6,40.2,-61.4,32.8C-70.1,25.4,-74.1,12.7,-74.3,-0.1C-74.4,-12.9,-70.7,-25.8,-62.7,-34.4C-54.7,-43.1,-42.3,-47.5,-31.1,-49.7C-20,-51.9,-10,-51.8,0.3,-52.3C10.6,-52.9,21.3,-54.1,28.5,-49.6Z" transform="translate(100 100)" />',
    '<path fill="#e87d85" d="M36.7,-65.8C47.6,-57.4,56.3,-47.5,65.7,-36.2C75.1,-25,85.2,-12.5,82.5,-1.6C79.8,9.4,64.3,18.8,54.5,29.4C44.8,40,40.7,51.7,32.6,57.3C24.5,62.9,12.2,62.3,-1.2,64.3C-14.5,66.3,-29.1,70.9,-39.4,66.6C-49.7,62.3,-55.9,49.1,-57.9,36.5C-59.8,23.9,-57.7,11.9,-61.4,-2.2C-65.1,-16.3,-74.8,-32.5,-71.6,-43C-68.4,-53.5,-52.4,-58.2,-38.3,-64.8C-24.2,-71.4,-12.1,-79.8,0.4,-80.5C13,-81.3,25.9,-74.3,36.7,-65.8Z" transform="translate(100 100)" />',
    '<path fill="#e87d85" d="M28.8,-56.4C37,-45.2,42.9,-36.7,47.9,-27.8C52.8,-18.8,56.8,-9.4,55.9,-0.5C54.9,8.3,49.2,16.7,46.5,29.6C43.8,42.4,44.2,59.8,36.9,68.8C29.7,77.8,14.9,78.3,-0.5,79.2C-15.8,80,-31.7,81.1,-42.1,74C-52.5,66.8,-57.4,51.4,-59.2,37.7C-61,24,-59.6,12,-57,1.5C-54.4,-9,-50.5,-17.9,-47.3,-29.2C-44,-40.4,-41.4,-53.8,-33.7,-65.2C-25.9,-76.6,-12.9,-85.9,-1.3,-83.7C10.3,-81.4,20.7,-67.6,28.8,-56.4Z" transform="translate(100 100)" />',
    '<path fill="#e87d85" d="M35.8,-65.1C46.8,-55.7,56.2,-46.8,64.1,-36C72.1,-25.3,78.4,-12.6,76.9,-0.9C75.4,10.9,66.1,21.8,58.7,33.5C51.3,45.3,46,57.8,36.5,62.8C27.1,67.8,13.6,65.2,1.5,62.6C-10.6,60.1,-21.2,57.6,-33.8,54.4C-46.4,51.3,-60.9,47.4,-71.5,38.2C-82.1,29,-88.9,14.5,-87.3,0.9C-85.7,-12.7,-75.8,-25.4,-67.6,-38.6C-59.3,-51.9,-52.6,-65.8,-41.6,-75.1C-30.6,-84.5,-15.3,-89.4,-1.4,-86.9C12.4,-84.4,24.9,-74.5,35.8,-65.1Z" transform="translate(100 100)" />',
    '<path fill="#e87d85" d="M42.9,-72.3C55.5,-67,65.5,-55.3,72.9,-42.2C80.4,-29,85.3,-14.5,84.4,-0.5C83.6,13.5,76.9,27.1,68.3,38.1C59.6,49.1,48.9,57.7,37.2,65.7C25.5,73.8,12.7,81.3,-0.2,81.7C-13.1,82,-26.3,75.1,-37.3,66.7C-48.3,58.2,-57.2,48.2,-65.6,36.8C-74,25.4,-81.9,12.7,-83.3,-0.8C-84.7,-14.3,-79.5,-28.6,-72.2,-41.9C-64.9,-55.3,-55.6,-67.7,-43.2,-73.1C-30.9,-78.5,-15.4,-76.9,-0.1,-76.6C15.2,-76.4,30.3,-77.6,42.9,-72.3Z" transform="translate(100 100)" />',
    '<path fill="#e87d85" d="M44,-75.7C57.9,-68.1,70.8,-58.2,79.1,-45.2C87.4,-32.2,91.2,-16.1,89.9,-0.7C88.7,14.7,82.4,29.3,74.2,42.5C66,55.7,55.8,67.4,43.1,74.9C30.4,82.4,15.2,85.8,-0.3,86.3C-15.8,86.9,-31.7,84.6,-45.4,77.6C-59.1,70.7,-70.8,59.1,-79.4,45.4C-88.1,31.7,-93.9,15.9,-93.3,0.3C-92.8,-15.2,-85.9,-30.4,-77.3,-44.3C-68.7,-58.1,-58.4,-70.7,-45.2,-78.7C-32,-86.8,-16,-90.3,-0.5,-89.4C15,-88.6,30,-83.3,44,-75.7Z" transform="translate(100 100)" />'
];

const deleteMenuStyles = ()=>{
    const inputElement = containerMenu.querySelector('input[type="checkbox"]');
    back.classList.add('hidden');
    menuItems.classList.add('hidden')
    containerMenu.classList.remove('hidden');
    blobMaker.classList.remove('hidden');
    items.classList.add('hidden')
    blobMaker.style.transform = '';
    if (inputElement.checked) {
        inputElement.checked = false;
    }

};


const renderBlobMaker = (label) => {
    const contenedorMenu = label.target.parentElement;
    
    
    let index = 0;
    if(blobMaker.style.transform){
        blobMaker.style.transform = '';
    }
    const renderNextShape = () => {

        if (index < designList.length) {
            blobMaker.innerHTML = designList[index];
            index++;
            if(index==9){
                blobMaker.style.transition = "1.5s ease all";
                blobMaker.style.transform ="scale(105)";
                setTimeout(()=>{
                    blobMaker.classList.add('hidden');
                    contenedorMenu.classList.add('hidden');
                    back.classList.remove('hidden');
                    items.classList.remove('hidden');
                },150);
            }
            setTimeout(renderNextShape, 150); // Llama a renderNextShape() nuevamente después de 1 segundo
        }
    };
    renderNextShape(); // Inicia la animación llamando a renderNextShape() por primera vez
};

const displayMenu = (e) => {
    const hamburgerMenu = e.target.attributes[0].nodeValue;
    if (hamburgerMenu != "checkbox") return;
    if (menuItems.classList.contains('hidden')) {
        menuItems.classList.remove('hidden');
        renderBlobMaker(e);
    }
}

const closeMenu = (e) => {
    const backMenu = e.target.id;
    if(backMenu != 'icon-back') return;
    deleteMenuStyles();
}


window.addEventListener('click', displayMenu, false);
window.addEventListener('click', closeMenu, false);