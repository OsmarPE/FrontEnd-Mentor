import Plus from './Plus'
import Minus from './Minus'

interface Props{
    question:string,
    answer:string,
    index:number,
    indexCurrent:number,
    setIndexCurrent:(value:number) => void
}

function AccordionItem({question,answer,index,indexCurrent,setIndexCurrent}:Props) {


    const handleClick = () =>{
        indexCurrent !== index ? setIndexCurrent(index) : setIndexCurrent(null)
    }
    

    return (
        <li class='block border-t border-t-grayMain/10 py-4'>
            <button onClick={handleClick} class='flex items-center justify-between w-full transition-colors text-darkMain hover:text-pinkSecundary'>
                <p class='text-base text-left font-bold leading-5 '>
                    {question}
                </p>
                <div>
                    {indexCurrent === index ? <Minus /> : <Plus />}
                </div>
            </button>
            {
                index === indexCurrent && (

                    <div class='pt-4'>
                        <p class='text-grayMain text-balance'>
                            {answer}
                        </p>
                    </div>

                )
            }
        </li>
    )
}

export default AccordionItem