import React from 'react';
import { createUseStyles } from 'react-jss';
import { ColorsString, Theme, theme } from 'src/libs/theme';
import { Icon, Icons } from '../../../libs/core';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  container: {
    width: '100%',
    maxWidth: theme.boxWidth.tiny,
    display: 'grid',
    gridTemplateColumns: 'min-content 1fr',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: theme.marginBase * 3,
    padding: theme.marginBase,
    border: `1px solid ${theme.colors.blue}90`,
    borderRadius: theme.borderRadius.std,
  },
  amountContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    flexDirection: 'column',
  },
  inline: {
    ...theme.fonts.label,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.marginBase,
  },
  label: {
    ...theme.fonts.label,
    whiteSpace: 'nowrap',
  },
  caption: {
    ...theme.fonts.caption,
  },
}));

interface Props {
  icon: Icon;
  title: string;
}

export const ConversionHistoryLine = ({ icon, title }: Props) => {
  const classes = useStyles({ theme });

  return (
    <div className={classes.container}>
      <Icons icon={icon} color={ColorsString.blue} />
      <p className={classes.label}>{title}</p>
    </div>
  );
};
