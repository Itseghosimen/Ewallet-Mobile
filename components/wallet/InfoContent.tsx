import { Colors } from '@/constants/Colors'
import { StyledText, StyledView } from '@/constants/imports'
import { Image } from 'expo-image'
import { Link } from 'expo-router'
import { useColorScheme } from 'nativewind'
import React from 'react'

export default function InfoContent() {
    const { colorScheme } = useColorScheme()
    return (
        <StyledView>
            <StyledView>
                <StyledView style={{ gap: 30, paddingTop: 15 }}>
                    <StyledView className='flex-row items-center justify-between'>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >Mainnet</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>BNB Chain</StyledText>
                        </StyledView>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >Contract</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>0x19...825a</StyledText>
                        </StyledView>
                    </StyledView>

                    <StyledView className='flex-row items-center justify-between'>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >24hr Vol.</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>$830.01M</StyledText>
                        </StyledView>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >Total Supply</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>200M BNB</StyledText>
                        </StyledView>
                    </StyledView>

                    <StyledView className='flex-row items-center justify-between'>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >Market Cap</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>Market Cap</StyledText>
                        </StyledView>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >Circulating</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>161.33M BNB</StyledText>
                        </StyledView>
                    </StyledView>

                    <StyledView className='flex-row items-center justify-between'>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >Rank</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>5</StyledText>
                        </StyledView>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >ATH</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>$161.3</StyledText>
                        </StyledView>
                    </StyledView>

                    <StyledView className='flex-row items-center justify-between'>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >Issue Date</StyledText>
                            <StyledText
                                className='text-black dark:text-white text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>2022-05-26</StyledText>
                        </StyledView>
                        <StyledView className='w-[43vw] flex-row items-center justify-between'>
                            <StyledText
                                className='text-secondary text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}
                            >% of ATH</StyledText>
                            <StyledText
                                className='text-[#F35555] text-xs'
                                style={{
                                    fontFamily: 'Inter_500Medium'
                                }}>59.33%</StyledText>
                        </StyledView>
                    </StyledView>
                </StyledView>
            </StyledView>

            <StyledView className='pt-10' style={{ gap: 30 }}>
                <StyledText
                    className='text-sm text-black dark:text-white'
                    style={{
                        fontFamily: 'Inter_600SemiBold'
                    }}
                >
                    Links
                </StyledText>

                <Link href={''} >
                    <StyledView className='flex-row items-center' style={{ gap: 15 }}>
                        <Image source={require('@/assets/icons/global.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: Colors[colorScheme].primary
                            }}
                        />

                        <StyledText className='text-black dark:text-white'>
                            Website
                        </StyledText>
                    </StyledView>
                </Link>

                <Link href={''} >
                    <StyledView className='flex-row items-center' style={{ gap: 15 }}>
                        <Image source={require('@/assets/icons/monitor-mobbile.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: Colors[colorScheme].primary
                            }}
                        />
                        <StyledText className='text-black dark:text-white'>
                            Explorer
                        </StyledText>
                    </StyledView>
                </Link>

                <Link href={''} >
                    <StyledView className='flex-row items-center' style={{ gap: 15 }}>
                        <Image source={require('@/assets/icons/whitepaper.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: Colors[colorScheme].primary
                            }}
                        />
                        <StyledText className='text-black dark:text-white'>
                            Whitepaper
                        </StyledText>
                    </StyledView>
                </Link>

                <Link href={''} >
                    <StyledView className='flex-row items-center' style={{ gap: 15 }}>
                        <Image source={require('@/assets/icons/edit-2.png')}
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: Colors[colorScheme].primary
                            }}
                        />
                        <StyledText className='text-black dark:text-white'>
                            Feedback
                        </StyledText>
                    </StyledView>
                </Link>
            </StyledView>

            <StyledView className='mt-10' style={{ gap: 25 }}>
                <StyledText
                    className='text-sm text-black dark:text-white'
                    style={{
                        fontFamily: 'Inter_600SemiBold'
                    }}
                >
                    About
                </StyledText>

                <StyledText
                    className='text-[13px] tracking-wide leading-4 text-justify text-secondary'
                    style={{
                        fontFamily: 'Inter_500Medium'
                    }}
                >
                    Ethereum is a technology that's home to digital money, global payments, and applications. The community has built a booming digital economy, bold new ways for creators to earn online, and so much more
                </StyledText>

                <StyledView className='flex-row items-center' style={{ gap: 10 }}>
                    <Link href={''}>
                        <StyledView className='flex-row items-center h-7 justify-center w-7 rounded-full'
                            style={{
                                gap: 15,
                                backgroundColor: Colors[colorScheme].otpbg
                            }}>
                            <Image
                                source={require('@/assets/icons/twitter.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: '#49515D'
                                }}
                                contentFit='contain' />
                        </StyledView>
                    </Link>

                    <Link href={''}>
                        <StyledView className='flex-row items-center h-7 justify-center w-7 rounded-full'
                            style={{
                                gap: 15,
                                backgroundColor: Colors[colorScheme].otpbg
                            }}>
                            <Image
                                source={require('@/assets/icons/insta.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: '#49515D'
                                }}
                                contentFit='contain' />
                        </StyledView>
                    </Link>

                    <Link href={''}>
                        <StyledView className='flex-row items-center h-7 justify-center w-7 rounded-full'
                            style={{
                                gap: 15,
                                backgroundColor: Colors[colorScheme].otpbg
                            }}>
                            <Image
                                source={require('@/assets/icons/telegram.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: '#49515D'
                                }}
                                contentFit='contain' />
                        </StyledView>
                    </Link>

                    <Link href={''}>
                        <StyledView className='flex-row items-center h-7 justify-center w-7 rounded-full'
                            style={{
                                gap: 15,
                                backgroundColor: Colors[colorScheme].otpbg
                            }}>
                            <Image
                                source={require('@/assets/icons/github.png')}
                                style={{
                                    height: 15,
                                    width: 15,
                                    tintColor: '#49515D'
                                }}
                                contentFit='contain' />
                        </StyledView>
                    </Link>
                </StyledView>
            </StyledView>
        </StyledView>
    )
}