import Link from "next/link";
import { INFORMATION_PAGE_LIST_LIMIT } from "@/constants";

type Props = {
    totalCount: number;
    current?: number;// 現在地の判定
    basePath?: string;// URL
};

export default function Pagination({ 
        totalCount, 
        current = 1,
        basePath= "/information",
    }: Props) {
    const pages = Array.from (
        { length: Math.ceil(totalCount / INFORMATION_PAGE_LIST_LIMIT) },
        (_, i) => i + 1
    );

    return (
        <nav className={"c-pagination a-fade -tm1 -sp1"}>
            <ul className={"c-pagination__lists"}>
                { pages.map(( item ) => (
                    <li key={item} className={"c-pagination__item"}>
                        { current !== item ? (
                            <Link href={`${basePath}/page/${item}`} className={"c-pagination__link s-M -center"}>
                                {item}
                            </Link>
                        ) : (
                            <Link href={`${basePath}/page/${item}`} className={"active c-pagination__link s-M -center"}>
                                {item}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    )
}