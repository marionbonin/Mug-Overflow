/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 * on trouve la catégorie voulue dans la liste des catégories
 * @param {Array} categories - toutes les catégories
 * @param {string} searchedSlug - le slug de la catégorie recherchée
 * @return {Object} - La catégorie trouvée
 */

export function findCategory(categories, searchedSlug) {
  const category = categories.find((testedCategory) => {
    return testedCategory.slug === searchedSlug;
  });
  return category;
}
