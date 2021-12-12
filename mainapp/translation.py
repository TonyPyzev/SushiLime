from django.db.models import fields
from modeltranslation.translator import register, TranslationOptions
from .models import ImgSlider, Product, Category


@register(Category)
class CategoryTranslationOptions(TranslationOptions):
    fields = ('name',)


@register(Product)
class ProductTranslationOptions(TranslationOptions):
    fields = ('title', 'description',)


@register(ImgSlider)
class ImgSliderTranslationOptions(TranslationOptions):
    fields = ('image',)