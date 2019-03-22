import I18n,{ getLanguages } from 'react-native-i18n'
import DeviceInfo from 'react-native-device-info'
import en from './en'
import ar from './ar'



I18n.defaultLocale = 'ar';
// I18n.locale = 'ar'; # to see the arabic version
I18n.fallbacks = true;

I18n.translations = {
    en,
    ar,
};

//bc we are using english system, it always gives english version-->don't worry
I18n.localeLanguage = () => { 

    new DataRepository().fetchLocalRepository('localLanguage')
        .then((res)=>{

            I18n.locale = res;

        })
        .catch((error)=>{

            I18n.locale = DeviceInfo.getDeviceLocale();

        });

    return I18n.locale;

};


export { I18n, getLanguages };
