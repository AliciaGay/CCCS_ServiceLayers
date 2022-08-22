const util = require('../utils/util');

function verify(requestBody) {
  if (!requestBody.address || !requestBody.date || !requestBody.violation) {
    return util.buildResponse(401, { 
      verified: false,
      message: 'incorrect request body'
    })
  }

  const user = requestBody.address;
  const token = requestBody.token;
  const verification = auth.verifyToken(user.addressId, token);
  if (!verification.verified) {
    return util.buildResponse(401, verification);
  }

  return util.buildResponse(200, {
    verified: true,
    message: 'success',
    user: user,
    token: token
  })
}

module.exports.verify = verify;