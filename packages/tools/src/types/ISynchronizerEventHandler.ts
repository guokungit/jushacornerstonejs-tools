import { Types } from '@jushacornerstonejs/core';
import { Synchronizer } from '../store';

export default interface ISynchronizerEventHandler {
  (
    synchronizer: Synchronizer,
    sourceViewport: Types.IViewportId,
    targetViewport: Types.IViewportId,
    sourceEvent: any
  ): void;
}
