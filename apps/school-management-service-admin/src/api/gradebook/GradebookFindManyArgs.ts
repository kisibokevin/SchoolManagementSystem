import { GradebookWhereInput } from "./GradebookWhereInput";
import { GradebookOrderByInput } from "./GradebookOrderByInput";

export type GradebookFindManyArgs = {
  where?: GradebookWhereInput;
  orderBy?: Array<GradebookOrderByInput>;
  skip?: number;
  take?: number;
};
