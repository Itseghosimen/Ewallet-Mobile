import Carousel from 'react-native-reanimated-carousel';
import { Image, ImageBackground } from "expo-image"
import { useState } from "react"
import { Dimensions, Pressable } from "react-native"
import { StyledView } from '@/constants/imports';


export default function Advertisment() {
    const [visible, setVisible] = useState(true)
    const [nav, setNav] = useState<number>(0)
    const layout = Dimensions.get('window')
    const data = [...new Array(6).keys()]



    return (
        <StyledView className={`overflow-hidden ${visible ? 'flex' : 'hidden'} relative rounded-xl w-full`}>
            <Pressable
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    right: 10,
                    top: 10
                }}
                onPress={() => setVisible(false)}
            >
                <Image
                    source={require('@/assets/icons/times.png')}
                    style={{
                        height: 15,
                        width: 15,
                        tintColor: '#49515D'
                    }} />
            </Pressable>

            <Carousel
                loop
                width={layout.width - 24}
                height={120}
                autoPlay={true}
                data={data}
                scrollAnimationDuration={1000}
                autoPlayInterval={1500}
                onSnapToItem={(index) => setNav(index)}
                renderItem={({ index }) => (
                    <StyledView
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <ImageBackground
                            source={require('@/assets/images/advert.jpeg')}
                            style={{
                                position: 'absolute',
                                height: '100%',
                                width: '100%',
                                zIndex: 1,
                            }}
                            contentFit="cover"
                        />
                    </StyledView>
                )}
            />

            <StyledView className='w-12 mt-4 ml-4 h-1 rounded-lg bg-white/30 dark:bg-primary/30 absolute right-2.5 bottom-2.5'>
                <StyledView className='h-1 rounded-lg bg-white dark:bg-primary'
                    style={{
                        width: 48 / data.length,
                        marginLeft: (48 / data.length) * nav
                    }} />
            </StyledView>

        </StyledView>
    )
}