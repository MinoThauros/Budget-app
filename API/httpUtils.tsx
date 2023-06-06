// Request Payload Type
export type AuthRequestPayloadArgs={
    email: string;
    password: string;
    returnSecureToken: boolean;
  }
  
  // Response Payload Type
export type SignUpResponsePayload={
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}
  

// Response Payload Type
export type SignInResponsePayload=SignUpResponsePayload & {
    registered: boolean;
}


export type FirebaseErrorTypes= 'EMAIL_NOT_FOUND'|'INVALID_PASSWORD'|'USER_DISABLED'|'EMAIL_EXISTS'|'OPERATION_NOT_ALLOWED'|'TOO_MANY_ATTEMPTS_TRY_LATER'|'INVALID_EMAIL'|'MISSING_PASSWORD'|'WEAK_PASSWORD'