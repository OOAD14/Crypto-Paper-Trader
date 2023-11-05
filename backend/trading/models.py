from django.db import models


class Buy(models.Model):
    username = models.CharField(max_length=100)
    user_id = models.CharField(max_length=100)
    stock_name = models.CharField(max_length=100)
    stock_price = models.FloatField() 
    stock_quantity = models.IntegerField()

class Balance(models.Model):
    username = models.CharField(max_length=100)
    user_id = models.CharField(max_length=100)
    balance = models.FloatField()

class Bookmark(models.Model):
    username = models.CharField(max_length=100)
    user_id = models.CharField(max_length=100)
    stock_name = models.CharField(max_length=100)
    stock_price = models.FloatField()




class Transaction(models.Model):
    username = models.CharField(max_length=100)
    user_id = models.CharField(max_length=100)
    stock_name = models.CharField(max_length=100)
    stock_quantity = models.IntegerField()
    stock_price = models.FloatField()
    date_time = models.CharField(max_length=100)
    buy_sell = models.CharField(max_length=100, null=True)