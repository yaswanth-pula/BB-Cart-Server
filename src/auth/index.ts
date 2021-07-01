import { verify } from "jsonwebtoken";
import { JwksClient } from "jwks-rsa";

const client = new JwksClient({
  jwksUri: "https://dev-3m1i3vdf.us.auth0.com/.well-known/jwks.json",
});

const getKey = (header: any, callback: any) => {
  client.getSigningKey(header.kid, (error, key: any) => {
    const signingKey = key.publicKey || key.rsaPublicKey || "";
    callback(null, signingKey);
  });
};
const Authenticate = (request: any) => {
  const reqHeader: string = request.headers.authorization || "";
  const token = reqHeader.split(" ")[1];

  if (token === "GUEST_TOKEN")
    return {
      role: "guest",
    };

  const user = new Promise((resolve, reject) => {
    verify(
      token,
      getKey,
      {
        algorithms: ["RS256"],
        issuer: "https://dev-3m1i3vdf.us.auth0.com/",
        audience: "https://bbcart-JhbGciOiJIUzI1Ni.ys",
      },
      (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded?.sub);
      }
    );
  });
  return user;
};

export default Authenticate;
