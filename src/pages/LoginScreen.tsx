import { StyleSheet, View } from "react-native";
import React from "react";
import { Formik } from "formik";
import { MyFormValues } from "../@types";
import { CustomTextInput } from "../components";
import { useGlobalStyles } from "../hooks";

const LoginScreen: React.FC = () => {
  const initialValues: MyFormValues = { userName: "", password: "" };
  return (
    <View style={[useGlobalStyles.page, styles.pages]}>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, handleReset }) => (
          <View style={{ gap: 24 }}>
            <CustomTextInput type="userName" />
            <CustomTextInput type="password" />
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
