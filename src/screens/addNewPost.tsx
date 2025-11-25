import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Custominput from '../components/UI/custominput';
import Button from '../components/UI/button';
import { Formik } from 'formik';
import { addNewPost } from '../store/actions/usersActions';
import { useDispatch } from 'react-redux';

const AddNewPost: React.FC = ({ navigation, route }) => {
  const { userId } = route.params;
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <ScrollView>
        <Formik
          initialValues={{ title: 'selam', body: 'aa', userId: userId }}
          onSubmit={values => dispatch(addNewPost(values))}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <Custominput
                onChangeText={handleChange('title')}
                onBlur={handleBlur('title')}
                value={values.title}
                label="Title"
              />
              <Custominput
                onChangeText={handleChange('body')}
                onBlur={handleBlur('body')}
                value={values.body}
                label="Body"
              />
              <Button onPress={handleSubmit} title="Kaydet" />
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default AddNewPost;
