// Sélectionne les éléments principaux
const addBtn = document.querySelector('#btn');
const tasksContainer = document.querySelector('#todoCards');
const countDiv = document.querySelector('#count');

// Initialise le compteur lors du chargement de la page
updateTaskCount();

// Fonction pour supprimer une tâche
function deleteTask(task) {
    if (task) {
        task.remove(); 
        // Supprime la tâche
        updateTaskCount(); 
        // Met à jour le compteur
    }
}

// Fonction pour ajouter une tâche
function addTask() {
    const taskCard = document.querySelector('.todoCard'); 
    // Sélectionne la carte modèle
    if (taskCard && tasksContainer) {
        const newTask = taskCard.cloneNode(true); 
        // Clone la carte modèle
        const newDelBtn = newTask.querySelector('.delBtn'); 
        // Bouton de suppression
        const newTextArea = newTask.querySelector('.task'); 
        // Zone de texte

        // Réinitialise les valeurs de la nouvelle tâche
        newTextArea.value = 'New Task';

        // Ajoute un événement au bouton de suppression de la nouvelle tâche
        newDelBtn.addEventListener('click', function () {
            deleteTask(newTask); 
            // Supprime la nouvelle tâche
        });

        // Ajoute la nouvelle tâche au conteneur
        tasksContainer.appendChild(newTask);
        updateTaskCount(); 
        // Met à jour le compteur
    }
}

// Fonction pour mettre à jour le compteur des tâches
function updateTaskCount() {
    const taskCount = tasksContainer.querySelectorAll('.todoCard').length; 
    // Compte les cartes de tâche
    countDiv.textContent = `Number of tasks: ${taskCount}`; 
    // Met à jour l'affichage du compteur
}

// Ajoute les événements
if (addBtn) {
    addBtn.addEventListener('click', addTask); 
    // Ajoute une nouvelle tâche au clic
}

// Fonction pour initialiser le compteur lors du chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    updateTaskCount();
});






 














