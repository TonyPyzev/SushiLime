from easycart import BaseCart, ItemNotInDatabase
from easycart.cart import BaseItem
from mainapp.models import Product

class Cart(BaseCart):

    def get_queryset(self, pks):
        return Product.objects.filter(pk__in=pks)

    def total_pieces(self):
        return sum((item.itemTotalPieces for item in self.items.values()))

    def total_weight(self):
        sum = 0
        for item in self.items.values():
            if item.category_id != 6:
                sum += item.itemTotalWeight
        return sum
        #return sum((item.itemTotalWeight for item in self.items.values()))

    def total_items(self):
        sum = 0
        for item in self.items.values():
            if item.category_id != 6 and item.category_id != 5:
                sum += item.quantity
        return sum
        #return sum((item.quantity for item in self.items.values()))
    