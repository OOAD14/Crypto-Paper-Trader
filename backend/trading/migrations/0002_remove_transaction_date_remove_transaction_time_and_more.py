from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('trading', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='transaction',
            name='date',
        ),
        migrations.RemoveField(
            model_name='transaction',
            name='time',
        ),
        migrations.AddField(
            model_name='transaction',
            name='buy_sell',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='transaction',
            name='date_time',
            field=models.CharField(default=1, max_length=100),
            preserve_default=False,
        ),
    ]
