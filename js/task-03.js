const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

 const listGallery = document.querySelector('#gallery');
 const makeItemsMarkup = ({url,alt}) =>{
	 return`

	 <li class="gallery__item">
	 <img src="${url}" alt="${alt}" 
	 width="380px" height="300px">
    </li>
	 `
 }
 const itemGalery= images
 .map(makeItemsMarkup)
 .join('')
console.log(itemGalery);

listGallery.insertAdjacentHTML("beforeend" ,itemGalery)
gallery.style.marginTop = '40px';
gallery.style.display = 'flex';
gallery.style.flexDirection='column';
gallery.style.padding = '0';
gallery.style.listStyle = 'none';
console.log(listGallery);
