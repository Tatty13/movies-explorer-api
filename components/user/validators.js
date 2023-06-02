const { celebrate, Joi } = require('celebrate');

const joiEmail = Joi.string().email().required();
const joiPassword = Joi.string().required();
const joiName = Joi.string().min(2).max(30).required();

const validateUserCredentialOnSignUp = celebrate({
  body: Joi.object({
    email: joiEmail,
    password: joiPassword,
    name: joiName,
  }),
});

const validateUserCredentialOnSignIn = celebrate({
  body: Joi.object({
    email: joiEmail,
    password: joiPassword,
  }),
});

const validateUserInfo = celebrate({
  body: Joi.object({
    email: joiEmail,
    name: joiName,
  }),
});

module.exports = {
  validateUserCredentialOnSignUp,
  validateUserCredentialOnSignIn,
  validateUserInfo,
};
