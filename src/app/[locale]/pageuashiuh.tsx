"use client";

import { useTranslations } from "next-intl";

export default function IndexPage() {
  const t = useTranslations("IndexPage");

  return (
    <div title={t("title")}>
      <p className="max-w-[590px]">
        {t.rich("description", {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p>
    </div>
  );
}
