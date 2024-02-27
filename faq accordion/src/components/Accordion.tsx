import { useState } from 'preact/hooks'
import { questions } from '../helpers/info'
import AccordionItem from './AccordionItem'
function Accordion() {

    const [indexCurrent, setIndexCurrent] = useState<number | null>(null)

    return (
        <ul>
            {
                questions.map(({ question, answer }, index) => <AccordionItem setIndexCurrent={setIndexCurrent} indexCurrent={indexCurrent} key={index} index={index} question={question} answer={answer} />)
            }
        </ul>
    )
}

export default Accordion