import joi from "joi";

export const documentSchema = joi.object({
  number: joi.string().required(),
  type: joi.string().valid("RG", "CNH", "CPF").required()
});