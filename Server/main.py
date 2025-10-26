from fastapi import FastAPI

app = FastAPI()

@app.get('/')
async def landind():
    return {"Message" : "Hello user"}