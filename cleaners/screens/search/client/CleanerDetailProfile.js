import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { LabledInput, LabledItemsBox, LabledServicesBox, PrimaryTextButton as Button} from '../../../components/UI';

export default class CleanerDetailProfile extends React.Component {

    render() {
        const {firstName, lastName, price, services = [], languages = [], onContactPress} = this.props;
        const cLanguages = languages.map(lang => ({...lang, selected: true}));
        const cServices =  services.map(service => ({...service, selected: true}));
        return (
            <View style={styles.container}>
                <ScrollView>
                    <LabledInput
                        label="Name"
                        readOnly={true}
                        value={`${firstName} ${lastName}`} />

                    <LabledInput
                        containerStyle={styles.marginTop}
                        label="Price"
                        readOnly={true}
                        value={`${price} zl - per hour`} />

                    <LabledItemsBox
                        containerStyle={[styles.marginTop]}
                        label="Speaks"
                        items={cLanguages}/>

                    <LabledServicesBox
                        containerStyle={[styles.marginTop]}
                        label="Services"
                        items={cServices}/>

                    <Button
                        style={styles.button}
                        title='Contact'
                        onPress={onContactPress}/>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginHorizontal: 16
    },
    text: {
        marginLeft: 20,
        marginTop: 8
    },
    marginTop: {
        marginTop: 16
    },
    button: {
        marginTop: 18
    }

});