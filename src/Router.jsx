import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import RegisterAdmin from "./pages/RegisterAdmin";
import RegisterStudent from "./pages/RegisterStudent";
import StudentDetail from "./pages/StudentDetail";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import RegisterTeacher from "./pages/RegisterTeachers";
import StudentSideBar from "./components/StudentSideBar";
import StudentDash from "./pages/TeacherDash";
import StudentLogin from "./pages/StudentLogin";
import Subjects from "./pages/Subject";
import Attendance from "./pages/Attendance";
import StudentProfile from "./pages/StudentProfile";
import TeacherDash from "./pages/TeacherDash";
import TeacherLogin from "./pages/TeacherLogin";
import StuLayout from "./pages/StuLayout";
import TeacherLayout from "./pages/TeacherLayout";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="admin-login" element={<AdminLogin />} />
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="student-details" element={<StudentDetail />} />
          <Route path="register-admin" element={<RegisterAdmin />} />
          <Route path="register-student" element={<RegisterStudent />} />
          <Route path="register-teacher" element={<RegisterTeacher />} />
        </Route>
        <Route path="student-login" element={<StudentLogin />} />
        <Route path="student" element={<StuLayout />}>
          <Route index element={<StudentDash />} />
          <Route path="subjects" element={<Subjects />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="studentprofile" element={<StudentProfile />} />
        </Route>
        <Route path="teacher-login" element={<TeacherLogin />} />
        <Route path="teacher" element={<TeacherLayout />}>
          <Route index element={<TeacherDash />} />
          {/* <Route path="student-details" element={<StudentDetail />} /> */}
          {/* <Route path="register-admin" element={<RegisterAdmin />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
