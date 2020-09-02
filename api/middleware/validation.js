const Joi = require("@hapi/joi");

const handleUser = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });
  return schema.validate(data);
};

const handleUserFavouriteMatch = (data) => {
  const schema = Joi.object({
    id: Joi.number().required(),
    team1: Joi.object().required(),
    team2: Joi.object().required(),
    event: Joi.object().required(),
  });
  return schema.validate(data);
};

module.exports.handleUser = handleUser;
module.exports.handleUserFavouriteMatch = handleUserFavouriteMatch;
