import { NavItem } from "../../types";

export const isDownloadItem = (navItem: NavItem): boolean => {
  return Boolean(navItem.options?.isDownload && navItem.options?.href && navItem.options?.fileName);
};
