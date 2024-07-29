from django.http import JsonResponse
from django.shortcuts import render

def index(request):
    return render(request, 'backend/index.html')
def profile(request):
    return render(request, 'backend/profile.html')
def get_message(request):
    data = {
        'message': 'Hello from Django!'
    }
    return JsonResponse(data)
def remove_message(request):
    data = {
        'message': ''
    }
    return JsonResponse(data)
def verify_user(request):
    data = {
        'name': 'vasil',
        'password': '123321'
    }
    return JsonResponse(data)