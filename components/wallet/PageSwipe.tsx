import React, { useState } from 'react'
import { StyledComponent, useColorScheme } from 'nativewind'
import PagerView from 'react-native-pager-view'
import { StyledText, StyledView } from '@/constants/imports'
import { Colors } from '@/constants/Colors'

import { Dimensions } from 'react-native'
import { LineChart } from 'react-native-gifted-charts'

export default function PageSwipe() {
    const [currentPage, setCurrentPage] = useState(0)
    const { colorScheme } = useColorScheme()
    const layout = Dimensions.get('window')
    const data = [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100
    ];


    return (
        <StyledView className='h-[30vh] mb-5'>
            <StyledText className='text-black dark:text-white text-center text-sx mb-3' style={{ fontFamily: 'Inter_500Medium' }}>Portfolio</StyledText>
            <StyledView className='flex-row items-center justify-center mb-2' style={{ gap: 3 }}>

                {
                    [...new Array(2).keys()].map((_, index) => (
                        <StyledView key={index}
                            style={{
                                backgroundColor: currentPage === index ? Colors[colorScheme].primary : '#49515D',
                                height: 4,
                                borderRadius: 6,
                                width: currentPage === index ? 16 : 5,
                            }}

                        />
                    ))
                }
            </StyledView>
            <StyledComponent
                onPageScroll={({ nativeEvent }) => {
                    setCurrentPage(nativeEvent.position)
                }}
                className='flex-1'
                component={PagerView}>
                <StyledView
                    key={1}
                    className='w-full'>
                </StyledView>
                <StyledView
                    key={2}
                    className='w-full'>
                    <LineChart
                        height={layout.height * 0.22}
                        width={layout.width}
                        adjustToWidth={true}
                        thickness={2}
                        color="#18EAFF"
                        disableScroll={true}
                        areaChart
                        hideYAxisText={true}
                        data={data.map(item => {
                            return { value: item };
                        })}
                        showYAxisIndices={false}
                        curved
                        startFillColor={'rgb(24, 234, 255)'}
                        startOpacity={0.4}
                        endOpacity={0}
                        spacing={40}
                        initialSpacing={0}
                        yAxisThickness={0}
                        yAxisLabelWidth={0}
                        xAxisThickness={0}
                        hideDataPoints={true}
                        xAxisLabelsHeight={0}
                        hideRules={true}
                        showVerticalLines={false}
                        pointerConfig={{
                            pointerStripUptoDataPoint: true,
                            pointerStripColor: 'rgb(24, 234, 255)',
                            pointerStripWidth: 2,
                            pointerColor: 'rgb(24, 234, 255)',
                            pointerLabelWidth: 50,
                            radius: 8,
                            activatePointersOnLongPress: true,
                            autoAdjustPointerLabelPosition: true,
                            pointerStripHeight: 160,
                            pointerLabelComponent: (items: any) => {
                                return (
                                    <StyledView className='-mb-10 -ml-0'>
                                        <StyledText className='text-black dark:text-white text-sm'
                                            style={{
                                                fontFamily: 'Inter_500Medium'
                                            }}>
                                            {items[0].value.toLocaleString('en-US', {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2
                                            })}
                                        </StyledText>
                                    </StyledView>
                                );
                            },
                        }}
                    />
                </StyledView>
            </StyledComponent>
        </StyledView>

    )
}