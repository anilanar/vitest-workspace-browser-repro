import { defineProject } from 'vitest/config';

export default defineProject({
  test: {
    include: ['**/*.test.ts'],
    browser: {
      enabled: true,
      name: 'chrome',
    },
  },
});
