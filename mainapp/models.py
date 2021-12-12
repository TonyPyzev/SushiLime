from django.db import models
from django.db.models.deletion import CASCADE
from django.urls import reverse


class Category(models.Model):

    name = models.CharField(verbose_name='Название', max_length=32)
    image = models.ImageField(verbose_name='Фото')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('menu', kwargs={
            'slug': self.slug,
            })


class Product(models.Model):

    category = models.ForeignKey(Category, verbose_name='Категория', on_delete=models.CASCADE)
    title = models.CharField(verbose_name='Название', max_length=32)
    image = models.ImageField(verbose_name='Фото')
    description = models.TextField(verbose_name='Описание')
    weight = models.IntegerField(verbose_name='Вес')
    pieces = models.IntegerField(verbose_name='Кол. кусочков')
    isSale = models.BooleanField(verbose_name='Наличие скидки', default=False)
    price = models.IntegerField(verbose_name='Цена')
    oldPrice = models.IntegerField(verbose_name='Старая цена', null=True)
    discount = models.IntegerField(verbose_name='Скидка')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('description', kwargs={
            'parent_slug':self.category.slug,
            'slug': self.slug,
            })


class ImgSlider(models.Model):

    name = models.CharField(verbose_name='Название', max_length=32, default='картинка слайда')
    image = models.ImageField(verbose_name='Фото')

    def __str__(self):
        return 'img'