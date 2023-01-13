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
    for(let contacts of annuaire) {
        console.table(contacts)
    }

    menu();
}

ajouterContact = () => {
    let nom = prompt("Veuillez saisir un nom : ");
    let prenom = prompt("Veuillez saisir un prenom : ");
    let age = prompt("Veuillez saisir un age : ");

    let newContact = {};

    newContact.nom = nom;
    newContact.prenom = prenom;
    newContact.age = age;
    annuaire.push(newContact);

    return annuaire + afficherContact();

}


supprimerContact = () => {

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
    contact = supprimerContact();
    break;
  case "4":
    contact = quitter();
    break;
  default:
    contact = "Inconnu";
    break;
}

