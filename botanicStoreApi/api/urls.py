from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'categories', views.CategoryViewSet)
router.register(r'genders', views.GenderViewSet)
router.register(r'products', views.ProductViewSet)
router.register(r'sales', views.SaleViewSet)
router.register(r'sellers', views.SellerViewSet)

urlpatterns = [
    path('', include(router.urls)),
]