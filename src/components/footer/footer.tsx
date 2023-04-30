import Link from "next/link";

function Footer() {
    return (<>
        <footer className='bg-dark text-white-50'>
            <div className="container pt-4 pb-4">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <div ><strong>मगर ढूट</strong></div>
                        <div>मगर भाषा सिक्ने सिकाउने साझा चौतारी</div>
                    </div>
                    <div className="col-md-4">
                        <div><strong>सिकौ</strong></div>
                        <ul className='list-unstyled'>
                            <li className=""><Link href='/' className='link-offset-2 link-underline link-underline-opacity-25 link-secondary'>मगर ढूट</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/vocabularies'>शब्दावलीहरू</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/grammer'>व्याकरण</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/words'>शब्द निर्माण</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/conversations'>कुराकानी</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/learn/akkha-lipi'>अख्खा लिपी</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/dictionary'>शब्दकोष</Link></li>
                            <li className=""><Link className='link-offset-2 link-underline link-underline-opacity-0 link-secondary' href='/literature'>साहित्य</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <div><strong>सम्पर्क</strong></div>
                        <ul className='list-unstyled'>
                            <li className="">
                                <Link href='/about' className='link-offset-2 link-underline link-underline-opacity-25 link-secondary'>हाम्रो बारेमा</Link>
                            </li>
                        </ul>

                        <ul className='list-unstyled'>
                            <li className="">
                                <Link href='https://www.facebook.com/magar.dhuut' target="_blank" className='link-offset-2 link-underline-opacity-25 link-secondary'>
                                    <i className="bi bi-facebook"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        &copy; मगर ढूट | मगर भाषा सिक्ने सिकाउने साझा चौतारी
                    </div>
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;