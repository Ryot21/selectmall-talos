import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
  customClass?: string;
};

export default function Iconbutton({ href, children, customClass }: Props) {
  return (
    <Link href={href} className={`s-M -s14 -b -white -ls-1 -ws-n ${customClass}`}>
      {children}
    </Link>
  );
}