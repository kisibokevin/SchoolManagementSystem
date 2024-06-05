import { Security as TSecurity } from "../api/security/Security";

export const SECURITY_TITLE_FIELD = "id";

export const SecurityTitle = (record: TSecurity): string => {
  return record.id?.toString() || String(record.id);
};
