export interface TodoResponse {
  id: string;              // UUID
  title: string;
  description: string | null;
  deadline: string;        // ISO date (YYYY-MM-DD)
  done: boolean;
  createdAt: string;       // ISO datetime
  updatedAt: string;       // ISO datetime
  userId: string;          // UUID
}