import { TechEnum } from '../enums';

type TechData = Record<TechEnum, string>;

export const tech_data_file: TechData = {
  [TechEnum.JAVASCRIPT]: '0_resume_javascript.md',
  [TechEnum.TYPESCRIPT]: '0_resume_typescript.md',
  [TechEnum.PYTHON]: '0_resume_python.md',
  [TechEnum.JAVA]: '0_resume_java.md',
  [TechEnum.CSHARP]: '0_resume_csharp.md',
  [TechEnum.POSTGRESQL]: '0_resume_postgresql.md',
  [TechEnum.REACT]: '0_resume_react.md',
  [TechEnum.VUE]: '0_resume_vue.md',
  [TechEnum.ANGULAR]: '0_resume_angular.md',
  [TechEnum.NESTJS]: '0_resume_nestjs.md',
  [TechEnum.DJANGO]: '0_resume_django.md',
  [TechEnum.SPRING_BOOT]: '0_resume_spring_boot.md',
  [TechEnum.DOT_NET]: '0_resume_dot_net.md',
  [TechEnum.DOCKER]: '0_resume_docker.md',
  [TechEnum.KUBERNETES]: '0_resume_kubernetes.md',
  [TechEnum.JENKINS]: '0_resume_jenkins.md',
  [TechEnum.GIT]: '0_resume_git.md',
};
