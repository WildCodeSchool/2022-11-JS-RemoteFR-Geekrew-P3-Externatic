const rolesCheck = (...rolesToCheck) => {
  return (req, res, next) => {
    const userRoles = JSON.parse(req.user.roles);

    if (userRoles.some((userRole) => rolesToCheck.includes(userRole))) {
      next();
    } else {
      res.sendStatus(401);
    }
  };
};

module.export = rolesCheck;
