// Fonction qui calcule la moyenne d'un tableau de notes
function mean(scores) {
    if (scores.length === 0) return 0; // éviter division par zéro
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

// Exporter la fonction pour pouvoir l'importer dans un autre fichier
module.exports = { mean };


