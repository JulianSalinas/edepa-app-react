import PropTypes from 'prop-types';

const Common = {
    title: PropTypes.string,
    brief: PropTypes.string,
    end: PropTypes.number.isRequired,
    start: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired
}

const Position = PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
})

const Home = PropTypes.shape({
    ...Common,
    position: Position,
    tag: PropTypes.string.isRequired
})

const Event = PropTypes.shape({
    ...Common,
    id: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    eventype: PropTypes.string.isRequired
})

const User = PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string,
    photoUrl: PropTypes.string,
    allowPhoto: PropTypes.bool
})

const Person = PropTypes.shape({
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    about: PropTypes.string,
})

const Engine = PropTypes.shape({
    changeDarkMode: PropTypes.func.isRequired,
})

const Custom = PropTypes.shape({

    margin: PropTypes.number.isRequired,
    padding: PropTypes.number.isRequired,
    spacing: PropTypes.number.isRequired,
    
    darkMode: PropTypes.bool.isRequired,
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string.isRequired,

    container: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    decoration: PropTypes.string.isRequired,

    greyFont: PropTypes.string.isRequired,
    darkFont: PropTypes.string.isRequired,
    lightFont: PropTypes.string.isRequired

})

const Store = PropTypes.shape({
    home: Home,
    events: PropTypes.arrayOf(Event),
    people: PropTypes.arrayOf(Person)
})

export { Position, Home, Event, User, Person, Custom, Store, Engine }