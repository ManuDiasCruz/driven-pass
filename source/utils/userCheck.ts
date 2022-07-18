export function checkUser(userId: number, localUserId: number) {
    if (userId !== localUserId) 
        throw { type: "unauthorized", message: "User id mismatch" };
    
    return true;
  }