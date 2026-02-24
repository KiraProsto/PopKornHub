import {useRef, type ReactNode} from 'react';
import './Carousel.scss'

export default function Carousel({title, children}: {title: string; children: ReactNode}) {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    function scrollLeft(){
        if (scrollRef.current){
            scrollRef.current.scrollBy({
                left: -300,
                behavior: "smooth",
            });
        }
    }

    function scrollRight(){
        if (scrollRef.current){
            scrollRef.current.scrollBy({
                left: 300,
                behavior: "smooth",
            });
        }
    }

    return (
        <div className="carousel">
            <h2 className="carousel__title">{title}</h2>

            <div className="carousel__wrapper">
                <button 
                    type="button" 
                    aria-label='Прокрутить влево'
                    onClick={scrollLeft} 
                    className='carousel__arrow carousel__arrow-left'
                >
                    {"<"}
                </button>

                <div 
                    ref={scrollRef} 
                    className="carousel__track"
                    role="region"
                    aria-label={`Секция: ${title}`}
                >
                    {children}
                </div>

                <button 
                    type="button" 
                    aria-label='Прокрутить вправо'
                    onClick={scrollRight} 
                    className="carousel__arrow carousel__arrow-right"
                >
                    {">"}
                </button>
            </div>

        </div>
    )
}
