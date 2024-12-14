from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from backend.routes.user import user
from fastapi.responses import HTMLResponse

app = FastAPI()
templatesJinja=Jinja2Templates(directory="static")
app.mount("/static", StaticFiles(directory="static"), name="static")



@user.get("/", response_class=HTMLResponse)
def index(request:Request):
    link1="cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/gsap.min.js",
    logo=[
        "StudioTEOTW", 
        "APIIDTT", 
        "Quijote", 
        "RPMasc",   
        "MujeresLibres", 
        "PazALP"]

    return templatesJinja.TemplateResponse("index.html",{
        "request": request,
        "logo":logo,
    })
app.include_router(user)
