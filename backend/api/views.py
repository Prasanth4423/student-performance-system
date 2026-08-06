from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth.hashers import make_password, check_password
from .models import Student, Mark, Attendance
from .serializers import (
    StudentSerializer,
    MarkSerializer,
    AttendanceSerializer
)

# --------------------
# Register
# --------------------

class StudentRegisterView(APIView):
    
    def post(self, request):

        serializer = StudentSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(
                password=make_password(serializer.validated_data["password"])
            )

            return Response(
                {"message": "Registration Successful"},
                status=status.HTTP_201_CREATED
            )

        errors = serializer.errors

        if "student_id" in errors:
            return Response(
                {"message": "Student ID already exists."},
                status=status.HTTP_400_BAD_REQUEST
            )

        if "email" in errors:
            return Response(
                {"message": "Email already exists."},
                status=status.HTTP_400_BAD_REQUEST
            )

        return Response(
            {"message": "Registration Failed."},
            status=status.HTTP_400_BAD_REQUEST
        )


# --------------------
# Login
# --------------------



from django.contrib.auth.hashers import check_password

class StudentLoginView(APIView):
    
    def post(self, request):

        email = request.data.get("email")
        password = request.data.get("password")

        print("Email:", email)
        print("Password Entered:", password)

        try:
            student = Student.objects.get(email=email)

            print("Stored Password:", student.password)

            if check_password(password, student.password):
                print("Password Matched")

                return Response({
                    "message": "Login Successful",
                    "student_id": student.id,
                    "name": student.name
                })

            print("Password Not Matched")

            return Response(
                {"message": "Invalid Email or Password"},
                status=status.HTTP_401_UNAUTHORIZED
            )

        except Student.DoesNotExist:
            print("Student Not Found")

            return Response(
                {"message": "Invalid Email or Password"},
                status=status.HTTP_401_UNAUTHORIZED
            )
# --------------------
# Profile
# --------------------

class StudentProfileView(generics.RetrieveUpdateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer


# --------------------
# Marks
# --------------------

class AddMarksView(APIView):
    
    def post(self, request):

        student_id = request.data.get("student")
        subject = request.data.get("subject")
        marks = request.data.get("marks")

        try:
            student = Student.objects.get(id=student_id)
        except Student.DoesNotExist:
            return Response(
                {"message": "Student not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        mark, created = Mark.objects.update_or_create(
            student=student,
            subject=subject,
            defaults={"marks": marks}
        )

        if created:
            message = "Marks Added Successfully"
        else:
            message = "Marks Updated Successfully"

        return Response(
            {
                "message": message,
                "subject": subject,
                "marks": marks
            },
            status=status.HTTP_200_OK
        )




class StudentMarksView(APIView):

    def get(self, request, student_id):

        marks = Mark.objects.filter(student_id=student_id)

        data = {}

        for mark in marks:
            subject = mark.subject.lower()

            if subject == "operating systems":
                data["os"] = mark.marks
            elif subject == "computer networks":
                data["cn"] = mark.marks
            else:
                data[subject] = mark.marks

        return Response(data)


# --------------------
# Attendance
# --------------------

class AddAttendanceView(APIView):
    
    def post(self, request):

        student_id = request.data.get("student")
        subject = request.data.get("subject")
        attendance = request.data.get("attendance")

        try:
            student = Student.objects.get(id=student_id)
        except Student.DoesNotExist:
            return Response(
                {"message": "Student not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        record, created = Attendance.objects.update_or_create(
            student=student,
            subject=subject,
            defaults={"attendance": attendance}
        )

        if created:
            message = "Attendance Added Successfully"
        else:
            message = "Attendance Updated Successfully"

        return Response({"message": message})


class StudentAttendanceView(APIView):
    
    def get(self, request, student_id):

        attendance = Attendance.objects.filter(student_id=student_id)

        data = {}

        for record in attendance:

            subject = record.subject.lower()

            if subject == "operating systems":
                data["os"] = record.attendance
            elif subject == "computer networks":
                data["cn"] = record.attendance
            else:
                data[subject] = record.attendance

        return Response(data)


# --------------------
# Dashboard
# --------------------

class DashboardView(APIView):
    
    def get(self, request, student_id):

        student = Student.objects.get(id=student_id)

        marks = Mark.objects.filter(student=student)

        attendance = Attendance.objects.filter(student=student)

        avg_marks = 0
        avg_attendance = 0

        if marks.exists():
            avg_marks = sum(m.marks for m in marks) / marks.count()

        if attendance.exists():
            avg_attendance = sum(a.attendance for a in attendance) / attendance.count()

        if avg_marks >= 85:
            performance = "Excellent"
            career = "Software Engineer"

        elif avg_marks >= 70:
            performance = "Good"
            career = "Full Stack Developer"

        elif avg_marks >= 60:
            performance = "Average"
            career = "Backend Developer"

        else:
            performance = "Needs Improvement"
            career = "Improve Programming Skills"

        return Response({
            "student_name": student.name,
            "average_marks": round(avg_marks, 2),
            "average_attendance": round(avg_attendance, 2),
            "performance": performance,
            "career": career
        })


# --------------------
# Performance
# --------------------

class PerformanceView(APIView):
    
    def get(self, request, student_id):

        marks = Mark.objects.filter(student_id=student_id)

        avg = (
            sum(i.marks for i in marks) / marks.count()
            if marks.exists()
            else 0
        )

        if avg >= 85:

            data = {
                "average": round(avg, 2),
                "performance": "Excellent",
                "status": "Outstanding",
                "color": "success",
                "message": "Excellent academic performance! Keep maintaining your consistency.",
                "suggestions": [
                    "Participate in coding contests",
                    "Build advanced projects",
                    "Prepare for placements",
                    "Learn System Design"
                ]
            }

        elif avg >= 70:

            data = {
                "average": round(avg, 2),
                "performance": "Good",
                "status": "Very Good",
                "color": "primary",
                "message": "You are performing well. Continue improving your technical skills.",
                "suggestions": [
                    "Practice Data Structures",
                    "Learn React & Django",
                    "Build Full Stack Projects",
                    "Improve Aptitude"
                ]
            }

        elif avg >= 50:

            data = {
                "average": round(avg, 2),
                "performance": "Average",
                "status": "Needs More Practice",
                "color": "warning",
                "message": "You have potential. Focus on improving weak subjects.",
                "suggestions": [
                    "Practice Python daily",
                    "Revise DBMS concepts",
                    "Improve SQL skills",
                    "Solve coding problems"
                ]
            }

        else:

            data = {
                "average": round(avg, 2),
                "performance": "Needs Improvement",
                "status": "At Risk",
                "color": "danger",
                "message": "Your performance needs improvement. Create a study plan and practice consistently.",
                "suggestions": [
                    "Study 2 hours daily",
                    "Practice programming",
                    "Improve attendance",
                    "Complete mini projects"
                ]
            }

        return Response(data)


# --------------------
# Career Guidance
# --------------------

from rest_framework.views import APIView
from rest_framework.response import Response

class CareerGuidanceView(APIView):

    def get(self, request, student_id):

        marks = Mark.objects.filter(student_id=student_id)

        avg = (
            sum(i.marks for i in marks) / marks.count()
            if marks.exists()
            else 0
        )

        if avg >= 85:

            data = {
                "career": "Software Engineer",
                "description": "Excellent performance! You are ready to prepare for Software Engineer roles.",
                "skills": [
                    "Data Structures",
                    "Algorithms",
                    "Python",
                    "Java",
                    "SQL",
                    "Git"
                ]
            }

        elif avg >= 70:

            data = {
                "career": "Full Stack Developer",
                "description": "You have a good academic record. Focus on becoming a Full Stack Developer.",
                "skills": [
                    "React",
                    "Django",
                    "MySQL",
                    "JavaScript",
                    "Bootstrap",
                    "Git"
                ]
            }

        elif avg >= 60:

            data = {
                "career": "Backend Developer",
                "description": "Strengthen your backend development skills.",
                "skills": [
                    "Python",
                    "Django",
                    "REST API",
                    "MySQL",
                    "Git"
                ]
            }

        else:

            data = {
                "career": "Improve Programming Skills",
                "description": "Build a strong programming foundation before choosing a specialization.",
                "skills": [
                    "Python Basics",
                    "C Programming",
                    "SQL",
                    "Problem Solving",
                    "Data Structures"
                ]
            }

        return Response(data)
    
    
    
class ForgotPasswordView(APIView):
    
    def post(self, request):

        email = request.data.get("email")
        password = request.data.get("password")

        try:
            student = Student.objects.get(email=email)

            student.password = make_password(password)
            student.save()

            return Response(
                {
                    "message": "Password Reset Successfully"
                },
                status=status.HTTP_200_OK
            )

        except Student.DoesNotExist:

            return Response(
                {
                    "message": "Email not found"
                },
                status=status.HTTP_404_NOT_FOUND
            )