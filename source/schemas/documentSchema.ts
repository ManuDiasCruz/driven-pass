import joi from "joi";

export const documentsSchema = joi.object({
  number: joi.string().required(),
  type: joi.string().valid("RG", "CNH").required()
});