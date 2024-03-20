// Fonction pour basculer entre les catégories de menu
function toggleCategory(categoryId) {
    var categories = document.querySelectorAll('.menu');

    // Parcourir toutes les catégories
    categories.forEach(function(cat) {
        // Cacher toutes les catégories sauf celle cliquée
        if (cat.id === categoryId) {
            cat.style.display = "block";
        } else {
            cat.style.display = "none";
        }
    });
}

// Appeler toggleCategory avec l'ID de la catégorie "entrees" lorsque la page est chargée
document.addEventListener("DOMContentLoaded", function() {
    toggleCategory('entrees');
});
