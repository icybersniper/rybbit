// لوگوی برند — آی‌ریپورت. مارکِ مربعی برای آیکن‌های کوچک، و ورژن افقی (مارک +
// نویسه) برای صفحهٔ ورود/فوتر. SVGها تک‌رنگ سفیدند و با invert در تم روشن سیاه
// می‌شوند تا در هر دو تم خوانا بمانند (همان ترفندِ بالادست).
import Image from "next/image";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const HORIZONTAL_LOGO_ASPECT_RATIO = 500 / 100.27;

function getTextLogoHeight(width: number, height?: number) {
  return height && height > 0 ? height : Math.round(width / HORIZONTAL_LOGO_ASPECT_RATIO);
}

export function RybbitLogo({ width = 32, height = 32 }: { width?: number; height?: number }) {
  const [mounted, setMounted] = useState(false);
  const imageStyle = { width, height, objectFit: "contain" as const };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton style={{ width, height }} />;
  }

  return (
    <Image
      src="/ireport/mark.svg"
      alt="آی‌ریپورت"
      width={width}
      height={height}
      style={imageStyle}
      className="invert dark:invert-0"
    />
  );
}

export function RybbitTextLogo({ width = 150, height }: { width?: number; height?: number }) {
  const [mounted, setMounted] = useState(false);
  const resolvedHeight = getTextLogoHeight(width, height);
  const imageStyle = { width, height: resolvedHeight, objectFit: "contain" as const };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Skeleton style={{ width, height: resolvedHeight }} />;
  }

  return (
    <Image
      src="/ireport/logo.svg"
      alt="آی‌ریپورت"
      width={width}
      height={resolvedHeight}
      style={imageStyle}
      loading="eager"
      className="dark:invert-0 invert"
    />
  );
}
