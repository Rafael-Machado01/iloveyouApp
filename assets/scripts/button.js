let count = 0;

document.addEventListener('DOMContentLoaded', function() {
   console.log("DOM Loaded");

   let no = document.querySelector('#no');

   if (no) {
      no.addEventListener('mouseover', function() {
         // Evento de Quando o Button com Id #no está no estado hover
         count++;
         console.log("Hover-Button #No");
         // Variavel do Contador é atualizada e contada
         localStorage.setItem('count', count);
         // O valor da variavel é guardada no armazenamento do navegador
         document.querySelector('#counter').innerText = `${count} Não`;
         // O elemento com id #counter é atualizado com o numero de vezes

         // Define que a aleatoriedade da posição nao pode passar do limite da tela e -50px do limite
         let h = window.innerHeight - 50;
         let w = window.innerWidth - 50;

         // A posição do Button é definida como absoluta e a aleatoriedade do eixo X e Y
         this.style.position = 'absolute';
         this.style.left = `${Math.floor(Math.random() * w)}px`;
         this.style.top = `${Math.floor(Math.random() * h)}px`;
      });
   } else {
      console.error('Elemento #no não encontrado.');
   }
});
