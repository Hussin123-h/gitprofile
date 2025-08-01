const CONFIG = {
  github: {
    username: 'Hussin123-h', // <-- Updated to your GitHub username
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/waheebedrees/waheebedrees.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/waheebedrees/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'Github Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'Hussin123-h/langchain',
        ], // Example: your top repos, add/remove as desired
      },
    },
    external: {
      header: 'My Projects',
      projects: [
        
        // Add more as needed, or leave as is
      ],
    },
  },
  seo: {
    title: 'Portfolio of Hussin Noman',
    description: 'Showcase ofHussin Noman\'s open source projects, blogs, and skills.',
    imageURL: '',
  },
  social: {
    linkedin: '', // Add your LinkedIn username if available
    x: '',        // Add your X (Twitter) username if available
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '', // Add your website if available
    phone: '',
    email: 'hussinnoman2004@gmail.com', // Add your email if you want to display it
  },
  resume: {
    fileUrl: '', // Add your resume link if available
  },
  skills: [
    'Python',
    'Shell',
    'Docker',
    'Dart',
    
    // Add more skills as relevant
  ],
  experiences: [
    // Fill in with your real experiences
    {
    },
  ],
  certifications: [
    // Fill in with your real certifications
  ],
  educations: [
    // Fill in with your education background
  ],
  publications: [
    // Fill in with your publications if any
  ],
  blog: {
    source: '', // medium | dev, add one if you have blog articles
    username: 'Hussin', // your username on the blog platform
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'black',
      'dracula',
      'business',
      'acid',
      'night',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a>`,
  enablePWA: true,
};

export default CONFIG;
