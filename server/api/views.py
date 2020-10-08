from django.http import JsonResponse

# Create your views here.
def home(req):
    return JsonResponse({"test": "api home route"})
