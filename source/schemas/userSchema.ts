import joi from "joi";

export const searchSchema = joi.object({
  username: joi.string().min(3).required(),
});
