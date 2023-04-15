import Link from "next/link";

function Footer() {
    return (<>
        <footer className='bg-dark text-white-50'>
            <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div ><strong>Magar Dhut</strong></div>
                        <div>Platform for Learning Magar Language</div>
                    </div>
                    <div className="col-md-4">
                        <div><strong>Learn</strong></div>
                        <ul className='list-unstyled'>
                            <li className=""><Link href='/' className='link-offset-2 link-underline link-underline-opacity-25 link-secondary'>Home</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/vocabularies'>Vocabolaries</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/grammer'>Grammer</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/conversations'>Conversations</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/words'>Formation of Words</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/dictionary'>Dictionary</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        &copy; MagarDhut | Platform for learning magar language
                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;