interface DownloadFileProps {
  href: string;
  fileName: string;
}

export const downloadFile = (props: DownloadFileProps) => {
  const { href, fileName } = props;

  const link = document.createElement("a");
  link.href = href;
  link.download = fileName;
  link.click();
};
