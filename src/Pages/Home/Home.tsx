import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme, theme } from 'src/libs/theme';
import { TechLineButton } from './component/TechLineButton';
import { Icon } from '../../libs/core';
import { TechEnum } from '../../libs/enums';

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
    paddingBottom: theme.marginBase * 6,
    width: '100%',
    maxWidth: theme.boxWidth.large,
    margin: '0 auto',
  },
  balanceTitle: {
    ...theme.fonts.h2,
    color: theme.colors.black,
  },
  balanceContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: theme.marginBase,
    flexDirection: 'column',
  },
  balance: {
    ...theme.fonts.h3,
    color: theme.colors.black,
  },
  logOut: {
    ...theme.fonts.label,
    color: theme.colors.red,
    textDecoration: 'none',
  },
}));

export const Home = () => {
  const classes = useStyles({ theme });

  return (
    <div className={classes.globalContainer}>
      <div className={classes.container}>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balanceTitle}>Memory Dev</h2>
        </div>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balance}>Languages</h2>
          <TechLineButton
            icon={Icon.javascript}
            title="Javascript"
            tech={TechEnum.JAVASCRIPT}
          />
          <TechLineButton
            icon={Icon.typescript}
            title="Typescript"
            tech={TechEnum.TYPESCRIPT}
          />
          <TechLineButton
            icon={Icon.python}
            title="Python"
            tech={TechEnum.PYTHON}
          />
          <TechLineButton
            icon={Icon.csharp}
            title="C#"
            tech={TechEnum.CSHARP}
          />
          <TechLineButton icon={Icon.java} title="Java" tech={TechEnum.JAVA} />
          <TechLineButton
            icon={Icon.postgre}
            title="PostgreSQL"
            tech={TechEnum.POSTGRESQL}
          />
        </div>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balance}>Frontend</h2>
          <TechLineButton
            icon={Icon.react}
            title="React"
            tech={TechEnum.REACT}
          />
          <TechLineButton icon={Icon.vueJs} title="Vuejs" tech={TechEnum.VUE} />
          <TechLineButton
            icon={Icon.angular}
            title="Angular"
            tech={TechEnum.ANGULAR}
          />
        </div>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balance}>Backend</h2>
          <TechLineButton
            icon={Icon.nestJs}
            title="Nestjs"
            tech={TechEnum.NESTJS}
          />
          <TechLineButton
            icon={Icon.django}
            title="Django"
            tech={TechEnum.DJANGO}
          />
          <TechLineButton
            icon={Icon.spring_boot}
            title="SpringBoot"
            tech={TechEnum.SPRING_BOOT}
          />
          <TechLineButton
            icon={Icon.dotnet}
            title=".Net"
            tech={TechEnum.DOT_NET}
          />
        </div>
        <div className={classes.balanceContainer}>
          <h2 className={classes.balance}>Devops</h2>
          <TechLineButton
            icon={Icon.docker}
            title="Docker"
            tech={TechEnum.DOCKER}
          />
          <TechLineButton
            icon={Icon.kubernetes}
            title="Kubernetes"
            tech={TechEnum.KUBERNETES}
          />
          <TechLineButton
            icon={Icon.jenkins}
            title="Jenkins"
            tech={TechEnum.JENKINS}
          />
          <TechLineButton icon={Icon.git} title="Git" tech={TechEnum.GIT} />
        </div>
      </div>
    </div>
  );
};
