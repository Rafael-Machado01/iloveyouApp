






document.addEventListener('DOMContentLoaded', (event) => {
const noButton = document.querySelector('#no');
   const counterElement = document.querySelector("#counter");
   let count = parseInt(localStorage.getItem('count')) || 0;

   counterElement.innerText = `Você tentou o não ${count} vezes`;

   if (noButton) {
      noButton.addEventListener('mouseover', function() {
         count++;
         localStorage.setItem('count', count);
         counterElement.innerText = `Você tentou o não ${count} vezes`;

         let h = window.innerHeight - 50;
         let w = window.innerWidth - 50;

         this.style.position = "absolute";
         this.style.top = Math.random() * h + 'px';
         this.style.left = Math.random() * w + 'px';
      });
   } else {
      console.error('Elemento #no não encontrado.');
   }
});
