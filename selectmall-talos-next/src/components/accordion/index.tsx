import { AccordionItem } from "@/types/accordion";

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps) {
    return (
        <div className="c-accordion">
            <ul className="c-accordion--list">
                {items.map((item) => (
                    <li key={item.id} className="c-accordion--item mgb2 mgb5s">
                        <input id={item.id} type="checkbox" className="toggle" />
                        <label htmlFor={item.id} className="label s-ML -color02 -b -ls-2">
                            {item.question}
                        </label>
                        <p className="c-accordion--text s-M -b -ls-2">
                            {item.answer}
                        </p>
                    </li>
                ))}
            </ul>
        </div>

    );
}
