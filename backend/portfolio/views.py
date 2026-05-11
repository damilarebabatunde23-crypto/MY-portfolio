from rest_framework import viewsets
from .models import Profile, Skill, Project, Service, Experience, Testimonial, ResumeDoc
from .serializers import (
    ProfileSerializer, SkillSerializer, ProjectSerializer, 
    ServiceSerializer, ExperienceSerializer, TestimonialSerializer, 
    ResumeDocSerializer
)

class ProfileViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class SkillViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class ServiceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ExperienceViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer

class TestimonialViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Testimonial.objects.all()
    serializer_class = TestimonialSerializer

class ResumeDocViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ResumeDoc.objects.all()
    serializer_class = ResumeDocSerializer
