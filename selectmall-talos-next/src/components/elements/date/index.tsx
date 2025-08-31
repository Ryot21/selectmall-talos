import Image from "next/image";
import { formatDate } from "@/utils/date";

type Props = {
    date: string;
}

export default function Date({ date } : Props) {
    return (
        <time dateTime={formatDate(date)} className={"time"}>
            <Image
                src="/images/SVG/clock.svg"
                alt="時計"
                width={12}
                height={12}
            />
            <span className={"s-SS -s10 -left -b -ls-2"}>{formatDate(date)}</span>
        </time>
    );
}