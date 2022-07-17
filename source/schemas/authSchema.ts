import joi from "joi";

import { userData } from "./../utils/types";

export const authSchema = joi.object<userData>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required()
});