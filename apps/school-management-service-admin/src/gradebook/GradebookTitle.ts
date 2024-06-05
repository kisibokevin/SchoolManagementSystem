import { Gradebook as TGradebook } from "../api/gradebook/Gradebook";

export const GRADEBOOK_TITLE_FIELD = "id";

export const GradebookTitle = (record: TGradebook): string => {
  return record.id?.toString() || String(record.id);
};
