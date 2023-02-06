// creo middleware per impostare autorizzazione e filtro libri

const authorization = (req, res, next) => {
  const { user } = req.query;

  if (user === "stefania") {
    req.user = { name: "stefania" };
    next();
  } else {
    res.status(401).send(`utente ${user} non autorizzato`);
  }
};

module.exports = authorization;
