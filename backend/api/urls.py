from django.urls import path

from .views import *

urlpatterns = [

    path("register/", StudentRegisterView.as_view()),

    path("login/", StudentLoginView.as_view()),

    path("profile/<int:pk>/", StudentProfileView.as_view()),

    path("marks/", AddMarksView.as_view()),
    path("marks/<int:student_id>/", StudentMarksView.as_view()),

    path("attendance/", AddAttendanceView.as_view()),
    path("attendance/<int:student_id>/", StudentAttendanceView.as_view()),

    path("dashboard/<int:student_id>/", DashboardView.as_view()),

    path("performance/<int:student_id>/", PerformanceView.as_view()),

    path("career/<int:student_id>/", CareerGuidanceView.as_view()),
    
    path("forgot-password/", ForgotPasswordView.as_view()),

]