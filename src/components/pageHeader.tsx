
export interface PageHeaderProps {
    title: string,
    description?: string,
    date?: string,
    background?: string
}

export default function PageHeader(header: PageHeaderProps) {
    return (
        <>
            <section className={`${header.background || 'bg-warning'} mb-3 d-flex`}>
                <div className='text-center' style={{ width: '100%', marginTop: '6rem', marginBottom: '8rem' }}>
                    <h1 style={{ textShadow: '1px 2px 2px BLACK', fontSize: '5rem', marginBottom: '1.5rem' }}>{header.title}</h1>
                    <h4>{header.description}</h4>
                    {header.date && <div>{header.date}</div>}
                </div>
            </section>
        </>
    )

}