import { Direction } from '@enums/direction.enum';
import { ProcessedFlowType } from '@enums/processed-flow-type.enum';

export interface Message {
  id: number;
  content: string;
  receptionDate: string;
  partner: {
    alias: string;
    type: string;
    application: string;
  };
}
