import { AssessmentWhereInput } from "./AssessmentWhereInput";
import { AssessmentOrderByInput } from "./AssessmentOrderByInput";

export type AssessmentFindManyArgs = {
  where?: AssessmentWhereInput;
  orderBy?: Array<AssessmentOrderByInput>;
  skip?: number;
  take?: number;
};
