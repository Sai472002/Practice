const passGen = (length) => {
  const characters =
    "qwertyuiopasdfghjklzxcvbnmQWQERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()_+";
  let pass = "";

  for (i = 0; i < length; i++) {
    pass += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return pass;
};
module.exports = passGen;
