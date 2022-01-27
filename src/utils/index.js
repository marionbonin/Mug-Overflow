/* eslint-disable import/prefer-default-export */
/* ESLint nous conseille l'export par défaut => on refuse, parce que plus tard on
rajoutera peut-être d'autres fonctions ici */

// une fonction qui retourne le prochain id par rapport à un tableau d'objets qui
// ont une propriété
export const getNextId = (dataArray) => {
  // cas particulier si le tableau est vide
  let highestId = 0;

  if (dataArray.length > 0) {
    // récupérer tous les id dans un tableau
    const ids = dataArray.map((item) => item.id);
    // par exemple on a [45, 25, 5]

    // récupérer l'id maximum du tableau
    // équivalent du résultat du spread operator : Math.max(45, 25, 5)
    highestId = Math.max(...ids);
  }

  // +1 sur l'id maximum
  return highestId + 1;
};
