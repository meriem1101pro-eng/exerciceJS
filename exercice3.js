const inscriptions = [
  { id: 10, nom: 'Rami', filiere: 'DEV' },
  { id: 11, nom: 'Kamali', filiere: 'DEV' },
  { id: 12, nom: 'Fahmi', filiere: 'DEV' },
  { id: 13, nom: 'Chaouki', filiere: 'DEV' }
];

const notes = [
  { id: 10, module: 'Algorithme', note: 15 },
  { id: 10, module: 'POO', note: 17 },
  { id: 11, module: 'Algorithme', note: 16 },
  { id: 11, module: 'POO', note: 14 }
];

const personne = { id: 10, nom: 'Rami' };

// --- 1. Ajouter une inscription ---
function pureAddInscription(nouvelle) {
  return [...inscriptions, nouvelle];
}

// --- 2. Supprimer une inscription par ID ---
function pureDeleteFonction(id) {
  return [...inscriptions.filter(ins => ins.id !== id)];
}

// --- 3. Modifier une note (POO de l'étudiant id=10) ---
function pureUpdateNote(id, module, note) {
  return [
    ...notes.filter(n => !(n.id === id && n.module === module)),
    { id, module, note }
  ];
}

// --- 4. Ajouter un attribut "age" à un objet ---
function addAge(age) {
  return { ...personne, age };
}

// --- Tests ---
console.log("=== Ajout ===");
console.log(pureAddInscription({ id: 14, nom: 'Sara', filiere: 'DEV' }));

console.log("\n=== Suppression (id=12) ===");
console.log(pureDeleteFonction(12));

console.log("\n=== Modification (id=10, POO → 18) ===");
console.log(pureUpdateNote(10, 'POO', 18));

console.log("\n=== Ajout d'âge ===");
console.log(addAge(33));

console.log("\n=== Originaux inchangés ===");
console.log("inscriptions :", inscriptions);
console.log("notes :", notes);
console.log("personne :", personne);