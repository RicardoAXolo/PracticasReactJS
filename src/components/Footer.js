import { Component } from "react";
import { PropTypes } from "prop-types";
class Footer extends Component{
    render(){
        return(
            <footer className='Footer'>
          <h2>Pie de pagina</h2>
          <h3>{this.props.children}</h3>
        </footer>
        );
    }
}
export default Footer;

Footer.propTypes={
    children:PropTypes.string
}
Footer.defaultProps={
    children:'Ricardo Amador Xolo'
}