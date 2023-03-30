const validate = (values) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
  const linkedinRegex = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]+\/?$/;
  const githubRegex = /^https:\/\/github\.com\/[a-zA-Z0-9_-]+\/?$/;
  if (!values.firstname) {
    errors.firstname = "firstname is required";
  } else if (values.firstname.length < 3 || values.lastname.length > 100) {
    errors.firstname = "Il y a un problème avec votre prénom";
  }
  if (!values.lastname) {
    errors.lastname = "lastname is required";
  } else if (values.lastname.length < 3 || values.lastname.length > 100) {
    errors.lastname = "Il y a un problème avec votre nom de famille";
  }
  if (!values.email) {
    errors.email = "Mail is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Cette adresse mail n'est pas valide";
  }
  if (!values.phone) {
    errors.phone = "Phone is required";
  } else if (Number.isNaN(Number(values.phone))) {
    errors.phone = "Votre numéro de téléphone n'est pas un nombre";
  } else if (values.phone.length < 9 || values.phone.length > 11) {
    errors.phone = "Votre numéro de téléphone n'est pas valide";
  }
  if (!values.location) {
    errors.location = "location is required";
  } else if (values.location.length < 3 || values.location.length > 100) {
    errors.location = "Il y a un problème avec votre localisation";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 8) {
    errors.password = "Le mot de passe doit faire plus de 8 caractères";
  } else if (!passRegex.test(values.password)) {
    errors.password = "Ce mot de passe n'est pas valide";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Password confirmation is required";
  } else if (values.confirmPassword.length < 8) {
    errors.confirmPassword = "Le mot de passe doit faire plus de 8 caractères";
  } else if (!passRegex.test(values.confirmPassword)) {
    errors.confirmPassword = "Ce mot de passe n'est pas valide";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword =
      "Les 2 champs de mot de passe ne sont pas similaires";
  }
  if (values.age.length > 0 && Number.isNaN(Number(values.age))) {
    errors.age = "Vous n'avez pas inscrit un nombre";
  }
  if (values.linkedin.length > 0 && !linkedinRegex.test(values.linkedin)) {
    errors.linkedin = "Cette adresse linkedin n'est pas valide";
  }
  if (values.github.length > 0 && !githubRegex.test(values.github)) {
    errors.github = "Cette adresse github n'est pas valide";
  }
  if (!values.soft_skills) {
    errors.soft_skills = "soft_skills is required";
  }
  if (!values.hard_skills) {
    errors.hard_skills = "hard_skills is required";
  }
  return errors;
};

export default validate;
