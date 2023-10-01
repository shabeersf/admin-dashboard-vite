import { ArrowRightIcon, ChartPieIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import { Card, BadgeDelta, Button, DonutChart, Flex, TabGroup, Tab, TabList, Bold, Divider, List, ListItem, Metric, Text, Title } from '@tremor/react'
import { useState } from 'react';

const stocks = [
    {
        name: "Off Running AG",
        value: 10456,
        performance: "6.1%",
        deltaType: "increase",
    },
    {
        name: "Not Normal Inc.",
        value: 5789,
        performance: "1.2%",
        deltaType: "moderateDecrease",
    },
    {
        name: "Logibling Inc.",
        value: 4367,
        performance: "2.3%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Raindrop Inc.",
        value: 3421,
        performance: "0.5%",
        deltaType: "moderateDecrease",
    },
    {
        name: "Mwatch Group",
        value: 1432,
        performance: "3.4%",
        deltaType: "decrease",
    },
];

const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};
const SalesItem = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <Card className=' max-w-full mx-auto ' >
            <Flex className=' space-x-8 flex-col lg:flex-row'>
                <Title>
                    Overview
                </Title>
                <TabGroup index={selectedIndex} onIndexChange={selectedIndex}>
                    <TabList variant='solid' >
                        <Tab icon={ChartPieIcon} onClick={() => setSelectedIndex(0)}>Chart</Tab>
                        <Tab icon={ListBulletIcon} onClick={() => setSelectedIndex(1)}>List</Tab>
                    </TabList>
                </TabGroup>
            </Flex>
            <Text className='mt-8'>Portfolio Value</Text>
            <Metric>$25,465</Metric>
            <Divider />
            <Text className='mt-8'>
                <Bold>Asset Allocation</Bold>
            </Text>
            <Text>
                1 Asset class - 5 Holdings
            </Text>
            {
                selectedIndex === 0 ? (<DonutChart data={stocks} valueFormatter={dataFormatter} category='value' index='name' className='mt-8' />) :
                    (<>
                        <Flex className='mt-8' justifyContent='between'>
                            <Text className=' truncate'>
                                <Bold>
                                    Stocks
                                </Bold>
                            </Text>
                            <Text>Since transcation</Text>
                        </Flex>
                        <List className='mt-4'>
                            {
                                stocks.map((stock) => (
                                    <ListItem key={stock.name}>
                                        <Text>{stock.name}</Text>
                                        <Flex className='space-x-2' justifyContent='end'>
                                            <Text>
                                                ${Intl.NumberFormat('us').format(stock.value).toString()}
                                            </Text>
                                        </Flex>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </>)
            }
            <Flex  className=' mt-6 pt-4 border-t '>
                <Button variant='light' size='xs' icon={ArrowRightIcon} iconPosition='right' >View more</Button>
            </Flex>
        </Card>
    )
}

export default SalesItem