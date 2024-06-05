import { Homework as THomework } from "../api/homework/Homework";

export const HOMEWORK_TITLE_FIELD = "id";

export const HomeworkTitle = (record: THomework): string => {
  return record.id?.toString() || String(record.id);
};
