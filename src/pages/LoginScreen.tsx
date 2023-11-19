import { StyleSheet, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import { MyFormValues } from "../@types";
import { CustomButton, CustomTextInput } from "../components";
import { useGlobalStyles } from "../hooks";
import { COLOR_BLACK, COLOR_WHITE } from "../theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const initialValues: MyFormValues = { userName: "", password: "" };
  return (
    <View style={[useGlobalStyles.page, styles.pages]}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log({ values });
        }}
        onReset={() => navigation.navigate("SignUpScreen")}
      >
        {({ handleChange, handleBlur, handleSubmit, handleReset, values }) => (
          <View style={{ gap: 24, alignItems: "center" }}>
            <CustomTextInput
              placeholder="User Name"
              type="userName"
              onChangeText={handleChange("userName")}
              value={values.userName}
            />
            <CustomTextInput
              placeholder="Password"
              type="password"
              onChangeText={handleChange("password")}
              value={values.password}
            />
            <View style={{ flexDirection: "row", gap: 4 }}>
              <CustomButton
                title="Giriş Yap"
                customButtonStyle={{ flex: 1 }}
                onPress={handleSubmit as any}
              />
              <CustomButton
                title="Üye Ol"
                customButtonStyle={{
                  borderWidth: 1,
                  backgroundColor: COLOR_WHITE,
                }}
                customTitleStyle={{ color: COLOR_BLACK }}
                onPress={handleReset as any}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export { LoginScreen };

const styles = StyleSheet.create({
  pages: {
    paddingHorizontal: 20,
    justifyContent: "center",
  },
});
