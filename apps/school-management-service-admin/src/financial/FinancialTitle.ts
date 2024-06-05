import { Financial as TFinancial } from "../api/financial/Financial";

export const FINANCIAL_TITLE_FIELD = "id";

export const FinancialTitle = (record: TFinancial): string => {
  return record.id?.toString() || String(record.id);
};
