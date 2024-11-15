from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse

from backend.routes.user import user

# from config.openapi import tags_metadata

templatesJinja=Jinja2Templates(directory="static")

app = FastAPI(
    # title="Users API",
    # description="a REST API using python and mysqlz",
    # version="0.0.1",
    # openapi_tags=tags_metadata,
)
app.mount("/static", StaticFiles(directory="static"), name="static")

@user.get("/", response_class=HTMLResponse)
def index(request:Request):
    return templatesJinja.TemplateResponse("index.html",{
        "request": request
    })


app.include_router(user)
