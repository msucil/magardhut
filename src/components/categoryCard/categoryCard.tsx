import Image from "next/image";
import Link from "next/link";
import styles from './categoryCard.module.scss'

interface CategoryCardProps {
    image?: string,
    alt?: string,
    width?: number,
    height?: number,
    route: string,
    title: string,
    description?: string,
    date?: string
}

function CategoryCard(props: CategoryCardProps) {
    return (
        <>
            <div className="card mb-3" >
                <div className="row g-0">
                    {
                        props.image &&
                        <div className="col-md-4">
                            <Image
                                className='img-fluid rounded-start'
                                src={props?.image}
                                alt={props?.alt || ''}
                                width={props.width || 500} height={props.height || 300} />
                        </div>
                    }

                    <div className={props.image ? 'col-md-8' : 'col-md-12'}>
                        <div className="card-body">
                            <h5 className="card-title">
                                <Link href={props.route} className={`${styles.link} stretched-link`}>
                                    {props.title}
                                </Link>
                            </h5>
                            {
                                props.description &&
                                <p className="card-text">{props.description}</p>
                            }
                            {
                                props.date &&
                                <p className="card-text"><small className="text-body-secondary">{props.date}</small></p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryCard;