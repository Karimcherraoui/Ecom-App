import {
  View,
  Text,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icons from "@expo/vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const AVATAR_IMAGE =
  "https://www.elitesingles.co.uk/wp-content/uploads/sites/59/2019/11/2b_en_articleslide_sm2-350x264.jpg";


const HomeScreen = () => {
  const { colors } = useTheme();
  return (
    <ScrollView>
      <SafeAreaView style={{
        paddingVertical: 24,
        gap: 24,
      }}>
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

        <View style={{
            paddingHorizontal: 24,
        }}>
            {/* Title */}
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                
            }}>
                <Text style={{
                    fontSize: 20,
                    fontWeight: 700,


                }} >New Collections</Text>
                <TouchableOpacity>

                <Text >See all</Text>
                </TouchableOpacity>
            </View>
                <View style={{
                    flexDirection: "row",
                    overflow: "hidden",
                }}>
                {/* Card */}
                <View style={{
                    flex: 1,
                    height: 200,
                }}>
                    <Image source={require("../../assets/Image/prd.webp")} 
                    resizeMode="cover"
                    style={
                        StyleSheet.absoluteFill
                    }
                     />

                </View>
                </View>
        </View>




      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;
