const jwt = require("jsonwebtoken");
const secret = "secretstringwithnospacesforsecutiypurposes";

exports.issueToken = (uid, username) => {
  const date = new Date();
  let token = jwt.sign(
    { username: username, uid: uid, timeOfIssue: date.toString() },
    secret,
    {
      expiresIn: 2 * 24 * 60 * 60
    }
  );
  console.log(`token assigned: ${token}`);
  return token;
};

exports.verifyToken = (req, authOrSecDef, token, callback) => {
  if (token) token = token.split(" ")[1];

  jwt.verify(token, secret, (err, dToken) => {
    if (err == null && dToken) {
      console.log(`decoded token`);
      console.log(dToken);
      return callback(null);
    } else {
      console.log("access denied");
      req.res.status(403).json({
        message: "Access denied"
      });
    }
  });
};
