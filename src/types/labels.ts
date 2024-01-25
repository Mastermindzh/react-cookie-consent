export interface Labels {
  about: GeneralLabels;
  consent: GeneralLabels;
  cookieCategory: CookieLabels;
  details: GeneralLabels;
  main: MainLabels;
}

interface CookieLabels {
  mandatory: GeneralLabels;
  preferences: GeneralLabels;
  statistics: GeneralLabels;
  marketing: GeneralLabels;
  unclassified: GeneralLabels;
}

interface MainLabels {
  buttonAllow: string;
  buttonDefault: string;
  descriptionPrivacyLink: string;
  descriptionPrivacyTitle: string;
  descriptionStart: string;
  descriptionEnd: string;
  moreSettings: string;
  title: string;
}

interface GeneralLabels {
  description: string;
  title: string;
}
