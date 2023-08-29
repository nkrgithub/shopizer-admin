/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

interface NodeModule {
  id: string;
}

declare let tinymce: any;
declare let echarts: any;

declare let $ENV: Env;
interface Env {
  googleApiKey: string;
  mode: string;
  apiUrl: string;
  client: any;
}
