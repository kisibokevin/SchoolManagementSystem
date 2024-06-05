import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AttendanceList } from "./attendance/AttendanceList";
import { AttendanceCreate } from "./attendance/AttendanceCreate";
import { AttendanceEdit } from "./attendance/AttendanceEdit";
import { AttendanceShow } from "./attendance/AttendanceShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { CommunicationList } from "./communication/CommunicationList";
import { CommunicationCreate } from "./communication/CommunicationCreate";
import { CommunicationEdit } from "./communication/CommunicationEdit";
import { CommunicationShow } from "./communication/CommunicationShow";
import { StaffList } from "./staff/StaffList";
import { StaffCreate } from "./staff/StaffCreate";
import { StaffEdit } from "./staff/StaffEdit";
import { StaffShow } from "./staff/StaffShow";
import { GradebookList } from "./gradebook/GradebookList";
import { GradebookCreate } from "./gradebook/GradebookCreate";
import { GradebookEdit } from "./gradebook/GradebookEdit";
import { GradebookShow } from "./gradebook/GradebookShow";
import { ReportList } from "./report/ReportList";
import { ReportCreate } from "./report/ReportCreate";
import { ReportEdit } from "./report/ReportEdit";
import { ReportShow } from "./report/ReportShow";
import { HomeworkList } from "./homework/HomeworkList";
import { HomeworkCreate } from "./homework/HomeworkCreate";
import { HomeworkEdit } from "./homework/HomeworkEdit";
import { HomeworkShow } from "./homework/HomeworkShow";
import { TimetableList } from "./timetable/TimetableList";
import { TimetableCreate } from "./timetable/TimetableCreate";
import { TimetableEdit } from "./timetable/TimetableEdit";
import { TimetableShow } from "./timetable/TimetableShow";
import { ParentList } from "./parent/ParentList";
import { ParentCreate } from "./parent/ParentCreate";
import { ParentEdit } from "./parent/ParentEdit";
import { ParentShow } from "./parent/ParentShow";
import { AdmissionList } from "./admission/AdmissionList";
import { AdmissionCreate } from "./admission/AdmissionCreate";
import { AdmissionEdit } from "./admission/AdmissionEdit";
import { AdmissionShow } from "./admission/AdmissionShow";
import { AssessmentList } from "./assessment/AssessmentList";
import { AssessmentCreate } from "./assessment/AssessmentCreate";
import { AssessmentEdit } from "./assessment/AssessmentEdit";
import { AssessmentShow } from "./assessment/AssessmentShow";
import { FeeList } from "./fee/FeeList";
import { FeeCreate } from "./fee/FeeCreate";
import { FeeEdit } from "./fee/FeeEdit";
import { FeeShow } from "./fee/FeeShow";
import { ReportCardList } from "./reportCard/ReportCardList";
import { ReportCardCreate } from "./reportCard/ReportCardCreate";
import { ReportCardEdit } from "./reportCard/ReportCardEdit";
import { ReportCardShow } from "./reportCard/ReportCardShow";
import { ExamList } from "./exam/ExamList";
import { ExamCreate } from "./exam/ExamCreate";
import { ExamEdit } from "./exam/ExamEdit";
import { ExamShow } from "./exam/ExamShow";
import { FinancialList } from "./financial/FinancialList";
import { FinancialCreate } from "./financial/FinancialCreate";
import { FinancialEdit } from "./financial/FinancialEdit";
import { FinancialShow } from "./financial/FinancialShow";
import { SecurityList } from "./security/SecurityList";
import { SecurityCreate } from "./security/SecurityCreate";
import { SecurityEdit } from "./security/SecurityEdit";
import { SecurityShow } from "./security/SecurityShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"SchoolManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Attendance"
          list={AttendanceList}
          edit={AttendanceEdit}
          create={AttendanceCreate}
          show={AttendanceShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Communication"
          list={CommunicationList}
          edit={CommunicationEdit}
          create={CommunicationCreate}
          show={CommunicationShow}
        />
        <Resource
          name="Staff"
          list={StaffList}
          edit={StaffEdit}
          create={StaffCreate}
          show={StaffShow}
        />
        <Resource
          name="Gradebook"
          list={GradebookList}
          edit={GradebookEdit}
          create={GradebookCreate}
          show={GradebookShow}
        />
        <Resource
          name="Report"
          list={ReportList}
          edit={ReportEdit}
          create={ReportCreate}
          show={ReportShow}
        />
        <Resource
          name="Homework"
          list={HomeworkList}
          edit={HomeworkEdit}
          create={HomeworkCreate}
          show={HomeworkShow}
        />
        <Resource
          name="Timetable"
          list={TimetableList}
          edit={TimetableEdit}
          create={TimetableCreate}
          show={TimetableShow}
        />
        <Resource
          name="Parent"
          list={ParentList}
          edit={ParentEdit}
          create={ParentCreate}
          show={ParentShow}
        />
        <Resource
          name="Admission"
          list={AdmissionList}
          edit={AdmissionEdit}
          create={AdmissionCreate}
          show={AdmissionShow}
        />
        <Resource
          name="Assessment"
          list={AssessmentList}
          edit={AssessmentEdit}
          create={AssessmentCreate}
          show={AssessmentShow}
        />
        <Resource
          name="Fee"
          list={FeeList}
          edit={FeeEdit}
          create={FeeCreate}
          show={FeeShow}
        />
        <Resource
          name="ReportCard"
          list={ReportCardList}
          edit={ReportCardEdit}
          create={ReportCardCreate}
          show={ReportCardShow}
        />
        <Resource
          name="Exam"
          list={ExamList}
          edit={ExamEdit}
          create={ExamCreate}
          show={ExamShow}
        />
        <Resource
          name="Financial"
          list={FinancialList}
          edit={FinancialEdit}
          create={FinancialCreate}
          show={FinancialShow}
        />
        <Resource
          name="Security"
          list={SecurityList}
          edit={SecurityEdit}
          create={SecurityCreate}
          show={SecurityShow}
        />
      </Admin>
    </div>
  );
};

export default App;
