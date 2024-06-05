import { ReportCard as TReportCard } from "../api/reportCard/ReportCard";

export const REPORTCARD_TITLE_FIELD = "id";

export const ReportCardTitle = (record: TReportCard): string => {
  return record.id?.toString() || String(record.id);
};
