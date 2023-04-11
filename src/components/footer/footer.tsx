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
                        <ul className={styles['footer-link']}>
                            <li className=""><a href=''>Home</a></li>
                            <li className=""><a href=''>Vocabolaries</a></li>
                            <li className=""><a href=''>Basic Grammer</a></li>
                            <li className=""><a href=''>Conversation</a></li>
                            <li className=""><a href=''>Formation of Words</a></li>
                            <li className=""><a href=''>Dictionary</a></li>
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