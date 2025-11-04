# Auth/auth_bearer.py
# from fastapi import Request, HTTPException
# from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
# from jose import JWTError
# from Auth.Services.authService import decode_token  # import your decoder

# class JWTBearer(HTTPBearer):
#     async def __call__(self, request: Request):
#         credentials: HTTPAuthorizationCredentials = await super().__call__(request)
#         if credentials:
#             token = credentials.credentials
#             try:
#                 payload = decode_token(token)
#                 return token  # or return payload if you prefer
#             except Exception as e:
#                 raise HTTPException(status_code=403, detail=f"Invalid token: {str(e)}")
#         else:
#             raise HTTPException(status_code=403, detail="Authorization token missing")
