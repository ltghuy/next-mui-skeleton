'use client';

import { ColorPath } from '@/types/colorPath';
import { checkIsPathColor } from '@/utils/core/color/checkIsPathColor';
import { getValueByPath } from '@/utils/core/mapping/getValueByPath';
import {
  SxProps,
  Theme,
  Typography,
  TypographyOwnProps,
  TypographyProps,
  useTheme,
} from '@mui/material';
import { forwardRef, useMemo } from 'react';

export interface CoreTypographyProps extends TypographyProps {
  color?: TypographyOwnProps['color'] | ColorPath;
  ellipsisLines?: number;
}

export const CoreTypography = forwardRef<
  HTMLParagraphElement | null,
  CoreTypographyProps
>(({ color, ellipsisLines, sx, ...others }, ref) => {
  const { palette } = useTheme();

  const ellipsisStyles: SxProps<Theme> = useMemo(() => {
    if (!ellipsisLines) {
      return {};
    }
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      wordBreak: 'break-word',
      display: '-webkit-box',
      WebkitLineClamp: ellipsisLines,
      WebkitBoxOrient: 'vertical',
    };
  }, [ellipsisLines]);

  const colorResoled = checkIsPathColor(color)
    ? getValueByPath(palette, color)
    : color;

  return (
    <Typography
      ref={ref}
      color={colorResoled}
      sx={{
        ...ellipsisStyles,
        ...sx,
      }}
      {...others}
    />
  );
});
