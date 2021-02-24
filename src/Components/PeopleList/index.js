import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import Empty from "../Empty";
import { Loader } from "../Loader";
import { PeopleItem } from "../People/PeopleItem";
import { SafeAreaComponent } from "../SafeArea";
const PeopleList = ({ getResource, dependency, message }) => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getResource((data, loadingState, errorState) => {
      setData(data);
      setLoading(loadingState);
    });
  }, [dependency]);
  if (loading) return <Loader />;
  return (
    <SafeAreaComponent>
      <FlatList
        contentContainerStyle={{ paddingVertical: 10 }}
        data={data}
        ListEmptyComponent={() => <Empty message={message} />}
        bounces={false}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ flexGrow: 1 }}
        renderItem={({ item }) => {
          return (
            <PeopleItem
              profile={item}
              onPress={() => console.log("I am pressed")}
            />
          );
        }}
      />
    </SafeAreaComponent>
  );
};

export default PeopleList;
