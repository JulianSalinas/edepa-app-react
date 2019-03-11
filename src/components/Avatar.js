import React from 'react';
import { View, Image, Text } from 'react-native';
import { hashColor } from '../utils/utils-colors';

// from https://flatuicolors.com/
const defaultColors = [
    '#2ecc71', // emerald
    '#3498db', // peter river
    '#8e44ad', // wisteria
    '#e67e22', // carrot
    '#e74c3c', // alizarin
    '#1abc9c', // turquoise
    '#2c3e50', // midnight blue
];

export default class UserAvatar extends React.PureComponent {
    render() {
        let {
            src,
            name,
            color,
            textColor = '#fff',
            colors = defaultColors,
            fontDecrease,
            size,
            containerStyle,
            imageStyle,
            defaultName,
            radius = 0.5
        } = this.props;

        if (!fontDecrease) fontDecrease = 2.5;

        if (!name) throw new Error('Avatar requires a name');

        if(typeof size !== 'number') size = parseInt(size);

        let abbr = name !== null ? name[0] : 'A';
        if(!abbr) abbr = defaultName;

        if(isNaN(radius)) radius = 0.5

        const borderRadius = size * radius;

        const imageLocalStyle = {
            borderRadius
        };

        const innerStyle = {
            borderRadius,
            borderWidth: 1,
            borderColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center'
        };

        if (size) {
            imageLocalStyle.width = innerStyle.width = size;
            imageLocalStyle.height = innerStyle.height = size;
        }

        let inner;
        if (src) {

            const props = {
                style: [imageLocalStyle, imageStyle],
                source: {uri: src}
            };

            inner = React.createElement( this.props.component || Image, props )

        } else {
            let background;
            if (color) {
                background = color;
            } else {
                background = hashColor(name, colors);
            }

            innerStyle.backgroundColor = background;

            inner = <Text style={{ fontSize: size / fontDecrease, color: textColor }}>{abbr}</Text>
        }

        return (
            <View>
                <View style={[innerStyle, containerStyle]}>
                    {inner}
                </View>
            </View>
        )
    }
}