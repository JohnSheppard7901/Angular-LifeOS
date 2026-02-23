export interface TodoCreateDto {
  title: string;
  description?: string;
  deadline?: string;        // ISO date (YYYY-MM-DD)
}