# Generated by Django 4.2.5 on 2023-09-27 06:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='author',
            name='details',
            field=models.TextField(max_length=1000),
        ),
        migrations.AlterField(
            model_name='genre',
            name='detail',
            field=models.TextField(max_length=500),
        ),
    ]
