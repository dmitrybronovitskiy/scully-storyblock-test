import { ScullyConfig } from '@scullyio/scully';
/** this loads the default render plugin, remove when switching to something else. */

const accessToken = 'huWD0Fmxu3UhiN2L735SHgtt';
const version = 'draft';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'osnatec-project',
  outDir: './dist/static',
  routes: {
    '/newscontanier/:slug': {
      type: 'json',
      slug: {
        url: `https://api.storyblok.com/v2/cdn/stories?starts_with=newscontanier&sort_by=created_at%3Adesc&per_page=100&page=1&version=${version}&token=${accessToken}`,
        resultsHandler: (response: any) => response.stories,
        property: 'slug',
      },
    },
  },
};
