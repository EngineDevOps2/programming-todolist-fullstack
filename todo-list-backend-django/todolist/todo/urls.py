from django.urls import path,include
from .views import TodoViewSet  
from rest_framework.routers import SimpleRouter  

router = SimpleRouter()  # Use SimpleRouter to avoid trailing slashes  
router.register(r'todos', TodoViewSet, basename='todo')  

urlpatterns = router.urls  # This will generate URLs without trailing slashes
