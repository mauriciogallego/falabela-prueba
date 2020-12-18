export function fieldsRequired() {
  return async function (req, res, next) {
    const { rut, phone, email, salary } = req.body;
    if (
      rut == ("" || null) &&
      phone == ("" || null) &&
      email == ("" || null) &&
      salary == ("" || null)
    )
      return res.status(401).send({ message: "campos incompletos" });
    next();
  };
}
