/* eslint-env node */
const simpleGit = require('simple-git');
// const types = [
//   'feat', // Feature
//   'fix', // Bugfix
//   'impr', // Improvement
//   'docs', // Documentation
//   'chore', // Build, config...
//   'tests', // Unit tests
//   'refactor', // Refactoring
// ]

const validAuthors = ['kreios.lu', 'users.noreply.gitlab.com'];

module.exports = {
  rules: {
    // 'type-empty': [0, 'never'],
    'references-empty': [2, 'never'],
    // 'type-enum': [2, 'always', types],
    'validate-author': [2, 'always'],
  },
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['BDQ-', 'BAQ-'],
    },
  },
  plugins: [
    {
      rules: {
        'validate-author': async ({ type, header, body, footer, raw, subject, scope }) => {
          const { value } = await simpleGit().getConfig('user.email');

          if (validAuthors.findIndex((v) => value.endsWith(v)) !== -1) {
            return [true];
          }

          const errorMessage = `Invalid git author email address '${value}'.
    Try setting yourname and email by:
      git config user.name YOUR_NAME
      git config user.email YOUR_EMAIL
          `;
          return [false, errorMessage];
        },
      },
    },
  ],
  prompt: {
    questions: {
      issues: {
        description: 'Add ticket number (e.g. "BDQ-1")',
      },
      subject: {
        description: 'Write commit message',
      },
    },
  },
};
