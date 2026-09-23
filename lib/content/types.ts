export type ContentType =
  | "smartphone"
  | "ev"
  | "ai"
  | "software";

export type ContentStatus =
  | "draft"
  | "published";

export interface ImageSource {
  name: string;
  url: string;
}

export interface ContentImage {
  title: string;
  image: string;
  source?: ImageSource;
}

export interface BaseContent {
  slug: string;
  name: string;
  brand?: string;

  type: ContentType;

  shortDescription: string;
  description: string;

  status: ContentStatus;

  images: {
    hero: string;
    hero2?: string;
    gallery: ContentImage[];
  };

  publishedAt?: string;
  updatedAt?: string;
}


// smartphone section 

export interface SmartphoneContent extends BaseContent {
  type: "smartphone";
  category: "smartphone";
  heroContent: heroContentType;

  price?: {
    currency: string;
    amount: number | null;
  };

  specsOverview?: {
    heading: string;
    subheading: string;
  };

  galleryOverview?: {
    heading: string;
    subheading: string;
  };

  reviewsOverview?: {
    heading: string;
    subheading: string;
  };

  comparisonsOverview?: {
    heading: string;
    subheading: string;
  };

  buyDecisionOverview?: {
    heading: string;
    subheading: string;
  };

  cameraSamplesOverview?: {
    heading: string;
    subheading: string;
  };

  cameraVerdictOverview?: {
    heading: string;
    subheading: string;
  };
  specs: Record<string, SmartphoneSpecSection>;
  reviews: SmartphoneOwnerReviews;
  comparisons: SmartphoneComparison[];
  buyDecision: SmartphoneBuyDecision;
  cameraSamples: SmartphoneCameraSample[];
  cameraVerdict: SmartphoneCameraVerdict;
  assessment: SmartphoneAssessment;
  performance: SmartphonePerformance;
}

export type heroContentType  = {
  heading: string;
  subheading: string;
  primaryCta: string;
  secondaryCta: string;
  features: {
    label: string;
    value: string;
  }[];
}

export type SmartphoneAssessmentDepartment = {
  name: string;
  score: number;
  summary: string;
};

export type SmartphoneAssessment = {
  overall: number;
  summary: string;
  departments: SmartphoneAssessmentDepartment[];
  pros: string[];
  cons: string[];
};

export interface SmartphoneCameraVerdict {
  pros: string[];
  cons: string[];
  summary: string;
  heading: string;
  subheading: string;
}
export type SmartphonePerformanceArchitecture = {
  cpu: string;
  gpu: string;
  process: string;
  summary: string;
};

export type SmartphoneGeekbenchResults = {
  singleCore: number | null;
  multiCore: number | null;
};

export type SmartphoneAntutuResults = {
  total: number | null;
  cpu: number | null;
  gpu: number | null;
  memory: number | null;
  ux: number | null;
};

export type SmartphonePerformanceBenchmarks = {
  geekbench: SmartphoneGeekbenchResults;
  antutu: SmartphoneAntutuResults;
};

export type SmartphoneGamingTest = {
  name: string;
  settings: string;
  averageFps: number | null;
  fpsRange: string;
  duration: string;
  notes?: string;
};

export type SmartphoneSustainedGaming = {
  summary: string;
  performanceDrop: string | null;
};

export type SmartphoneGamingPerformance = {
  games: SmartphoneGamingTest[];
  sustainedPerformance: SmartphoneSustainedGaming;
};

export type SmartphoneThermalBehavior = {
  summary: string;
  peakTemperature: string | null;
  sustainedTemperature: string | null;
};

export type SmartphoneAppLoading = {
  summary: string;
  observations: string[];
};

export type SmartphonePerformanceBatteryImpact = {
  gaming: string | null;
  heavyUse: string | null;
  summary: string;
};

export type SmartphonePerformanceAnalysis = {
  summary: string;
  strengths: string[];
  limitations: string[];
};

export type SmartphonePerformance = {
  heading: string;
  subheading: string;

  architecture: SmartphonePerformanceArchitecture;

  benchmarks: SmartphonePerformanceBenchmarks;

  gaming: SmartphoneGamingPerformance;

  thermal: SmartphoneThermalBehavior;

  appLoading: SmartphoneAppLoading;

  batteryImpact: SmartphonePerformanceBatteryImpact;

  analysis: SmartphonePerformanceAnalysis;
};

export interface ContentImage {
  title: string;
  image: string;
  source?: ImageSource;
}

export interface SmartphoneCameraSample {
  title: string;
  image: string;
  credit?: string;
  creditUrl?: string;
  cameraScore?: number;
  thoughts?: string;
  category:
  | "main"
  | "ultrawide"
  | "telephoto"
  | "portrait"
  | "night"
  | "selfie";
  metadata?: {
    focalLength?: string;
    aperture?: string;
    shutterSpeed?: string;
    iso?: string;
  };
  source?: ImageSource;
}

export interface SmartphoneOwnerReviewTheme {
  title: string;
  description: string;
}

export interface SmartphoneOwnerReviews {
  summary: string;
  positives: string[];
  negatives: string[];
  themes: SmartphoneOwnerReviewTheme[];
}

export interface SmartphoneComparison {
  slug: string;
  name: string;
  brand: string;
  description: string;
  highlights: {
    label: string;
    value: string;
  }[];
}

export interface SmartphoneBuyDecision {
  summary: string;
rating: number;
  bestRating: number;
  reasonsToBuy: string[];

  reasonsToSkip: string[];

  bestFor: string[];

  notFor: string[];
}

// EV section 



export interface EVContent extends BaseContent {
  type: "ev";
  category: "ev";

  price?: {
    currency: string;
    amount: number | null;
  };
}

export interface AIContent extends BaseContent {
  type: "ai";
  category: "ai";

  pricing?: {
    model: string;
    startingPrice?: number | null;
  };
}

export interface SoftwareContent extends BaseContent {
  type: "software";
  category: "software";

  pricing?: {
    model: string;
    startingPrice?: number | null;
  };

}


export interface SmartphoneSpecItem {
  label: string;
  value: string;
}

export interface SmartphoneSpecSection {
  title: string;
  image?: string;
  heading: string;
  subheading: string;
  items: SmartphoneSpecItem[];
}

export type Content =
  | SmartphoneContent
  | EVContent
  | AIContent
  | SoftwareContent;