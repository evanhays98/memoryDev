import React from 'react';
import { createUseStyles } from 'react-jss';
import { AiOutlineHome } from 'react-icons/ai';
import { RiHistoryFill, RiTokenSwapLine } from 'react-icons/ri';
import { Colors, Theme, theme } from '../theme';
import classnames from 'classnames';
import {
  IoCheckmarkCircle,
  IoCloseCircleSharp,
  IoReloadSharp,
} from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';
import {
  FaAngular,
  FaArrowLeft,
  FaArrowRight,
  FaJava,
  FaVuejs,
} from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6';
import {
  SiCsharp,
  SiDjango,
  SiDocker,
  SiDotnet,
  SiGit,
  SiJavascript,
  SiJenkins,
  SiKubernetes,
  SiNestjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si';

const useStyles = createUseStyles<string, { size: number; color: Colors }, any>(
  (theme: Theme) => ({
    icon: (props) => ({
      fontSize: props.size,
      color: theme.colors[props.color],
      fontWeight: 700,
      height: 24,
      width: 24,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  }),
);

export enum Icon {
  home = 'home',
  swap = 'swap',
  load = 'load',
  payment = 'payment',
  history = 'history',
  send = 'send',
  receive = 'receive',
  exchange = 'exchange',
  success = 'success',
  fail = 'fail',
  javascript = 'javascript',
  typescript = 'typescript',
  python = 'python',
  csharp = 'csharp',
  java = 'java',
  postgre = 'postgre',
  react = 'react',
  vueJs = 'vueJs',
  angular = 'angular',
  nestJs = 'nestJs',
  django = 'django',
  spring_boot = 'spring_boot',
  dotnet = 'dotnet',
  docker = 'docker',
  kubernetes = 'kubernetes',
  jenkins = 'jenkins',
  git = 'git',
}

interface Props {
  icon: Icon;
  size?: number;
  color?: Colors;
  className?: string;
  style?: React.CSSProperties;
}

export const Icons = ({ icon, size, color, className, style }: Props) => {
  const classes = useStyles({
    size: size || theme.icon.large,
    color: color || 'black',
    theme,
  });
  const classNames = classnames(classes.icon, className);
  return (
    <>
      {icon === Icon.home && (
        <AiOutlineHome className={classNames} style={style} />
      )}
      {icon === Icon.swap && (
        <RiTokenSwapLine className={classNames} style={style} />
      )}
      {icon === Icon.load && (
        <div className={classNames} style={style}>
          <IoReloadSharp />
        </div>
      )}
      {icon === Icon.payment && (
        <div className={classNames} style={style}>
          <MdOutlinePayment />
        </div>
      )}
      {icon === Icon.history && (
        <div className={classNames} style={style}>
          <RiHistoryFill />
        </div>
      )}
      {icon === Icon.send && (
        <div className={classNames} style={style}>
          <FaArrowRight />
        </div>
      )}
      {icon === Icon.receive && (
        <div className={classNames} style={style}>
          <FaArrowLeft />
        </div>
      )}
      {icon === Icon.exchange && (
        <div className={classNames} style={style}>
          <FaArrowRightArrowLeft />
        </div>
      )}
      {icon === Icon.success && (
        <div className={classNames} style={style}>
          <IoCheckmarkCircle />
        </div>
      )}
      {icon === Icon.fail && (
        <div className={classNames} style={style}>
          <IoCloseCircleSharp />
        </div>
      )}
      {icon === Icon.javascript && (
        <div className={classNames} style={style}>
          <SiJavascript />
        </div>
      )}
      {icon === Icon.typescript && (
        <div className={classNames} style={style}>
          <SiTypescript />
        </div>
      )}
      {icon === Icon.python && (
        <div className={classNames} style={style}>
          <SiPython />
        </div>
      )}
      {icon === Icon.csharp && (
        <div className={classNames} style={style}>
          <SiCsharp />
        </div>
      )}
      {icon === Icon.java && (
        <div className={classNames} style={style}>
          <FaJava />
        </div>
      )}
      {icon === Icon.postgre && (
        <div className={classNames} style={style}>
          <SiPostgresql />
        </div>
      )}
      {icon === Icon.react && (
        <div className={classNames} style={style}>
          <SiReact />
        </div>
      )}
      {icon === Icon.vueJs && (
        <div className={classNames} style={style}>
          <FaVuejs />
        </div>
      )}
      {icon === Icon.angular && (
        <div className={classNames} style={style}>
          <FaAngular />
        </div>
      )}
      {icon === Icon.nestJs && (
        <div className={classNames} style={style}>
          <SiNestjs />
        </div>
      )}
      {icon === Icon.django && (
        <div className={classNames} style={style}>
          <SiDjango />
        </div>
      )}
      {icon === Icon.spring_boot && (
        <div className={classNames} style={style}>
          <SiSpringboot />
        </div>
      )}
      {icon === Icon.dotnet && (
        <div className={classNames} style={style}>
          <SiDotnet />
        </div>
      )}
      {icon === Icon.docker && (
        <div className={classNames} style={style}>
          <SiDocker />
        </div>
      )}
      {icon === Icon.kubernetes && (
        <div className={classNames} style={style}>
          <SiKubernetes />
        </div>
      )}
      {icon === Icon.jenkins && (
        <div className={classNames} style={style}>
          <SiJenkins />
        </div>
      )}
      {icon === Icon.git && (
        <div className={classNames} style={style}>
          <SiGit />
        </div>
      )}
    </>
  );
};
