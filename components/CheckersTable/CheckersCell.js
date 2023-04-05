
import { StyleSheet, View, Pressable  } from 'react-native';
import PropTypes from 'prop-types';

const CheckersCell = ({isActive, piece, variant, onPress, isPossible}) => {
    const cellColor = (isActive || isPossible) ? 'active' : variant;
    return (
        <Pressable onPress={onPress} style={StyleSheet.compose(styles.container, styles.cellColor[cellColor])}>
            <View style={StyleSheet.compose(styles.piece, styles.pieceColor[piece])}/>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '12.5%',
        aspectRatio: 1,
        backgroundColor: '#fff',
        borderColor:"#000",
        borderWidth: 1,
    },
    piece: {
        flex: 1,
        borderRadius: 100,
    },
    pieceColor: {
        dark: {
            backgroundColor: '#562400'
        },
        light: {
            backgroundColor: '#eed'
        },
    },
    cellColor: {
        dark: {
            backgroundColor: '#222'
        }
    }
})

CheckersCell.propTypes = {
    isActive: PropTypes.bool,
    variant: PropTypes.oneOf(['dark', 'light']),
    piece: PropTypes.oneOf(['dark', 'light']),
    onPress: PropTypes.func,
}

export default CheckersCell;