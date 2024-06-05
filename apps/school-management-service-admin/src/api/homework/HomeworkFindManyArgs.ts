import { HomeworkWhereInput } from "./HomeworkWhereInput";
import { HomeworkOrderByInput } from "./HomeworkOrderByInput";

export type HomeworkFindManyArgs = {
  where?: HomeworkWhereInput;
  orderBy?: Array<HomeworkOrderByInput>;
  skip?: number;
  take?: number;
};
