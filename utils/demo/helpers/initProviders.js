import * as cornerstone from '@jushacornerstonejs/core';
import ptScalingMetaDataProvider from './ptScalingMetaDataProvider';

const { calibratedPixelSpacingMetadataProvider } = cornerstone.utilities;

export default function initProviders() {
  cornerstone.metaData.addProvider(
    ptScalingMetaDataProvider.get.bind(ptScalingMetaDataProvider),
    10000
  );
  cornerstone.metaData.addProvider(
    calibratedPixelSpacingMetadataProvider.get.bind(
      calibratedPixelSpacingMetadataProvider
    ),
    11000
  );
}
