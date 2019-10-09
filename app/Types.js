import PropTypes from 'prop-types';
import { ThemeTypes } from './Theme';

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
    name: PropTypes.string,
    personalName: PropTypes.string,
    title: PropTypes.string,
    about: PropTypes.string,
})

const KFeel = PropTypes.shape({
    ...ThemeTypes,
    darkMode: PropTypes.bool.isRequired,
    changeDarkMode: PropTypes.func.isRequired
})

const Store = PropTypes.shape({
    home: Home,
    events: PropTypes.arrayOf(Event),
    people: PropTypes.arrayOf(Person)
})

const Screen = PropTypes.shape({
    KFeel: KFeel,
    store: Store
})


export { Position, Home, Event, User, Person, Store, KFeel, Screen }