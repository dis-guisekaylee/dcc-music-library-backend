function songValidate(req, res, next) {
  let product = req.body;
  let properties = [
    { name: "title", type: "string" },
    { name: "artist", type: "string" },
    { name: "album", type: "string" },
    { name: "genre", type: "string" },
    { name: "releaseDate", type: "date"}
  ];

  for (const property of properties) {
    if (
      product.hasOwnProperty(property.name) &&
      typeof (product[property.name] === property.type)
    ) {
      continue;
    } else {
      return res.status(403).send(`Product body not valid!`);
    }
  }
  return next();
}

module.exports = songValidate;
