import React, { useEffect, useState } from 'react';
import { useFormikContext } from 'formik';
import { AiOutlineEye } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { theme, Theme } from 'src/libs/theme';
import classnames from 'classnames';

const useStyles = createUseStyles<string, {}, any>((theme: Theme) => ({
  inputContainer: {
    width: '100%',
    position: 'relative',
    marginTop: theme.marginBase * 2,
    ...theme.basicFlex,
    transition: 'all ease-in-out 0.3s',
    borderLeft: ` solid 2px ${theme.colors.transparentDarkGray}`,
    borderRight: ` solid 2px ${theme.colors.transparentDarkGray}`,
    borderRadius: theme.borderRadius.std,
    borderBottom: `2px solid ${theme.colors.lightGray}50`,
    '&:hover': {
      borderBottom: `2px solid ${theme.colors.lightGray}`,
    },
  },
  textAreaContainer: {
    borderRadius: theme.borderRadius.std,
    width: '100%',
    position: 'relative',
    marginTop: theme.marginBase * 2,
    overflow: 'hidden',
    border: '0px solid transparent',
    ...theme.basicFlex,
  },
  textAreaHolder: {
    height: 0,
    width: 0,
    borderTop: `20px solid ${'#fff'}`,
    borderLeft: `20px solid transparent`,
    borderRight: `20px solid transparent`,
    position: 'absolute',
    bottom: -4,
    transform: 'rotate(-45deg)',
    right: -15,
    pointerEvents: 'none',
  },
  eyeContainer: {
    padding: theme.marginBase / 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    right: 0,
    bottom: 6,
    marginRight: 10,
  },
  eye: {
    fontSize: theme.icon.normal,
    color: theme.colors.lightGray,
  },
  input: {
    resize: 'none',
    outline: 'none',
    borderRadius: [theme.borderRadius.std, theme.borderRadius.std, 0, 0],
    backgroundColor: 'transparent',
    flex: 1,
    margin: 'auto',
    ...theme.fonts.caption,
    fontWeight: 500,
    padding: theme.marginBase,
    border: 'none',
    '&:focus + label': {
      top: -theme.marginBase * 3,
      left: 0,
      fontWeight: 700,
      color: theme.colors.blue,
      transition: 'all ease-in-out 0.2s',
      paddingLeft: '1%',
    },
  },
  textarea: {
    resize: 'block',
    outline: 'none',
    borderRadius: [theme.borderRadius.std, theme.borderRadius.std, 0, 0],
    backgroundColor: 'transparent',
    flex: 1,
    margin: 'auto',
    ...theme.fonts.caption,
    padding: theme.marginBase,
    height: 'fit-content',
    border: 'none',

    '&::-webkit-resizer': {
      display: 'none',
      zIndex: 2,
    },
    '&:focus + label': {
      top: -theme.marginBase * 3,
      left: 0,
      fontWeight: 700,
      color: theme.colors.blue,
      transition: 'all ease-in-out 0.2s',
      paddingLeft: '1%',
    },
  },
  label: {
    position: 'absolute',
    left: theme.marginBase,
    ...theme.fonts.label,
    marginLeft: 0,
    top: 6,
    paddingLeft: theme.marginBase / 2,
    transition: 'all ease-in-out 0.2s',
    pointerEvents: 'none',
  },
  hasValue: {
    fontWeight: 700,
    color: theme.colors.blue,
    top: -theme.marginBase * 3,
    left: 0,
    transition: 'all ease-in-out 0.2s',
    paddingLeft: '1%',
  },
  error: {
    ...theme.fonts.caption,
    fontSize: theme.fonts.caption.fontSize - 1,
    marginLeft: 4,
    paddingLeft: theme.marginBase / 2,
    paddingTop: theme.marginBase / 2,
    fontWeight: 500,
    color: theme.colors.red,
  },
  container: {
    width: '100%',
  },
}));

interface Input1Props {
  title: string;
  type?: string;
  name: string;
  value?: string;
  maxLength?: number;
  eye?: boolean;
  textarea?: boolean;
  className?: string;
  rows?: number;
  autoSize?: boolean;
  reset?: boolean;
  onChange?: (e: any) => void;
  error?: string;
}

const useAutosizeTextArea = (
  textAreaRef: HTMLTextAreaElement | null,
  value: string,
  textarea: boolean,
  disable: boolean,
) => {
  useEffect(() => {
    if (textAreaRef && textarea && !disable) {
      textAreaRef.style.height = '0px';
      const scrollHeight = textAreaRef.scrollHeight;
      textAreaRef.style.height = scrollHeight + 'px';
    }
  }, [textAreaRef, value, textarea, disable]);
};

export const Input = ({
  title,
  type = 'text',
  name,
  value,
  maxLength = 100,
  eye,
  textarea,
  className,
  autoSize,
  reset,
  onChange,
  error,
  rows = autoSize ? 1 : 3,
}: Input1Props) => {
  const formik = useFormikContext<any>();
  const [val, setVal] = useState(formik?.values[name] || value || '');
  const classes = useStyles({ theme });
  const [_type, setType] = useState(type);
  const ref = React.useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(ref.current, val, !!textarea, !autoSize);

  useEffect(() => {
    if (reset !== undefined) {
      setVal(formik?.values[name] || value || '');
    }
    // eslint-disable-next-line
  }, [reset]);

  const handleValue = (e: any) => {
    if (onChange) {
      setVal(e.value);
      onChange(e);
      return;
    }

    setVal(e.value);
    formik.setFieldValue(name, e.value);
  };

  return (
    <div className={classes.container}>
      <div className={classes.inputContainer}>
        {textarea ? (
          <textarea
            className={classnames(classes.textarea, className)}
            ref={ref}
            rows={rows}
            name={name}
            maxLength={maxLength}
            value={val}
            onChange={(e) => {
              handleValue(e.target);
            }}
          />
        ) : (
          <input
            className={classnames(classes.input)}
            type={_type}
            name={name}
            maxLength={maxLength}
            value={val}
            onChange={(e) => {
              handleValue(e.target);
            }}
          />
        )}
        <label
          className={classnames(classes.label, {
            [classes.hasValue]: val,
          })}
        >
          {title}
        </label>
        {eye && (
          <div
            className={classes.eyeContainer}
            onClick={() => {
              _type === 'password' ? setType('text') : setType('password');
            }}
          >
            <AiOutlineEye className={classes.eye} />
          </div>
        )}
      </div>
      {formik && formik.touched[name] && formik.errors[name] ? (
        <div className={classes.error}>{formik.errors[name]?.toString()}</div>
      ) : null}
      {error?.length ? <div className={classes.error}>{error}</div> : null}
    </div>
  );
};

export default Input;
