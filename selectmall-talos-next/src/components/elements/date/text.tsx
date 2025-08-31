import { formatDate } from "@/utils/date";

type Props = {
    date: string;
}

export default function DateText({ date } : Props) {
    return (
        <time dateTime={formatDate(date)} className={"time"}>
            <span className={"-left -ws-n"}>{formatDate(date)}</span>
        </time>
    );
}