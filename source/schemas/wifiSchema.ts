import joi from "joi";

export const wifiSchema = joi.object({
  title: joi.string().required(),
  network: joi.string().required(),
  password: joi.string().required(),
  userId: joi.number().required()
});