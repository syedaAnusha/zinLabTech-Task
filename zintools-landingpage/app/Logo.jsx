import Image from "next/image";
import "tailwindcss/tailwind.css";
export default function Logo() {
  return (
    <div className="xsm:w-6 xsm:h-6  md:w-[900%] md:h-[900%] flex justify-center align-middle">
      <Image
        src="/zintools-logo.jpg"
        width={40}
        height={20}
        alt="zintools-logo"
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
