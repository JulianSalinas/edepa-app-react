import PropTypes from "prop-types";


export default PropTypes.shape({

    about: PropTypes.string,
    events: PropTypes.object,
    completeName: PropTypes.string.isRequired,
    personalTitle: PropTypes.string.isRequired,

})