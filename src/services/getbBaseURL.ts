import type { ProjectInter, serveType } from "@/types/services/project";

import pConfig from "./project";
const project: ProjectInter = {
  base_api: {
    baseURL: pConfig.BASE_API
  },
  admin_interface: {
    baseURL: pConfig.ADMIN_INTERFACE
  },
  mock: {
    baseURL: pConfig.MOCK
  }
};

export default function getBaseUrl(type: serveType): string {
  return project[type].baseURL;
}
