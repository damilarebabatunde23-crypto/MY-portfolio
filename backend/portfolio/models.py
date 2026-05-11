from django.db import models

class Profile(models.Model):
    name = models.CharField(max_length=100)
    title = models.CharField(max_length=200)
    description = models.TextField()
    location = models.CharField(max_length=100)
    profile_picture = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    github = models.URLField(blank=True, null=True)
    linkedin = models.URLField(blank=True, null=True)
    twitter = models.URLField(blank=True, null=True)
    dribbble = models.URLField(blank=True, null=True)
    instagram = models.URLField(blank=True, null=True)
    email = models.EmailField(blank=True, null=True)
    whatsapp = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.name

class Skill(models.Model):
    name = models.CharField(max_length=50)
    icon = models.CharField(max_length=20) # e.g. emoji or font-awesome class
    color = models.CharField(max_length=20) # e.g. hex code

    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=100) # e.g. Web App, Mobile App
    filter_tag = models.CharField(max_length=50) # e.g. web, mobile, backend
    icon = models.CharField(max_length=20)
    color = models.CharField(max_length=20)
    description = models.TextField()
    full_description = models.TextField()
    image = models.ImageField(upload_to='projects/', null=True, blank=True)
    tech = models.JSONField() # List of strings e.g. ["Django", "React"]
    github = models.URLField(blank=True, null=True)
    demo = models.URLField(blank=True, null=True)
    store = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title

class Service(models.Model):
    title = models.CharField(max_length=100)
    icon = models.CharField(max_length=20)
    description = models.TextField()
    features = models.JSONField()

    def __str__(self):
        return self.title

class Experience(models.Model):
    period = models.CharField(max_length=50)
    role = models.CharField(max_length=100)
    organization = models.CharField(max_length=100)
    type = models.CharField(max_length=20, choices=[('work', 'Work'), ('education', 'Education'), ('cert', 'Certification')])
    description = models.TextField()

    def __str__(self):
        return f"{self.role} at {self.organization}"

class Testimonial(models.Model):
    name = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    emoji = models.CharField(max_length=10, blank=True, null=True)
    text = models.TextField()
    stars = models.IntegerField(default=5)

    def __str__(self):
        return f"{self.name} - {self.company}"

class ResumeDoc(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=100)
    icon = models.CharField(max_length=20)
    file = models.FileField(upload_to='resumes/')

    def __str__(self):
        return self.title
