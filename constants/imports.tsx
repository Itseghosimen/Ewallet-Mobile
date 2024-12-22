import { Image, ImageSource } from "expo-image";
import { Link, router } from "expo-router";
import { styled } from "nativewind";
import {
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export const StyledView = styled(View);
export const StyledText = styled(Text);
export const StyledTouch = styled(TouchableOpacity);
export const StyledInput = styled(TextInput);

export const TokenPron = (props: {
  icon: ImageSource | ImageSource[];
  abbreviation: string;
  fullName: string;
  rate: number;
  dollar: number;
}) => {
  return (
    <Link
      href={{
        pathname: `token/${props.fullName}`,
        params: { name: props.fullName },
      }}
      asChild
      style={{
        width: "100%",
        paddingVertical: 10,
      }}
    >
      <TouchableWithoutFeedback>
        <StyledView className="flex-row items-center justify-between">
          <StyledView
            className="flex-row items-center"
            style={{
              gap: 10,
            }}
          >
            <Image
              source={props.icon}
              style={{
                height: 45,
                width: 45,
              }}
              contentFit="contain"
            />
            <StyledView>
              <StyledText
                style={{
                  fontFamily: "Inter_500Medium",
                }}
                className="text-black dark:text-white text-sm  "
              >
                {props.abbreviation}
              </StyledText>
              <StyledText
                style={{
                  fontFamily: "Inter_500Medium",
                }}
                className="text-xs   text-secondary"
              >
                {props.fullName}
              </StyledText>
            </StyledView>
          </StyledView>
          <StyledView>
            <StyledText
              style={{
                fontFamily: "Inter_500Medium",
              }}
              className="text-black dark:text-white text-sm   text-right"
            >
              {props.rate.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </StyledText>
            <StyledText
              style={{
                fontFamily: "Inter_500Medium",
              }}
              className="text-xs   text-secondary"
            >
              {props.dollar.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: "currency",
                currency: "USD",
              })}
            </StyledText>
          </StyledView>
        </StyledView>
      </TouchableWithoutFeedback>
    </Link>
  );
};

export const TokenSelect = (props: {
  icon: ImageSource | ImageSource[];
  abbreviation: string;
  fullName: string;
  rate: number;
  dollar: number;
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={router.back}
      style={{
        width: "100%",
        paddingVertical: 10,
      }}
    >
      <StyledView className="flex-row items-center justify-between">
        <StyledView
          className="flex-row items-center"
          style={{
            gap: 10,
          }}
        >
          <Image
            source={props.icon}
            style={{
              height: 45,
              width: 45,
            }}
            contentFit="contain"
          />
          <StyledView>
            <StyledText
              style={{
                fontFamily: "Inter_500Medium",
              }}
              className="text-black dark:text-white text-sm  "
            >
              {props.abbreviation}
            </StyledText>
            <StyledText
              style={{
                fontFamily: "Inter_500Medium",
              }}
              className="text-xs   text-secondary"
            >
              {props.fullName}
            </StyledText>
          </StyledView>
        </StyledView>
        <StyledView>
          <StyledText
            style={{
              fontFamily: "Inter_500Medium",
            }}
            className="text-black dark:text-white text-sm   text-right"
          >
            {props.rate.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </StyledText>
          <StyledText
            style={{
              fontFamily: "Inter_500Medium",
            }}
            className="text-xs   text-secondary"
          >
            {props.dollar.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              style: "currency",
              currency: "USD",
            })}
          </StyledText>
        </StyledView>
      </StyledView>
    </TouchableWithoutFeedback>
  );
};

export const availableToken = [
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
  {
    icon: require("@/assets/icons/ethereum.png"),
    abbreviation: "ETH",
    fullName: "Ethereum",
    rate: 0.0,
    dollar: 0.0,
  },
];

export const trendingCoin = [
  {
    icon: require("@/assets/icons/btc.png"),
    title: "BTC",
    vol: 605,
    upPrice: 37000,
    downPrice: 26000,
    signal: true,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/art.png"),
    title: "PEPE ",
    vol: 605,
    upPrice: 39000,
    downPrice: 36000,
    signal: true,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/xrp.png"),
    title: "MATIC",
    vol: 605,
    upPrice: 623000,
    downPrice: 92000,
    signal: false,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/bnb.png"),
    title: "BNB",
    vol: 605,
    upPrice: 243000,
    downPrice: 35000,
    signal: true,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/eneet.png"),
    title: "ENET",
    vol: 605,
    upPrice: 45000,
    downPrice: 19000,
    signal: false,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/xrp.png"),
    title: "MATIC",
    vol: 605,
    upPrice: 623000,
    downPrice: 92000,
    signal: false,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/bnb.png"),
    title: "BNB",
    vol: 605,
    upPrice: 243000,
    downPrice: 35000,
    signal: true,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/eneet.png"),
    title: "ENET",
    vol: 605,
    upPrice: 45000,
    downPrice: 19000,
    signal: false,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/btc.png"),
    title: "BTC",
    vol: 605,
    upPrice: 37000,
    downPrice: 26000,
    signal: true,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/art.png"),
    title: "PEPE ",
    vol: 605,
    upPrice: 39000,
    downPrice: 36000,
    signal: true,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/xrp.png"),
    title: "MATIC",
    vol: 605,
    upPrice: 623000,
    downPrice: 92000,
    signal: false,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/bnb.png"),
    title: "BNB",
    vol: 605,
    upPrice: 243000,
    downPrice: 35000,
    signal: true,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/eneet.png"),
    title: "ENET",
    vol: 605,
    upPrice: 45000,
    downPrice: 19000,
    signal: false,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/xrp.png"),
    title: "MATIC",
    vol: 605,
    upPrice: 623000,
    downPrice: 92000,
    signal: false,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/bnb.png"),
    title: "BNB",
    vol: 605,
    upPrice: 243000,
    downPrice: 35000,
    signal: true,
    pecentage: 3.34,
  },
  {
    icon: require("@/assets/icons/eneet.png"),
    title: "ENET",
    vol: 605,
    upPrice: 45000,
    downPrice: 19000,
    signal: false,
    pecentage: 3.34,
  },
];

export const History = [
  {
    icon: require("@/assets/images/pancake.png"),
    title: "PancakeSwap",
  },
  {
    icon: require("@/assets/images/uniswap.png"),
    title: "UniSwap V3",
  },
  {
    icon: require("@/assets/images/sushi.png"),
    title: "SushiSwap",
  },
];
export const Favour = [
  {
    icon: require("@/assets/images/uniswap.png"),
    title: "UniSwap V3",
  },
  {
    icon: require("@/assets/images/pancake.png"),
    title: "PancakeSwap",
  },
  {
    icon: require("@/assets/images/sushi.png"),
    title: "SushiSwap",
  },
];
export const Listing = [
  {
    icon: require("@/assets/images/uniswap.png"),
    title: "UniSwap V3",
    description: "The leading decentralized exchange on ...",
  },
  {
    icon: require("@/assets/images/pink.png"),
    title: "Pinksale",
    description: "Decentralised launchpad",
  },
  {
    icon: require("@/assets/images/bina.png"),
    title: "Bibok",
    description: "BNB Chain",
  },
  {
    icon: require("@/assets/images/pancake.png"),
    title: "PancakeSwap",
    description: "Decentralised launchpad",
  },
  {
    icon: require("@/assets/images/sushi.png"),
    title: "SushiSwap",
    description: "BNB Chain",
  },
  {
    icon: require("@/assets/images/pink.png"),
    title: "Pinksale",
    description: "Decentralised launchpad",
  },
  {
    icon: require("@/assets/images/bina.png"),
    title: "Bibok",
    description: "BNB Chain",
  },
  {
    icon: require("@/assets/images/pancake.png"),
    title: "PancakeSwap",
    description: "Decentralised launchpad",
  },
  {
    icon: require("@/assets/images/sushi.png"),
    title: "SushiSwap",
    description: "BNB Chain",
  },
  {
    icon: require("@/assets/images/pink.png"),
    title: "Pinksale",
    description: "Decentralised launchpad",
  },
  {
    icon: require("@/assets/images/bina.png"),
    title: "Bibok",
    description: "BNB Chain",
  },
  {
    icon: require("@/assets/images/pancake.png"),
    title: "PancakeSwap",
    description: "Decentralised launchpad",
  },
  {
    icon: require("@/assets/images/sushi.png"),
    title: "SushiSwap",
    description: "BNB Chain",
  },
  {
    icon: require("@/assets/images/pink.png"),
    title: "Pinksale",
    description: "Decentralised launchpad",
  },
  {
    icon: require("@/assets/images/bina.png"),
    title: "Bibok",
    description: "BNB Chain",
  },
  {
    icon: require("@/assets/images/pancake.png"),
    title: "PancakeSwap",
    description: "Decentralised launchpad",
  },
  {
    icon: require("@/assets/images/sushi.png"),
    title: "SushiSwap",
    description: "BNB Chain",
  },
];
