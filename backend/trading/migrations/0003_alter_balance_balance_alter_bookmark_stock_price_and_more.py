from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trading', '0002_remove_transaction_date_remove_transaction_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='balance',
            name='balance',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='bookmark',
            name='stock_price',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='buy',
            name='stock_price',
            field=models.FloatField(),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='stock_price',
            field=models.FloatField(),
        ),
    ]
