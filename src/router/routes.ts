import { generatePath } from 'react-router-dom'

export enum ROUTE_PATHS {
  MAIN = '/main',
}

export const ROUTE_URLS = {
  MAIN: () => generatePath(ROUTE_PATHS.MAIN),
}
