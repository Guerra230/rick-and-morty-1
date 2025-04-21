const galeria = document.getElementById("postContainer");

for (let index = 1; index <= 826; index++) {
const imageURL = `https://rickandmortyapi.com/api/character/avatar/${index}.jpeg`;
const name = `Character ${index}`;
const message = `Esta es mi publicación número ${index}. Esto es una prueba de generación de relleno por medio de funciones y ciclos.`;


const div = document.createElement("div");
div.classList.add("post");


const img = document.createElement("img");
img.setAttribute("src", imageURL);
img.setAttribute("alt", name);
div.append(img);


const h3 = document.createElement("h3");
h3.innerText = name;
div.append(h3);


const p = document.createElement("p");
p.innerText = message;
div.append(p);





galeria.append(div);
}