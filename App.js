import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button, Text, View } from 'react-native';
import React, { useRef } from "react";
import { PortalProvider } from "@gorhom/portal";
import BottomSheet from "./components/BottomSheet";

export default function App() {

  const modalRef = useRef(null);

  const onOpen = () => {
    modalRef.current?.open();
  };

  const onClose = () => {
    modalRef.current?.close();
  };

  return (
    <PortalProvider >

      <View style={styles.container} >
          <Text></Text>
          <BottomSheet modalRef={modalRef} onClose={onClose} />
          <Button title="Open Modal" color="#1E2022" onPress={onOpen} />
      </View>
      
    </PortalProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9D6DF",
    alignItems: "center",
    justifyContent: "center",
  },
});
