from django.contrib import admin
from .models import Profile, Skill, Project, Service, Experience, Testimonial, ResumeDoc


@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = ['name', 'title', 'location', 'email']


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = ['name', 'icon', 'color']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'filter_tag']
    list_filter = ['filter_tag']


@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'icon']


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ['role', 'organization', 'type', 'period']
    list_filter = ['type']


@admin.register(Testimonial)
class TestimonialAdmin(admin.ModelAdmin):
    list_display = ['name', 'company', 'stars']


@admin.register(ResumeDoc)
class ResumeDocAdmin(admin.ModelAdmin):
    list_display = ['title', 'subtitle', 'icon']
