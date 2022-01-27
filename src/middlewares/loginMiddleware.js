// Middleware est un principe de Redux, il est placé en entrée du store
// Il voit passer toutes les actions avant qu'elles arrivent au reducer
// Cela permet de gérer les traitements asynchronnes comme les traitements API 

// Il réagit à certaines actions par exemple en envoyant des requêtes à une API 

// Un premier middleware pas très utile, qui va juste logguer les actions qui passent 

/*
Triple fléchée : on a trois informations disponibles
  - on a accès au store 
  - next => fonction qui permet de transmettre l'action au suivant càd au middleware suivant ou au reducer si c'est le dernier middleware 
  -l'action qui vient d'être dispatchée 
*/

const logMiddleware = (store) => (next) => (action) => {
  //console.log('logMiddleware', action); 

  // On passe l'action au suivant

  next(action);
}; 

export default logMiddleware; 
