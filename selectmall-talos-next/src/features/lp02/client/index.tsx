import type { Client } from "@/types/microcms";

type Props = {
    client: Client | Client[];
};

export default function LpClient({ client }: Props) {
    const clients = Array.isArray(client) ? client : [client];
    
    return (
        <div className={"c-post--box"}>
            {/* 導入した目的 / 導入した決め手 / 結果 */}
            <div className="c-post--box__inner">
                {clients.map((item, index) => (
                    <ul key={index} className="c-flex -col1_3">
                        <li className={"flexItem pdt2s pdb2s"}>{/* 導入した目的 */}
                            <h3 className={"s-ML -s16 -b -ls-4 -lh-1_5 -center mgb2 mgb2s"}>
                                <span className="-marker -b">導入した目的</span>
                            </h3>
                            <p className={"c-post--text s-S -s12 -left -b -ls-2 -lh-1_5"}>{item.purpose}</p>
                        </li>
                        <li className={"flexItem -border -left -right pdt2s pdb2s"}>{/* 決め手 */}
                            <h3 className={"s-ML -s16 -b -ls-4 -lh-1_5 -center mgb2 mgb2s"}>
                                <span className="-marker -y">導入した決め手</span>
                            </h3>
                            <p className={"c-post--text s-S -s12 -left -b -ls-2 -lh-1_5"}>{item.clincher}</p>
                        </li>
                        <li className={"flexItem pdt2s pdb2s"}>{/* 結果 */}
                            <h3 className={"s-ML -s16 -b -ls-4 -lh-1_5 -center mgb2 mgb2s"}>
                                <span className="-marker -o">結果</span>
                            </h3>
                            <p className={"c-post--text s-S -s12 -left -b -ls-2 -lh-1_5"}>{item.result}</p>
                        </li>
                    </ul>
                ))}
            </div>
            <p className={"c-post--box__btm"}>
                <span className="s-ML -s16 -b -white -ls-2 -lh-1_5">“金融リテラシー” “ウェルビーイング” が経産省や金融庁の資料で推奨されています</span>
            </p>
        </div>
    );
}