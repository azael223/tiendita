const jwt = require("jsonwebtoken");
const APP_SECRET = "myappsecret";
const USERNAME = "admin";
const PASSWORD = "secret";
const mappings = {
  get: ["/api/orders", "/orders"],
  post: ["/api/producuts", "/products", "/api/categoires", "/categories"],
};
const requieresAuth = (method, url) =>
  (mappings[method.toLowerCase()] || []).find((p) => url.startsWith(p)) !==
  undefined;

module.exports = (req, res, next) => {
  if (req.url.endsWith("/login") && req.method == "POST") {
    if (
      req.body &&
      req.body.name == USERNAME &&
      req.body.password == PASSWORD
    ) {
      let token = jwt.sign({ data: USERNAME, expiresIn: "1h" }, APP_SECRET);
      res.json({ success: true, token: token });
    } else {
      res.json({ success: false });
    }
    res.end();
    return;
  } else if (requieresAuth(req.method, req.url)) {
    let token = requ.headers["authorization"] || "";
    if (token.startWith("Bearer<")) {
      token = token.substring(7, token.length - 1);
      try {
        jwt.verify(token, APP_SECRET);
        next();
        return;
      } catch (err) {}
    }
    res.statusCode = 401;
    res.end();
    return;
  }
  next();
};
