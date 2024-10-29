from django.shortcuts import render, redirect

def index(request):
    return render(request, 'index.html')

def word_counter(request):
    if request.method == "POST":
        text = request.POST.get("text", "")
        word_count = len(text.split())
        return render(request, 'word_counter.html', {'text': text, 'word_count': word_count})
    return redirect('index')  # Redirect to index if accessed without POST
