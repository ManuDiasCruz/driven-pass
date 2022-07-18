export function checkUser(userId: number, localUserId: number) {
    console.log(`UserIdParam: ${userId}, UserIdLocal: ${localUserId}`);
    if (userId !== localUserId) 
        throw { type: "unauthorized", message: "User id mismatch" };
    
    return true;
  }