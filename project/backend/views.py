from django.http import JsonResponse
from django.shortcuts import render

def index(request):
    return render(request, 'backend/index.html')
def get_message(request):
    data = {
        'message': 'Hello from Django!'
    }
    return JsonResponse(data)
def remove_message(request):
    data = {
        'message': ' '
    }
    return JsonResponse(data)