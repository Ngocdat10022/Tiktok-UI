import Header from '../Component/Header';
import Siderbar from './SiderBar';
function DefaultLayout({ children }) {
    return <div>
        <Header />
        <div className='container'>
            <Siderbar />
            <div className='content'>
                {children}
            </div>
        </div>
    </div>
}

export default DefaultLayout;