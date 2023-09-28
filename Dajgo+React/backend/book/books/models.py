from django.db import models

class Author(models.Model):
    name = models.CharField(max_length=100)
    details = models.TextField(max_length=1000)
    # Add other author information as needed

    def __str__(self):
        return self.name

class Genre(models.Model):
    name = models.CharField(max_length=100)
    detail = models.TextField(max_length=500)
    # Add other genre information as needed

    def __str__(self):
        return self.name

class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    genre = models.ManyToManyField(Genre)
    image = models.ImageField(upload_to='book_images/')
    # Add other book information as needed

    def __str__(self):
        return self.title
