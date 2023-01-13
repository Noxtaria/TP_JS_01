let choix, affichage;

let annuaire = [
  {
    nom: "Dupont",
    prenom: "Jean",
    age: 15,
  },
  {
    nom: "Durant",
    prenom: "Pierre",
    age: 16,
  },
  {
    nom: "Martin",
    prenom: "Jean",
    age: 17,
  },
];

menu = () => {
    const tableau = `Faites votre choix : 
    1) Afficher la liste des contacts
    2) Ajouter un contact
    3) Supprimer un contact
    4) Quitter
    `;

choix = prompt(tableau);
}

menu();

afficherContact = () => {
    // for(let contacts of annuaire) {
    //     console.table(contacts)
    // }
    console.table(annuaire)

    menu()

}

ajouterContact = () => {
    let nomSaisi = prompt("Veuillez saisir un nom : ");
    let prenomSaisi = prompt("Veuillez saisir un prenom : ");
    let ageSaisi = Number(prompt("Veuillez saisir un age : "));

    let newContact = {};

    newContact.nom = nomSaisi;
    newContact.prenom = prenomSaisi;
    newContact.age = ageSaisi;
    annuaire.push(newContact);

    return annuaire + afficherContact();

}


supprimerContact = (annuaire) => {

  
  let nomSaisi = prompt("Veuillez saisir le nom de la personne à supprimer : ");
  let index = -1;
  for(let i = 0; i < annuaire.length; i++) {
    if(annuaire[i].nom == nomSaisi) {
      index = i;
    }
  }
  if(index > -1) {
    annuaire.splice(index, 1);
  }

    return annuaire + afficherContact();

    
}

quitter = () => alert("Au revoir");

switch (choix) {
  case "1":
    contact = afficherContact();
    break;
  case "2":
    contact = ajouterContact();
    break;
  case "3":
    contact = supprimerContact(annuaire);
    break;
  case "4":
    contact = quitter();
    break;
  default:
    contact = "Inconnu";
    break;
}

