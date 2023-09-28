from django.contrib import admin
from .models import *
# Register your models here.

if admin.site.is_registered(Book):
    admin.site.unregister(Book)

if admin.site.is_registered(Author):
    admin.site.unregister(Author)

if admin.site.is_registered(Genre):
    admin.site.unregister(Genre)

# Register the Book model again
@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    # Your admin customization for the Book model
    pass

@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    # Your admin customization for the Book model
    pass

@admin.register(Genre)
class GenereAdmin(admin.ModelAdmin):
    # Your admin customization for the Book model
    pass