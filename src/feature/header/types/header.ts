interface NavItemOption {
  href: string;
  isDownload: boolean;
  fileName: string;
}

export interface NavItem {
  label: string;
  id: string;
  options?: NavItemOption;
}
