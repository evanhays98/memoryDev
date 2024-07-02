import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme, theme } from 'src/libs/theme';

const useStyles = createUseStyles((theme: Theme) => ({
  pageBackground: {
    position: 'absolute',
    background: theme.colors.background,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    overscrollBehavior: 'none',
  },
}));

export const PageBackground = () => {
  const classes = useStyles({ theme });
  return <div className={classes.pageBackground} />;
};
