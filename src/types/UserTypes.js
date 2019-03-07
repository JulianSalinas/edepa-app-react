import PropTypes from "prop-types";


export default PropTypes.shape({
    allowPhoto: PropTypes.bool,
    photoUrl : PropTypes.string,
    email : PropTypes.string.isRequired,
    userid : PropTypes.string.isRequired,
    username: PropTypes.string.isRequired
})