import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Context } from "../Context/People";
import Loader from "../Components/Loader";
import PeopleItem from "../Components/People/PeopleItem";
import PeopleHeader from "../Components/People/PeopleHeader";
import SafeAreaView from "../Components/SafeArea";
import { peopleConstants } from "../Navigators/constants";

const PeopleScreen = ({ navigation }) => {
  const { state, getPeopleAction } = useContext(Context);
  const { loading, people } = state;
  console.log(state);
  useFocusEffect(() => {
    getPeopleAction();
  }, []);
  if (loading) return <Loader />;

  return (
    <SafeAreaView>
      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
        data={people}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <PeopleItem
              profile={item}
              onPress={() =>
                navigation.navigate(peopleConstants.profile, { id: item._id })
              }
            />
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default PeopleScreen;
