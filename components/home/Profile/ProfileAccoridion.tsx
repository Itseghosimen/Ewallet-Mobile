import { Colors } from '@/constants/Colors'
import { StyledText, StyledView } from '@/constants/imports'
import { Entypo } from '@expo/vector-icons'
import { Image, ImageSource } from 'expo-image'
import { Link } from 'expo-router'
import { useColorScheme } from 'nativewind'
import { useEffect, useState } from 'react'
import { Animated, FlatList, TouchableWithoutFeedback } from 'react-native'


export default function ProfileAccoridion(props: any) {
    const [accord, setAccord] = useState(false)
    const [accordion, setAccordion] = useState(0)
    const [animation] = useState(new Animated.Value(0))
    const multiplier = props.break ? 84 : 80
    const data = props.content

    const getNumberOfLines = (arrayLength: number) => {
        return Math.ceil(arrayLength / 4);
    };

    useEffect(() => {
        if (props.content) {
            setAccordion(getNumberOfLines(props.content.length))
        }
    }, [])
    function toggleAccoridion() {
        if (accord) {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: false
            }).start()
        } else {
            Animated.timing(animation, {
                toValue: 1,
                duration: 300,
                useNativeDriver: false
            }).start()
        }
        setAccord(!accord)
    }

    const heightInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [(accordion * multiplier), 0],
    })

    return (
        <StyledView className='rounded-lg py-2 mt-4'>
            <TouchableWithoutFeedback
                onPress={toggleAccoridion}>
                <StyledView className='flex-row justify-between items-center px-5'>
                    <StyledText style={{
                        fontFamily: 'Inter_700Bold',
                    }} className='text-black dark:text-white text-sm  '>
                        {props.title}
                    </StyledText>
                    <Entypo
                        style={{
                            transform: [{ rotate: accord ? '180deg' : '0deg' }]
                        }} name="chevron-down" size={24} color={'#49515D'} />
                </StyledView>
            </TouchableWithoutFeedback>
            <Animated.View
                style={{
                    height: heightInterpolation,
                    overflow: 'hidden',
                    width: '100%',
                    paddingHorizontal: 5
                }}>
                <FlatList
                    scrollEnabled={false}
                    data={data}
                    numColumns={4}
                    showsVerticalScrollIndicator={false}
                    columnWrapperStyle={{
                        flex: 1,
                        justifyContent: 'space-between'
                    }}
                    renderItem={({ item }: any) => {
                        return (
                            <ProfileApp
                                title={item.title}
                                icon={item.icon}
                                link={item.link}
                            />
                        )
                    }} />
            </Animated.View>
        </StyledView>

    )
}


const ProfileApp = ({ icon, title, link }: { icon: ImageSource | ImageSource[], title: string, link: string, }) => {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView className='pb-1 w-[20vw]'>
            <Link href={link ? link : ''} asChild>
                <TouchableWithoutFeedback>
                    <StyledView className='flex items-center justify-center pt-4 gap-y-1.5'>
                        <Image source={icon}
                            style={{
                                height: 25,
                                width: '100%',
                                tintColor: Colors[colorScheme ?? 'light'].primary
                            }}
                            contentFit='contain'
                            contentPosition={'center'} />
                        <StyledText
                            style={{
                                fontFamily: 'Inter_500Medium',
                            }} className='text-xs  text-center  text-black dark:text-white'>
                            {title}
                        </StyledText>
                    </StyledView>
                </TouchableWithoutFeedback>
            </Link>
        </StyledView>
    )
}
