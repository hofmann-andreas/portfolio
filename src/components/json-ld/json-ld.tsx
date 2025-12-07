import Script from "next/script";
import { Thing } from "schema-dts";

interface JsonLdProps<T extends Thing> {
  data: T;
  id: string;
}

export function JsonLd<T extends Thing>({ data, id }: JsonLdProps<T>) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", ...(data as object) }),
      }}
    />
  );
}
