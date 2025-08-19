import Image from "next/image";

export function ImageCard({
  title,
  desc,
  imageSrc,
}: {
  title: string;
  desc: string;
  imageSrc?: string;
}) {
  return (
    <article className="border border-[color:var(--rule)] overflow-hidden shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      <div className="aspect-[16/9] bg-[#EEECE5] flex items-center justify-center overflow-hidden">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            width={400}
            height={225}
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <span className="text-black/50 text-sm font-mono">
            Image coming soon
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-heading text-[20px]">{title}</h3>
        <p className="mt-1 text-[15px] text-black/80 font-mono leading-relaxed">
          {desc}
        </p>
      </div>
    </article>
  );
}
