import {useRef} from 'react';
import styles from './Carousel.module.scss'

export default function Carousel({title, children}: {title: string; children: React.ReactNode}) {
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
        <div className={styles.carousel}>
            <h2 className={styles.title}>{title}</h2>

            <div className={styles.wrapper}>
                <button onClick={scrollLeft} className={`${styles.arrow} ${styles.left}`}>
                    {"<"}
                </button>

                <div ref = {scrollRef} className={styles.track}>
                    {children}
                </div>

                <button onClick={scrollRight} className={`${styles.arrow} ${styles.right}`}>
                    {">"}
                </button>
            </div>

        </div>
    )
}
