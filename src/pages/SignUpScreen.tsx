import { StyleSheet, View } from "react-native";
import React from "react";
import { useGlobalStyles } from "../hooks";
import { CustomButton, CustomTextInput } from "../components";
import { Formik } from "formik";
import { MySignUpFormValues } from "../@types";
import { COLOR_BLACK, COLOR_WHITE } from "../theme";

const SignUpScreen = () => {
  const initialValues: MySignUpFormValues = {
    name: "",
    surName: "",
    age: "",
    eMail: "",
    userName: "",
    password: "",
  };
  return (
    <View style={[useGlobalStyles.page, styles.page]}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleReset, handleSubmit, values }) => (
          <>
            <CustomTextInput
              onChangeText={handleChange("name")}
              value={values.name}
              placeholder="Name"
            />
            <CustomTextInput
              onChangeText={handleChange("surName")}
              value={values.surName}
              placeholder="Surname"
            />
            <CustomTextInput
              onChangeText={handleChange("age")}
              value={values.age}
              placeholder="Age"
            />
            <CustomTextInput
              onChangeText={handleChange("eMail")}
              value={values.eMail}
              placeholder="E-mail"
            />
            <CustomTextInput
              onChangeText={handleChange("userName")}
              value={values.userName}
              placeholder="Username"
            />
            <CustomTextInput
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Password"
              type="password"
            />
            <View style={{ flexDirection: "row", gap: 4 }}>
              <CustomButton
                title="Register"
                onPress={handleSubmit as any}
                customButtonStyle={{ flex: 1 }}
                customTitleStyle={{ textAlign: "center" }}
              />
              <CustomButton
                title="Clear"
                customButtonStyle={{
                  borderWidth: 1,
                  backgroundColor: COLOR_WHITE,
                }}
                customTitleStyle={{ color: COLOR_BLACK }}
                onPress={handleReset as any}
              />
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export { SignUpScreen };

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    gap: 20,
    justifyContent: "center",
  },
});
