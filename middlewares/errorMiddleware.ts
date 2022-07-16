import { NextFunction, Request, Response } from "express";

export function errorHandlerMiddleware(error, req: Request, res: Response, next: NextFunction) {
  console.log(error);
  if(error.type) {
    return res.sendStatus(errorTypeToStatusCode(error.type));
  }
  
  return res.sendStatus(500);
}

function errorTypeToStatusCode(errorType: string) {
  if (errorType === "conflict") return 409;
  if (errorType === "not_found") return 404;
  if (errorType === "unauthorized") return 401;
  
  return 400;
}