import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {Center, Image, Pressable} from 'native-base';
import React, {useRef, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  FlatList,
  View,
  Text,
} from 'react-native';
import {COLORS} from '../../styles/index';
import {ANIMATIONS, IMAGES} from '~/assets';
const height = Dimensions?.get('window').height;
const width = Dimensions?.get('window').width;
const data = [
  {
    _id: '1',
    title: 'Committed to Providing Exceptional Quality',
    description:
      'Arvind Techno, established in 1978, excels in civil construction, specializing in Bridges/Flyovers with 75+ completed and ongoing projects, emphasizing safety, sustainability, and quality infrastructure.',
    img: 'https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951227.jpg?t=st=1713119889~exp=1713123489~hmac=50536f45ef23399f6f15473bc9ffae904feee4be9f78881b425e0b575fb0fa92&w=360',
  },
  {
    _id: '2',
    title: 'Key Achievements Of Our Management Team',
    description:
      'First to adopt Segmental Construction and erection using Launching Girders in long River Bridges',
    img: 'https://img.freepik.com/free-photo/business-man-front-office-building_23-2148018589.jpg?t=st=1713120198~exp=1713123798~hmac=31fec61eabd1e2ed52b445223a4f4a5118084d0e5037cfbc242efb8327a38188&w=360',
  },
  {
    _id: '3',
    title: 'Group Companies',
    description:
      'Arvind Technocrats and Engineers LLP & Arvind Techno Infra Private Limited',
    img: 'https://img.freepik.com/free-vector/newspaper-realistic-set_1284-21768.jpg?t=st=1713120263~exp=1713123863~hmac=10718ba22ccf17ac3d16ec4234ef4e707e6000f00cace7f7e9e27a095fbd96f9&w=740',
  },
];

const OnBoarding = () => {
  const {navigate} = useNavigation<any>();
  const flatlistRef = useRef<any>();
  const [currentPage, setCurrentPage] = useState<any>(0);
  const [viewableItems, setViewableItems] = useState<any>([]);

  const handleViewableItemsChanged = useRef(({viewableItems}: any) => {
    setViewableItems(viewableItems);
  });
  useEffect(() => {
    if (!viewableItems[0] || currentPage === viewableItems[0].index) return;
    setCurrentPage(viewableItems[0].index);
  }, [viewableItems]);

  const handleNext = () => {
    if (currentPage == data.length - 1) return;

    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage + 1,
    });
  };

  const handleBack = () => {
    if (currentPage == 0) return;
    flatlistRef.current.scrollToIndex({
      animated: true,
      index: currentPage - 1,
    });
  };

  const handleSkipToEnd = () => {
    flatlistRef.current.scrollToIndex({
      animate: true,
      index: data.length - 1,
    });
  };

  const renderTopSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 30,
          }}>
          {/* Back button */}
          <TouchableOpacity
            onPress={handleBack}
            style={{
              padding: 20,
            }}>
            {/* Back icon */}
            {/* Hide back button on 1st screen */}
            <AntDesignIcons
              name="left"
              style={{
                fontSize: 25,
                color: COLORS.PRIMARY,
                opacity: currentPage == 0 ? 0 : 1,
              }}
            />
          </TouchableOpacity>

          {/* Skip button */}
          {/* Hide Skip button on last screen */}
          <TouchableOpacity onPress={handleSkipToEnd}>
            <Text
              style={{
                fontSize: 18,
                color: COLORS.PRIMARY,
                opacity: currentPage == data.length - 1 ? 0 : 1,
              }}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };

  const renderBottomSection = () => {
    return (
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 50,
            paddingVertical: 50,
          }}>
          {/* Pagination */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {
              // No. of dots
              [...Array(data.length)].map((_, index) => (
                <View
                  key={index}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor:
                      index == currentPage
                        ? COLORS.StatusBarColor
                        : COLORS.StatusBarColor + '20',
                    marginRight: 8,
                  }}
                />
              ))
            }
          </View>

          {/* Next or GetStarted button */}
          {/* Show or Hide Next button & GetStarted button by screen */}
          {currentPage != data.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.StatusBarColor,
              }}
              activeOpacity={0.8}>
              <AntDesignIcons
                name="right"
                style={{fontSize: 18, color: COLORS.textWhite, opacity: 0.8}}
              />
              <AntDesignIcons
                name="right"
                style={{fontSize: 25, color: COLORS.textWhite, marginLeft: -15}}
              />
            </TouchableOpacity>
          ) : (
            // Get Started Button
            <TouchableOpacity
              onPress={() => navigate('Login')}
              style={{
                paddingHorizontal: 20,
                height: 60,
                borderRadius: 30,
                backgroundColor: COLORS.StatusBarColor,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: COLORS.textWhite,
                  fontSize: 18,
                  marginLeft: 2,
                }}>
                Get Started
              </Text>
              <AntDesignIcons
                name="right"
                style={{
                  fontSize: 18,
                  color: COLORS.textWhite,
                  opacity: 0.8,
                  marginLeft: 20,
                }}
              />
              <AntDesignIcons
                name="right"
                style={{fontSize: 25, color: COLORS.textWhite, marginLeft: -15}}
              />
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    );
  };

  const renderFlatlistItem = ({item, index}: any) => {
    return (
      <View
        style={{
          width: Dimensions.get('window').width,
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            marginVertical: 10,
          }}>
          <Center>
            <Pressable
              height={Dimensions.get('window').height / 2.7}
              width={Dimensions.get('window').width}
              bgColor={COLORS.textWhite}>
              {index === data.length - 1 ? (
                <Image
                  source={item.img}
                  alt="img"
                  resizeMode="contain"
                  alignSelf={'center'}
                  style={{width: width / 1.2, height: height / 5}}
                />
              ) : (
                <Image
                  source={item.img}
                  alt="img"
                  resizeMode="contain"
                  alignSelf={'center'}
                  style={{width: width / 1.2, height: height / 5}}
                />
              )}
            </Pressable>
          </Center>
        </View>
        <View style={{paddingHorizontal: 20, marginVertical: 20}}>
          <Text
            style={{
              fontSize: 22,
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#a21caf',
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              // opacity: 0.4,
              textAlign: 'center',
              marginTop: 15,
              lineHeight: 28,
              color: '#000',
            }}>
            {item.description}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.textWhite,
        justifyContent: 'center',
      }}>
      {/* TOP SECTION - Back & Skip button */}
      {renderTopSection()}

      {/* FLATLIST with pages */}
      <FlatList
        data={data}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item._id}
        renderItem={renderFlatlistItem}
        ref={flatlistRef}
        onViewableItemsChanged={handleViewableItemsChanged.current}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
        initialNumToRender={1}
        extraData={Dimensions.get('window').width}
      />

      {/* BOTTOM SECTION - pagination & next or GetStarted button */}
      {renderBottomSection()}
    </View>
  );
};

export default OnBoarding;
