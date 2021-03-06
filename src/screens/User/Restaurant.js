import {Image, ScrollView, Box, Text, Container} from 'native-base';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Leaderboard from '../../components/Actionsheets/Leaderboard';
import Carousel from '../../components/Carousel';
import cardShadow from '../../constants/cardShadow';
import primaryCardShadow from '../../constants/primaryCardShadow';
import HeartFilledIcon from '../../static/icons/heartfilled.png';
import CheckInIcon from '../../static/icons/checkin.png';
import LeaderboardIcon from '../../static/icons/leaderboard.png';
import theme from '../../theme';
import people from './people';

function Restaurant(props) {
  const {name, address} = props.route.params;
  const insets = useSafeAreaInsets();
  const [leaderboardSheetOpen, toggleLeaderboardSheet] = useState(false);

  return (
    <Box flex={1} backgroundColor="white">
      <Carousel name={name} />
      <Box
        width="100%"
        height="50"
        position="absolute"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        style={{top: insets.top}}>
        <Text color={theme.colors.primary[500]} fontWeight="bold" fontSize={24}>
          {name}
        </Text>
        <Text color="black" fontSize={16}>
          {address}
        </Text>
      </Box>
      <Box
        width="100%"
        height="50"
        position="absolute"
        flexDirection="column"
        style={{top: insets.top}}
        alignItems="flex-end"
        justifyContent="center">
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('Scanner');
          }}>
          <Image
            source={CheckInIcon}
            resizeMode="contain"
            alt="Check In"
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </Box>
      <Box
        style={{
          width: '100%',
          height: 70,
          marginLeft: 10,
          marginVertical: 10,
          alignItems: 'center',
        }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
          }}
          width="100%">
          <Image
            source={HeartFilledIcon}
            resizeMode="contain"
            alt="Place"
            borderRadius={100}
            style={{width: 50, height: 50, marginRight: 10}}
          />
          {people.map((uri, index) => (
            <Image
              key={index}
              source={{uri}}
              resizeMode="contain"
              alt="Person"
              borderRadius={100}
              style={{width: 50, height: 50, marginRight: 10}}
            />
          ))}
        </ScrollView>
      </Box>
      <Box flex={1} style={{marginHorizontal: 20}}>
        <Box
          backgroundColor="white"
          width="100%"
          flex={1}
          justifyContent="center"
          marginBottom={50}
          borderRadius={10}
          style={primaryCardShadow}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Pass', {
                name: 'Burma Love',
                address: '1 Belmont St Cambridge, MA 02138',
                level: 'Star Patron',
                color: '#FFD500',
              })
            }>
            <Box
              flexDirection="row"
              alignItems="center"
              marginHorizontal={10}
              style={{width: '100%'}}>
              <Image
                source={{
                  uri: 'https://i.picsum.photos/id/326/200/200.jpg?hmac=T_9V3kc7xrK46bj8WndwDhPuvpbjnAM3wfL_I7Gu6yA',
                }}
                resizeMode="contain"
                alt="NFT"
                borderRadius={100}
                style={{width: 120, height: 120, marginRight: 10}}
              />
              <Box style={{width: '100%'}}>
                <Text
                  flex={1}
                  fontSize={24}
                  fontWeight="bold"
                  color={'#FFD500'}>
                  Star Patron
                </Text>
                <Container h="2" mb="1">
                  <LinearGradient
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    colors={['#4BE1EC', '#8AA1ED', '#CB5EEE'].slice(
                      0,
                      Math.round(3 * (270 / 1000)) + 1,
                    )} // all three colors if full, only 1 or 2 depending on progress
                    style={{
                      zIndex: 1,
                      paddingRight: 120 * (270 / 1000), // from 0 to 120 based on progress
                      borderRadius: 5,
                    }}>
                    <Text></Text>
                  </LinearGradient>
                  <Container
                    zIndex="-1"
                    w="160"
                    h="2"
                    bg="white"
                    borderWidth={1}
                    borderRadius={10}
                    borderColor="#DADADA"
                    position="absolute"></Container>
                </Container>
                <Text fontSize="md" fontWeight="bold" color="black">
                  <Text color={theme.colors.primary[300]}>270</Text> / 275 to{' '}
                  <Text color="#DE9E11">Legendary</Text>
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
        </Box>
        <Box
          backgroundColor="white"
          width="100%"
          flex={1}
          justifyContent="center"
          marginBottom={50}
          borderRadius={10}
          style={cardShadow}>
          <TouchableOpacity onPress={() => toggleLeaderboardSheet(true)}>
            <Box
              flexDirection="row"
              alignItems="center"
              marginHorizontal={10}
              style={{width: '100%'}}>
              <Image
                source={LeaderboardIcon}
                resizeMode="contain"
                alt="Leaderboard"
                borderRadius={100}
                style={{width: 120, height: 120, marginRight: 10}}
              />
              <Box style={{width: '100%'}}>
                <Text
                  fontSize={24}
                  fontWeight="bold"
                  color={theme.colors.primary[300]}>
                  Leaderboard
                </Text>
                <Text fontSize={16} fontWeight="bold" color="#979797">
                  <Text color={theme.colors.primary[300]}>#1</Text> of 1000
                </Text>
              </Box>
            </Box>
          </TouchableOpacity>
        </Box>
      </Box>
      <Leaderboard
        onClose={() => {}}
        isVisible={leaderboardSheetOpen}
        toggleVisible={toggleLeaderboardSheet}
      />
    </Box>
  );
}

export default Restaurant;
