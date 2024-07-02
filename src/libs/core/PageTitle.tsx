import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme, theme } from '../theme';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  globalContainer: {
    width: '100%',
    padding: [theme.marginBase * 3, theme.marginBase * 2],
  },
  title: {
    ...theme.fonts.h1,
    background: theme.colors.blueGradiant,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  },
}));

interface Props {
  text: string;
}

export const PageTitle = ({ text }: Props) => {
  const classes = useStyles({ theme });
  return (
    <div className={classes.globalContainer}>
      <h1 className={classes.title}>{text}</h1>
    </div>
  );
};
