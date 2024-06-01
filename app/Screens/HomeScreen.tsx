import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";
import MasonryList from "reanimated-masonry-list";

const Categories = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Electronics",
  "Home",
  "Beauty",
];

const AVATAR_IMAGE =
  "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <ScrollView>
      <SafeAreaView
        style={{
          paddingVertical: 24,
          gap: 24,
        }}
      >
        {/* Header section */}
        <View
          style={{
            paddingHorizontal: 24,
            marginTop: 24,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            source={{ uri: AVATAR_IMAGE }}
            style={{
              width: 52,
              aspectRatio: 1,
              borderRadius: 52,
              marginRight: 4,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: colors.text,
                marginBottom: 6,
              }}
            >
              Hi, John Doe 👋{" "}
            </Text>
            <Text style={{ fontSize: 13, color: colors.text, opacity: 0.75 }}>
              Welcome back to your account
            </Text>
          </View>

          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: "lightgray",
              marginLeft: "auto",
            }}
          >
            <Icons name="notifications" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Search bar  section*/}

        <View
          style={{
            marginTop: 24,
            paddingHorizontal: 24,
            flexDirection: "row",
            alignItems: "center",
            gap: 12,
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              flexDirection: "row",
              gap: 12,
            }}
          >
            <Icons
              name="search"
              size={24}
              color={colors.border}
              style={{
                opacity: 0.9,
              }}
            />
            <Text
              style={{
                flex: 1,
                color: colors.text,
                opacity: 0.4,
                fontSize: 16,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              borderRadius: 52,
              alignItems: "center",
              justifyContent: "center",
              marginRight: 4,
              backgroundColor: colors.primary,
            }}
          >
            <Icons name="tune" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>

        {/* Grid Collection section */}

        <View
          style={{
            paddingHorizontal: 24,
          }}
        >
          {/* Title */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 18,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              New Collections
            </Text>
            <TouchableOpacity>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              height: 200,
              gap: 12,
            }}
          >
            {/* Card */}
            <Card />
            <View
              style={{
                flex: 1,
                gap: 12,
              }}
            >
              <Card />
              <Card />
            </View>
          </View>
        </View>

        {/* Categpries Section */}

        <FlatList
          data={Categories}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
          }}
          renderItem={({ item, index }) => {
            const isSelected = index === activeCategory;
            return (
              <TouchableOpacity
                onPress={() => setActiveCategory(index)}
                style={{
                  paddingHorizontal: 24,
                  paddingVertical: 16,
                  borderRadius: 100,
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  borderWidth: isSelected ? 0 : 0.5,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontSize: 16,
                    fontWeight: 600,
                    opacity: isSelected ? 1 : 0.4,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        {/* Products Section */}

        <MasonryList
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={(item): string => item}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 24,

          }}
          renderItem={({ item, i }) => (
            <View style={{
              aspectRatio: i === 0 ? 1 : 2/3,
              position: "relative",
              overflow: "hidden",
              backgroundColor:"red",
              marginTop:12,
              borderRadius: 24,
            }}>
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1717092068522-14f940bfa10e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                }}
                resizeMode="cover"
                style={
                  StyleSheet.absoluteFillObject
                }
              />
            </View>
          )}
          onEndReachedThreshold={0.1}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
      }}
    >
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1717092068522-14f940bfa10e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          left: 16,
          top: 16,
          paddingHorizontal: 14,
          paddingVertical: 10,
          backgroundColor: "rgba(0,0,0,0.5)",

          borderRadius: 100,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
          $130{" "}
        </Text>
      </View>
    </View>
  );
};
