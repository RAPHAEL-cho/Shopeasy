from django.contrib import admin
from .models import *

# Register your models here.

class ProductAdmin(admin.ModelAdmin):
    list_display=('name','description','price','image','category')
    list_filter=('name','description','price','image','category')



admin.site.register(Product,ProductAdmin)

