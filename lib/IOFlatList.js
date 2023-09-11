import { FlatList } from 'react-native';
import withIO from './withIO';

import Animated, { Extrapolate } from 'react-native-reanimated';
const FlatListAnimated = Animated.createAnimatedComponent(FlatList)
const IOFlatList = withIO(FlatListAnimated, [
    'flashScrollIndicators',
    'getNativeScrollRef',
    'getScrollResponder',
    'getScrollableNode',
    'scrollToEnd',
    'scrollToIndex',
    'scrollToItem',
    'scrollToOffset',
]);
export default IOFlatList;
