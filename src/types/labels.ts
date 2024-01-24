export interface Labels {
  about: GeneralLabels;
  consent: GeneralLabels;
  details: GeneralLabels;
  main: MainLabels;
}

interface MainLabels {
  buttonAllow: string;
  buttonDefault: string;
  description: string;
  moreSettings: string;
  switchMandatory: string;
  switchMarketing: string;
  switchMoreInfo: string;
  switchPreferences: string;
  switchStatistics: string;
  title: string;
}

interface GeneralLabels {
  description: string;
  title: string;
}
