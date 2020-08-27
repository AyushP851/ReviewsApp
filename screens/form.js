import React from 'react' ;
import { StyleSheet, Button, TextInput, View, Text } from 'react-native' ;
import { Styles } from '../styles/globalStyles' ;
import { Formik } from 'formik' ;

export default function Form() {
    return (
        <View style={ Styles.container } >
            <Formik
                initialValues={{ title: '', body: '', rating: ''}}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {(formikProps) => (
                    <View>
                        <TextInput 
                            style={ Styles.input }
                            placeholder='text input'
                            onChangeText={ formikProps.handleChange('title') }
                            value={ formikProps.values.title }
                        />
                        <TextInput 
                            style={ Styles.input }
                            placeholder='Review Body'
                            onChangeText={ formikProps.handleChange('body') }
                            value={ formikProps.values.body }
                        />
                        <TextInput 
                            style={ Styles.input }
                            placeholder='Rating (1-5)'
                            keyboardType= 'numeric'
                            onChangeText={ formikProps.handleChange('rating') }
                            value={ formikProps.values.rating }
                        />
                        <View style={ styles.button } >
                            <Button 
                                title='submit' 
                                color='maroon'
                                onPress={ formikProps.handleSubmit }
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignSelf: 'center',
        marginTop: 20,
        width: 100,
    },
})