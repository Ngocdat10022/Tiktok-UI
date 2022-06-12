import PropTypes from 'prop-types';
import './GlobalStyle.scss'
function Globalstyle({ children }) {
    return children
}
Globalstyle.prototype = {
    children: PropTypes.node.isRequired
}
export default Globalstyle