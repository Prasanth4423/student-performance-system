from django.contrib import admin
from .models import Student, Mark, Attendance

@admin.register(Student)
class StudentAdmin(admin.ModelAdmin):
    list_display = (
        "student_id",
        "name",
        "email",
        "branch",
        "year",
    )

    search_fields = (
        "student_id",
        "name",
        "email",
    )


@admin.register(Mark)
class MarkAdmin(admin.ModelAdmin):
    list_display = (
        "student",
        "subject",
        "marks",
    )

    list_filter = ("subject",)


@admin.register(Attendance)
class AttendanceAdmin(admin.ModelAdmin):
    list_display = (
        "student",
        "subject",
        "attendance",
    )

    list_filter = ("subject",)