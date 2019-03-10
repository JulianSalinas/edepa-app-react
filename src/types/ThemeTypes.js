import PropTypes from "prop-types";


export default PropTypes.shape({

    margin: PropTypes.number.isRequired,
    spacing: PropTypes.number.isRequired,

    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,
    container: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    decoration: PropTypes.string.isRequired,

    greyFont: PropTypes.string.isRequired,
    darkFont: PropTypes.string.isRequired,
    lightFont: PropTypes.string.isRequired

})