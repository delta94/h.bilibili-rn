/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

const IconPicfill: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M842.688 128 181.312 128C116.64 128 64 180.64 64 245.312l0 533.376C64 843.36 116.64 896 181.312 896l661.376 0C907.36 896 960 843.36 960 778.688L960 245.312C960 180.64 907.36 128 842.688 128zM288 288c35.36 0 64 28.64 64 64s-28.64 64-64 64c-35.328 0-64-28.64-64-64S252.672 288 288 288zM832 736c0 17.696-14.304 31.488-32 31.488L225.92 768c-0.128 0-0.224 0-0.352 0-10.08 0-19.616-4.288-25.664-12.384-6.112-8.192-7.936-18.56-4.896-28.352 2.304-7.488 58.272-183.552 180.064-183.552 38.08 0.896 67.424 9.824 95.776 18.336 35.712 10.72 70.528 19.936 109.664 13.76 20.448-3.296 28.896-23.808 43.328-69.952 19.04-60.8 47.808-152.736 174.656-152.736 17.536 0 31.776 14.08 32 31.616L832 511.616 832 736z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPicfill.defaultProps = {
  size: 18,
};

export default React.memo ? React.memo(IconPicfill) : IconPicfill;
