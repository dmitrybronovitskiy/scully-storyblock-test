import { ScullyConfig } from '@scullyio/scully';

/** this loads the default render plugin, remove when switching to something else. */


export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "my-app-name",
  outDir: './dist/static',
  routes: {
    home: {
      type: 'default'
    },
    user: {
      type: 'default'
    },
    test: {
      type: 'default'
    },
  }
};
