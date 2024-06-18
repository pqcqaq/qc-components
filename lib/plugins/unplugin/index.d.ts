import { ResolverConfiog } from '../types';

declare const QcComponentsResolver: (config?: ResolverConfiog) => import('unplugin-vue-components/types').ComponentResolverFunction;
export default QcComponentsResolver;
