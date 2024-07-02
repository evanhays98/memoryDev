import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme, theme } from 'src/libs/theme';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { Navigate, useParams } from 'react-router-dom';
import { TechEnum } from '../../libs/enums';
import { tech_data_file } from '../../libs/dtos';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  globalContainer: {
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    gap: theme.marginBase * 6,
    flexDirection: 'column',
    paddingBottom: theme.marginBase * 6,
  },
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.marginBase * 4,
    padding: theme.marginBase * 4,
    flexDirection: 'column',
    width: '100%',
    maxWidth: theme.boxWidth.normal,
    margin: '0 auto',

    '@media (max-width: 768px)': {
      padding: theme.marginBase,
    },
  },
}));

export const Tech = () => {
  const classes = useStyles({ theme });
  const params = useParams();
  const tech = params['*'] as TechEnum;
  const [content, setContent] = useState<string>('');

  useEffect(() => {
    const file = tech_data_file[tech];
    console.log(file);
    fetch('/Data/' + file)
      .then((response) => response.text())
      .then((data) => {
        setContent(data);
      });
  }, [params, tech]);

  if (!(tech in TechEnum)) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className={classes.globalContainer}>
      <div className={classes.container}>
        <ReactMarkdown
          className={'markdown'}
          components={{
            code({ node, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '');
              return match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  language={match[1]}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
};
