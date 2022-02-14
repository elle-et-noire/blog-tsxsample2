import { format } from 'url';
import getConfig from 'next/config';

const { publicRuntimeConfig = {} } = getConfig() || {};
const { basePath } = publicRuntimeConfig;

const B = (path: string): string => format((basePath || "") + (path || ""));

export default B;