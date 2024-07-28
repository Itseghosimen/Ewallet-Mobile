import { StyledText } from '@/constants/imports';
import { Image } from 'expo-image';
import React from 'react'
import { PanResponder, View } from 'react-native';
import Animated, {
    useAnimatedScrollHandler, useSharedValue, useAnimatedStyle, withTiming,
} from 'react-native-reanimated';

export default function ScrollRefresh({ children, ...props }: any) {

    const scrollPosition = useSharedValue(0);
    const pullDownPosition = useSharedValue(0);
    const isReadyToRefresh = useSharedValue(false);
    const [refreshing, setRefreshing] = React.useState(false);


    const onRefresh = (done: () => void) => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false);
            done();
        }, 4000);
    };

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollPosition.value = event.contentOffset.y;
        },
    });
    const onPanRelease = () => {
        pullDownPosition.value = withTiming(isReadyToRefresh.value ? 50 : 0, {
            duration: 180,
        });

        if (isReadyToRefresh.value) {
            isReadyToRefresh.value = false;

            // A function that resets the animation
            const onRefreshComplete = () => {
                pullDownPosition.value = withTiming(0, { duration: 180 });
            };

            // trigger the refresh action
            onRefresh(onRefreshComplete);
        }
    };
    const panResponderRef = React.useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: (event, gestureState) =>
                scrollPosition.value <= 0 && gestureState.dy >= 0,
            onPanResponderMove: (event, gestureState) => {
                const maxDistance = 80;
                pullDownPosition.value = Math.max(Math.min(maxDistance, gestureState.dy), 0);
                if (
                    pullDownPosition.value >= maxDistance / 2 &&
                    isReadyToRefresh.value === false
                ) {
                    isReadyToRefresh.value = true;
                }

                if (
                    pullDownPosition.value < maxDistance / 2 &&
                    isReadyToRefresh.value === true
                ) {
                    isReadyToRefresh.value = false;
                }
            },
            onPanResponderRelease: onPanRelease,
            onPanResponderTerminate: onPanRelease,
        })
    );
    const pullDownStyles = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: pullDownPosition.value,
                },
            ],
        };
    });


    const refreshContainerStyles = useAnimatedStyle(() => {
        return {
            height: pullDownPosition.value,
        };
    });

    return (
        <View
            style={{ flex: 1 }}
            pointerEvents={refreshing ? 'none' : 'auto'}>

            <Animated.View style={[{
                alignItems: 'center',
                justifyContent: 'flex-start',
            }, refreshContainerStyles]}>

                {refreshing && (
                    <Image
                        source={require('@/assets/icons/Icon.png')}
                        style={{
                            height: 40,
                            width: '100%',
                        }}
                        contentFit='contain'
                    />
                )}
            </Animated.View>

            <Animated.View
                style={[pullDownStyles]}
                {...panResponderRef.current.panHandlers}
            >
                <Animated.ScrollView
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                    {...props} >
                    {children}
                </Animated.ScrollView >
            </Animated.View></View>

    )
}