from typing import List
from django.http.response import JsonResponse
from django.shortcuts import redirect, render
from .cart import Cart
from mainapp.models import *
import json

from django.core.mail import send_mail
from django.conf import settings


def buscket(request):
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
        'salads': salads,
        'drinks': drinks,
    }

    return render(request, 'buscket.html', context)

def order(request):
    cart = Cart(request)
    if request.method == 'POST':

        jsonData = request.POST['data']
        data = json.loads(jsonData)

        msg = """Товары в заказе: \n{} \nСумма заказа: {} \n\nИмя клиента: {} \nНомер телефона: {}\n\nТип доставки: {} \nВремя доставки: {} \nТип оплаты: {} \n\nКомплект: {} \n\nКомментарий от клиента: {} \n
        """.format(
            '\n'.join(str(el.obj.title) + ': ' + str(el.quantity) + 'шт.' for el in cart.list_items()),
            str(cart.total_price),
            data['name'],
            data['tel'],
            data['deliveryType'] + '\nУлица: ' + data['street'] + '\nНомер дома: ' + data['numberHoues'] + '\nКвартира: ' + data['flat'] + '\nПарадное: ' + data['entrance'] + '\nЭтаж: ' + data['flor'] + '\n' if data['deliveryType'] == 'Курьер' else data['deliveryType'],
            data['deliveryTime'] + '\nДень недели: ' + data['delDay'] + '\nВремя: ' + data['delTime'] if data['deliveryTime'] == 'На указанное время' else data['deliveryTime'],
            data['paymentType'],
            '\nОбычные палочки: ' + data['regularSticks'] + '\nУчебные палочки: ' + data['studySticks'] + '\nВасаби: ' + data['wasabi'] + '\nИмбирь: ' + data['ginger'] + '\nСоевый соус ' + data['sous'],
            data['comment']
        )

        send_mail(
            'Новый заказ!',
            msg,
            settings.EMAIL_HOST_USER,
            ['sushilimeua@gmail.com'],
            fail_silently=False
        )
        cart.empty()
    return render(request, 'order.html')