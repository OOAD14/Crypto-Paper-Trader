from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_remove_userdetail_id_alter_userdetail_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='userdetail',
            name='id',
            field=models.BigAutoField(auto_created=True, default=2, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='userdetail',
            name='username',
            field=models.CharField(max_length=100),
        ),
    ]
