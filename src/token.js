const jwt = require("jsonwebtoken");

/**
 * Implement this function to accept a payload and a secret key and return a JWT without an expiry time
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtsignpayload-secretorprivatekey-options-callback
 */
function createToken(payload, secret) {
  const token = jwt.sign(payload, secret);
  return token;
}

// Example payload & secret
/**
 * const payload = {
 *    sub: 1234567890,
 *    name: "John Doe",
 *    iat: 1516239022
 * }
 *
 * const secret = "hello_world_123"
 */

/**
 * Implement this function to accept a payload, secret key and an expiry time, and return a JWT with an expiry
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim
 */
function createTokenWithExpiry(payload, secret, expiry) {
  // expiry time must be in seconds
  const token = jwt.sign(payload, secret, {
    expiresIn: expiry,
  });

  return token;
}

/**
 * Implement this function to accept a JWT and a secret key. Return the decoded token (the payload) if verification is successful, and false if it fails
 *
 * Documentation: https://www.npmjs.com/package/jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
 */
function verifyToken(token, secret) {
  try {
    const decodedPayload = jwt.verify(token, secret);
    return decodedPayload;
  } catch {
    return false;
  }
}

module.exports = {
  createToken,
  createTokenWithExpiry,
  verifyToken,
};
