import PropTypes from "prop-types";
import UserTypes from "./User"

export default PropTypes.shape({

    goBack: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired

});