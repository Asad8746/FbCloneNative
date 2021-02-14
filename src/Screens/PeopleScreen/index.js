import React, { useContext } from "react";
import { FlatList } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { Context } from "../../Context/People";
import { Loader, PeopleItem, SafeAreaComponent } from "../../Components";
import { peopleConstants } from "../../Navigators/constants";

export const PeopleScreen = ({ navigation }) => {
  const { state, getPeopleAction } = useContext(Context);
  const { loading, people } = state;
  useFocusEffect(() => {
    getPeopleAction();
  }, []);
  if (loading) return <Loader />;

  return (
    <SafeAreaComponent>
      <FlatList
        contentContainerStyle={{ paddingVertical: 10 }}
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
    </SafeAreaComponent>
  );
};
