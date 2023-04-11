
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
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Home</li>
                            <li className="list-group-item">Vocabolaries</li>
                            <li className="list-group-item">Basic Grammer</li>
                            <li className="list-group-item">Conversation</li>
                            <li className="list-group-item">Formation of Words</li>
                            <li className="list-group-item">Dictionary</li>
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