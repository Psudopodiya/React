from django.urls import path
from . import views

urlpatterns = [
    # Authors
    path('authors/', views.author_list, name='author-list'),
    path('authors/<int:pk>/', views.author_detail, name='author-detail'),

    # Books
    path('books/', views.book_list, name='book-list'),
    path('books/<int:pk>/', views.book_detail, name='book-detail'),

    # Genres
    path('genres/', views.genre_list, name='genre-list'),
    path('genres/<int:pk>/', views.genre_detail, name='genre-detail'),
]
