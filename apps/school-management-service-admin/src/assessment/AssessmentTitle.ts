import { Assessment as TAssessment } from "../api/assessment/Assessment";

export const ASSESSMENT_TITLE_FIELD = "id";

export const AssessmentTitle = (record: TAssessment): string => {
  return record.id?.toString() || String(record.id);
};
