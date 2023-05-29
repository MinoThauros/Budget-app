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