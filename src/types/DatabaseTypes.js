import PropTypes from "prop-types";
import UserTypes from "./UserTypes"

export default PropTypes.shape({

    user: UserTypes,
    people: PropTypes.object.isRequired,

});