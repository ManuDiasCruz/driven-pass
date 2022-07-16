import joi from "joi";

const authSchema = joi.object({
  userId: joi.number().integer().required(),
  sessionId: joi.number().integer().required(),
});

export default authSchema;
