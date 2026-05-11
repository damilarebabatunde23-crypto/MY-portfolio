from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    ProfileViewSet, SkillViewSet, ProjectViewSet, 
    ServiceViewSet, ExperienceViewSet, TestimonialViewSet, 
    ResumeDocViewSet
)

router = DefaultRouter()
router.register(r'profiles', ProfileViewSet)
router.register(r'skills', SkillViewSet)
router.register(r'projects', ProjectViewSet)
router.register(r'services', ServiceViewSet)
router.register(r'experiences', ExperienceViewSet)
router.register(r'testimonials', TestimonialViewSet)
router.register(r'resumes', ResumeDocViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
