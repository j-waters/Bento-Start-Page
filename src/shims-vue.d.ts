/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

import * as CSS from 'csstype';

declare module 'csstype' {
  interface PropertiesHyphen {

    // ...or allow any other property
    [index: string]: any;
  }
}
