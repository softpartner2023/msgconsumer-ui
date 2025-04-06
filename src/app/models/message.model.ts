import { Direction, FlowType } from './enums';

export interface Message {
  id: number;
  content: string;
  direction: Direction;
  flowType: FlowType;
  createdAt: string;
  partnerId: number;
}
