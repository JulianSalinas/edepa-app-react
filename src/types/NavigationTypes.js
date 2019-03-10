import PropTypes from "prop-types";
import UserTypes from "./UserTypes"

export default PropTypes.shape({

    goBack: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired

});