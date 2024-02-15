import { getPlaiceholder } from "plaiceholder";
import Image from "next/image";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {
  const src =
    "https://images.unsplash.com/photo-1621961458348-f013d219b50c";
  const buffer = await fetch(src).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={src}
      alt="some image"
      width="707"
      height="471"
      placeholder={"blur"}
      priority
      blurDataURL={base64}
    />
  );
}
