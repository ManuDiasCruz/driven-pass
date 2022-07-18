import joi from "joi";

export const cardSchema = joi.object({
  title: joi.string().required(),
  number: joi.string().required(),
  cardholderName: joi.string().required(),
  securityCode: joi.string().length(3).required(),
  expirationDate: joi.string().length(5).required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid("CREDIT", "DEBIT", "BOTH").required(),
});