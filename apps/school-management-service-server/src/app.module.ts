import { Module } from "@nestjs/common";
import { AttendanceModule } from "./attendance/attendance.module";
import { StudentModule } from "./student/student.module";
import { CommunicationModule } from "./communication/communication.module";
import { StaffModule } from "./staff/staff.module";
import { GradebookModule } from "./gradebook/gradebook.module";
import { ReportModule } from "./report/report.module";
import { HomeworkModule } from "./homework/homework.module";
import { TimetableModule } from "./timetable/timetable.module";
import { ParentModule } from "./parent/parent.module";
import { AdmissionModule } from "./admission/admission.module";
import { AssessmentModule } from "./assessment/assessment.module";
import { FeeModule } from "./fee/fee.module";
import { ReportCardModule } from "./reportCard/reportCard.module";
import { ExamModule } from "./exam/exam.module";
import { FinancialModule } from "./financial/financial.module";
import { SecurityModule } from "./security/security.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    AttendanceModule,
    StudentModule,
    CommunicationModule,
    StaffModule,
    GradebookModule,
    ReportModule,
    HomeworkModule,
    TimetableModule,
    ParentModule,
    AdmissionModule,
    AssessmentModule,
    FeeModule,
    ReportCardModule,
    ExamModule,
    FinancialModule,
    SecurityModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
