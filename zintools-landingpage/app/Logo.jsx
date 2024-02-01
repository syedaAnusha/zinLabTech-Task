import Image from "next/image";
import "tailwindcss/tailwind.css";
export default function Logo() {
  return (
    <div className="xsm:w-11 flex justify-center align-middle">
      <Image
        src="/zintools-logo.jpg"
        width={30}
        height={30}
        alt="zintools-logo"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
