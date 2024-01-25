import { Labels } from "../types";

export const defaultLabels: Labels = {
  about: {
    title: "About",
    description: "This is an example of a cookie consent banner with more information.",
  },
  consent: {
    title: "Consent",
    description: "This is an example of a cookie consent banner with more information.",
  },
  details: {
    title: "Details",
    description: "This is an example of a cookie consent banner with more information.",
  },
  cookieCategory: {
    mandatory: {
      title: "Mandatory",
      description:
        "Necessary cookies help you use a website by enabling basic functions such as page navigation and " +
        "access to secure areas of the website. The website cannot function properly without these cookies.",
    },
    preferences: {
      title: "Preferences",
      description:
        "Preference cookies allow a website to remember information that changes the way the site behaves " +
        "or looks, such as your preferred language or region.",
    },
    marketing: {
      title: "Marketing",
      description:
        "Marketing cookies are used to track visitors to various websites. The intention is to display" +
        "ads that are relevant and engaging to each individual user, making them more valuable to publishers" +
        "and third-party advertisers.",
    },
    statistics: {
      title: "Statistics",
      description:
        "Statistics cookies help site owners understand how visitors interact with sites by " +
        "collecting and reporting information anonymously.",
    },
    unclassified: {
      title: "Unclassified",
      description:
        "Unclassified cookies are cookies that we are in the process of classifying, together with " +
        "the providers of individual cookies.",
    },
  },
  main: {
    buttonAllow: "Allow all",
    buttonDefault: "Allow default",
    descriptionStart:
      "For purposes such as displaying personalized content, we use " +
      "cookies or similar technologies. By clicking Accept, you agree to allow " +
      "the collection of information through cookies or similar technologies. " +
      "Find out more about cookies, including the ability to withdraw your " +
      "consent, in the",
    descriptionPrivacyTitle: "Privacy Policy",
    descriptionPrivacyLink: "/privacy-policy",
    descriptionEnd: "section.",
    moreSettings: "More settings",
    title: "This website uses cookies",
  },
};
