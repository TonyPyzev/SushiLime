from django.shortcuts import get_object_or_404, render
from . models import *

def index(request):

    # Получение товаров по акции
    try:
        productsSale = Product.objects.filter(isSale = True)
    except Product.DoesNotExist:
        productsSale = None

    # Получение карегории "Сеты"
    try:
        sets = Category.objects.get(name_uk = 'Сети')
        # Получение продуктов которые относятся к категории "Сеты"
        try:
            productsSets = Product.objects.filter(category_id = sets.id)
        except Product.DoesNotExist:
            productsSets = None
    except Category.DoesNotExist:
        productsSets = None

    # Получение карегории "Роллы"
    try:
        rolls = Category.objects.get(name_uk = 'Роли')
        # Получение продуктов которые относятся к категории "Роллы"
        try:
            productsRolls = Product.objects.filter(category_id = rolls.id)
        except Product.DoesNotExist:
            productsRolls = None
    except Category.DoesNotExist:
        productsRolls = None

    # Получение карегории "Суши"
    try:
        sushi = Category.objects.get(name_uk = 'Сушi')
        # Получение продуктов которые относятся к категории "Суши"
        try:
            productsSushi = Product.objects.filter(category_id = sushi.id)
        except Product.DoesNotExist:
            productsSushi = None
    except Category.DoesNotExist:
        productsSushi = None

    # Получение Картинок для главного слайдера
    try:
        slider = ImgSlider.objects.order_by('-id')
    except ImgSlider.DoesNotExist:
        slider = None

    # Получение карегории "Салаты"
    try:
        salads = Category.objects.get(name_uk = 'Салати')
    except Category.DoesNotExist:
        salads = None

    # Получение карегории "Напитки"
    try:
        drinks = Category.objects.get(name_uk = 'Напої')
    except Category.DoesNotExist:
        drinks = None

    context = {
        'productsSale': productsSale,
        'productsSets': productsSets,
        'productsRolls': productsRolls,
        'productsSushi': productsSushi,
        'slider': slider,
        'salads': salads,
        'drinks': drinks,
    }
    return render(request, 'index.html', context)


def categories(request):
    categories = Category.objects.all()

    context = {
        'categories': categories
    }

    return render(request, 'categories.html', context)


def menu(request, slug):
    cat = get_object_or_404(Category, slug = slug)
    sets = Product.objects.filter(category_id = cat.id)

    # Получение карегории "Салаты"
    try:
        salads = Category.objects.get(name = 'Салаты')
    except Category.DoesNotExist:
        salads = None

    # Получение карегории "Напитки"
    try:
        drinks = Category.objects.get(name = 'Напитки')
    except Category.DoesNotExist:
        drinks = None

    context = {
        'title': cat.name,
        'sets': sets,
        'salads': salads,
        'drinks': drinks,
    }
    return render(request, 'menu.html', context)


def description(request, slug, parent_slug):
    product = get_object_or_404(Product, slug = slug)
    str = product.description
    desc = str.split(';')

    # Получение карегории "Салаты"
    try:
        salads = Category.objects.get(name = 'Салаты')
    except Category.DoesNotExist:
        salads = None

    # Получение карегории "Напитки"
    try:
        drinks = Category.objects.get(name = 'Напитки')
    except Category.DoesNotExist:
        drinks = None

    print(desc)

    context = {
        'product': product,
        'desc': desc,
        'salads': salads,
        'drinks': drinks,
    }
    return render(request, 'description.html', context)


def aboutUs(request):
    return render(request, 'aboutus.html')

def contacts(request):
    return render(request, 'contacts.html')

def set_lang(request):

   '''Set 'django_language' in request.session'''
   url = request.META['PATH_INFO'].split('/')[1]
   request.session['django_language'] = url
   return request