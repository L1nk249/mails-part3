//Bases de la partie II de l'exercice; aujourd'hui nous voyons la partie III)

const newMessage = ` 
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>New message</p>
    </div>
    <span class="delete">✖</span>
  </div>
`;

document.querySelector("#msg-container").innerHTML += newMessage;

const messagesCount = document.querySelectorAll("p").length;
document.querySelector("#count").textContent = messagesCount;

//👉  Capter les clics de chaque picto “X”.

function erase() {
  const suppr = document.querySelectorAll(".delete");
  for (let i = 0; i < suppr.length; i++) {
    suppr[i].addEventListener("click", function () {
      console.log(suppr[i]);

      /*👉 Coder l’instruction de suppression de message  (nom, prénom, avatar, texte, picto poubelle) grâce au DOM. 
Pensez également à mettre à jour le compteur 😉*/

      const dlt = document.querySelectorAll(".row");
      for (let j = 0; j < dlt.length; j++) {
        dlt[j].addEventListener("click", function () {
          dlt[j].remove();
          //Pensez également à mettre à jour le compteur 😉
          let messagesCount = document.querySelectorAll("p").length;
          document.querySelector("#count").textContent = messagesCount;
        });
      }
    });
  }
}

erase();

/*Lors de la journée d’hier, vous avez matérialisé un message en javascript. Vous allez maintenant pouvoir relier la création de ce nouveau message à un événement.


 Au clic sur le bouton “Add”, vous devez créer un nouveau message ayant pour contenu la valeur écrite dans le champ de saisie.
 👉 Grâce à la notion d'événement, apposez une écoute sur le bouton “Add" afin de détecter les clics de l'utilisateur.
 👉 Lorsque le clic sur le bouton “Add” est capté, récupérez la valeur du champ input et assignez la à une nouvelle variable nommée “message”.
 */

function addMessage() {
  const button = document.querySelector("#btn-add");
  button.addEventListener("click", () => {
    let mess = document.getElementById("add-message");
    let message = mess.value;
    /* Ajouter le message à la liste
👉 A la suite, toujours dans la fonction de l’événement du clic sur le bouton “add”,  matérialisez votre nouveau message dans la liste. */
    document.querySelector("#msg-container").innerHTML += `
  <div class="row new-row">
    <img class="avatar" src="images/avatar-1.jpg" />
    <div class="text-container">
      <h6>John Doe</h6>
      <p>${message}</p>
    </div>
    <span class="delete">✖</span>
  </div>`;

    /*un autre bug est apparu… Le nouveau message ajouté ne possède pas la fonctionnalité de suppression. En effet, lorsque l’on a ajouté le code pour créer un nouveau message, cette fonctionnalité n’existait pas encore. Il faut donc ajouter cette mécanique à ce nouveau message une fois qu’il a été créé.
👉 Remettez en place le mécanisme de suppression d’un message pour les messages nouvellement ajoutés.*/

    erase();

    /*Avec l’ajout de la nouvelle fonctionnalité, on constate qu’un bug est apparu. 🙄
Le compteur n’est plus à jour…
A vous de jouer pour faire en sorte que le nouveau message soit pris en compte! 💥
👉 Après avoir ajouté le message, ajoutez les instructions nécessaires pour mettre à jour le compteur.*/
    let messagesCount = document.querySelectorAll("p").length;
    document.querySelector("#count").textContent = messagesCount;

    /*Réinitialiser le champ de saisie
A ce stade, on constate que lorsque le message est ajouté à l’interface graphique, le texte est toujours présent dans le champ de saisie ce qui pose un problème d’ergonomie.
 👉Réinitialisez ce champ à chaque fois que le message est validé pour éviter de devoir le supprimer manuellement.*/

    mess.value = "";
  });
}

addMessage();

/* Le projet touche presque à sa fin mais un élément de la maquette n'est pas encore fonctionnel … la barre de recherche en haut de page.
Vous allez devoir apporter une dernière fonctionnalité au projet : un moteur de recherche permettant de filtrer les messages par nom et prénom.
👉 Grâce à la notion d'événement, apposez un écouteur sur le bouton “Search” afin de détecter les clics de l'utilisateur. */

const btnSearch = document.querySelector("#btn-search");

/*👉 Lorsque le clic sur le bouton “search” est capté, récupérez la valeur saisie dans le champ input et assignez la à une nouvelle variable nommée “textToCompare”
.*/

btnSearch.addEventListener("click", () => {
  let search = document.querySelector("#search-message");
  let textToCompare = search.value.toLowerCase();

  /*👉  Créez un algorithme permettant de comparer la valeur de la variable textToCompare avec les noms renseignés dans les messages. Si la valeur est incluse dans le titre des messages faites apparaître le message sinon faites le disparaître.
Attention : La recherche doit fonctionner même si l’utilisateur ne rentre qu’une partie des caractères du nom ou prénom !*/

  const user = document.querySelectorAll("h6");
  for (let i of user) {
    if (i.textContent.toLowerCase().includes(textToCompare.toLowerCase())) {
      i.parentNode.parentNode.style.display = "flex";
    } else {
      i.parentNode.parentNode.style.display = "none";
    }
  }
  search.value = "";
});
