import { ReportCardWhereInput } from "./ReportCardWhereInput";
import { ReportCardOrderByInput } from "./ReportCardOrderByInput";

export type ReportCardFindManyArgs = {
  where?: ReportCardWhereInput;
  orderBy?: Array<ReportCardOrderByInput>;
  skip?: number;
  take?: number;
};
