document.getElementById("fetchImage").addEventListener("click", fetchImage);
function fetchImage() {
  fetch("https://picsum.photos/v2/list?limit=100")
    .then((response) => response.json())
    .then((images) => {
      let output = ""; 
      let randomImages = []; 

      images.forEach(function (image) {
        randomImages.push(image); 
      });

      for (let i = 0; i < 1; i++) {
        const j = Math.floor(Math.random() * (99 - 0) + 1); 

        //access image info via console.
        const display = randomImages[j];
        console.log(display);

        //generates the HTML needed to display random image with info
        output += `
      <div>
        <h2 class="center">Author: ${display.author}</h2>
        <p class="center">Image Id: ${display.id}</p>
        <img src="https://picsum.photos/id/${display.id}/${display.width}/${
          display.height
        }" width="${display.width}" height="${
          display.height
        }" class="center" alt="img${i + 1}">
      </div>
      `;
      }
      document.getElementById("response").innerHTML = output;
    });
}