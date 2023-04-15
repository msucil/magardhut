import styles from './footer.module.scss';

function Footer() {
    return (<>
        <footer style={{ backgroundColor: '#8080804f' }}>
            <div className="container pt-4 pb-4">
                <div className="row bg-grey ">
                    <div className="col-md-4 text-center">
                        <div >Magar Dhut</div>
                        <div>Platform for Learning Magar Language</div>
                    </div>
                    <div className="col-md-4">
                        <div><strong>Learn</strong></div>
                        <ul className={'list-unstyled'}>
                            <li className=""><a href='' className='link-offset-2 link-underline link-underline-opacity-10 link-secondary'>Home</a></li>
                            <li className=""><a className='link-offset-2 link-underline link-underline-opacity-10 link-secondary' href=''>Vocabolaries</a></li>
                            <li className=""><a className='link-offset-2 link-underline link-underline-opacity-10 link-secondary' href=''>Basic Grammer</a></li>
                            <li className=""><a className='link-offset-2 link-underline link-underline-opacity-10 link-secondary' href=''>Conversation</a></li>
                            <li className=""><a className='link-offset-2 link-underline link-underline-opacity-10 link-secondary' href=''>Formation of Words</a></li>
                            <li className=""><a className='link-offset-2 link-underline link-underline-opacity-10 link-secondary' href=''>Dictionary</a></li>
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