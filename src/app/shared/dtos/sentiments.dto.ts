import { SentimentDto } from './sentiment.dto.ts';

export interface SentimentsDto {
  symbol: string;
  data: SentimentDto[];
}
