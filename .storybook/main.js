module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-google-analytics/register',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs/register',
    '@storybook/addon-backgrounds/register',
    '@storybook/addon-docs',
  ],
};



// Window.window.STORYBOOK_GA_ID = UA-100099495-6
// Window.window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'UA-100099495-6');

