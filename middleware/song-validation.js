function songValidate(req, res, next) {
  let product = req.body;
  let properties = [
    { name: "name", type: "string" },
    { name: "artist", type: "string" },
    { name: "album", type: "string" },
    { name: "price", type: "number" },
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
