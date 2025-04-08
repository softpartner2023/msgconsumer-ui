import { Direction } from '@enums/direction.enum';
import { ProcessedFlowType } from '@enums/processed-flow-type.enum';

export interface Partner {
  id?: number;
  alias: string;
  type: string;
  direction: Direction;
  application: string;
  processedFlowType: ProcessedFlowType;
  description: string;
}
