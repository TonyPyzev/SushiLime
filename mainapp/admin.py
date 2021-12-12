from django.contrib import admin
from .models import *
from modeltranslation.admin import TranslationAdmin
from django import forms


class CategoryAdmin(TranslationAdmin):
    prepopulated_fields = {'slug': ('name',)}


class ProductAdmin(TranslationAdmin):
    prepopulated_fields = {'slug': ('title',)}


class ImgSliderAdmin(TranslationAdmin):
    pass


class CategoryAdminForm(forms.ModelForm):
    name_uk = forms.CharField(label='Описание укр')
    name_ru = forms.CharField(label='Описание рус')
    name_en = forms.CharField(label='Описание англ')

    class Meta:
        model = Category
        fields = '__all__'

        
class ProductAdminForm(forms.ModelForm):
    title_uk = forms.CharField(label='Название укр')
    title_ru = forms.CharField(label='Название рус')
    title_en = forms.CharField(label='Название англ')

    description_uk = forms.CharField(label='Описание укр')
    description_ru = forms.CharField(label='Описание рус')
    description_en = forms.CharField(label='Описание англ')

    class Meta:
        model = Product
        fields = '__all__'


class ImgSliderAdminForm(forms.ModelForm):
    image_uk = forms.ImageField(label='Картинка укр')
    image_ru = forms.ImageField(label='Картинка рус')
    image_en = forms.ImageField(label='Картинка англ')

    class Meta:
        model = ImgSlider
        fields = '__all__'


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(ImgSlider, ImgSliderAdmin)