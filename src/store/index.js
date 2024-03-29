import Vue from 'vue';
import Vuex from 'vuex';

import sectionStore from './sectionStore';
import menuStore from './menuStore';
import editorStore from './editorStore';
import timerStore from './timerStore';

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  return new Vuex.Store({
    modules: {
      sectionStore,
      editorStore,
      menuStore,
      timerStore,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING,
  });
}
