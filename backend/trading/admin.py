from django.contrib import admin

from .models import Buy, Transaction, Bookmark, Balance

admin.site.register(Buy)
admin.site.register(Transaction)
admin.site.register(Bookmark)
admin.site.register(Balance)