import { IPagination } from '../models/pagination';

export interface FilterOrderProps {
  concept?: string;
  sortFieldName: string;
  sortOrder: string;
  cardNumber: number | null;
  pagination: IPagination;
  createDate?: string;
  fromAndToDates?: {
    dateFrom: PatternDate;
    dateTo?: PatternDate;
  };
}

export type PatternDate = `yyyy-mm-dd'T'HH:mm:ss`;
