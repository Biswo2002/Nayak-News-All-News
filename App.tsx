import {config} from '@gluestack-ui/config';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {PublicRoutes} from '~/routes';
import PrivateRoutes from '~/routes/private';
import CustomTheme from '~/styles';

export default function App(): JSX.Element {
  return (
    <NativeBaseProvider
      theme={CustomTheme}
      config={{
        dependencies: {
          'linear-gradient': require('react-native-linear-gradient').default,
        },
      }}>
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          {true ? <PrivateRoutes /> : <PublicRoutes />}
        </NavigationContainer>
      </GluestackUIProvider>
    </NativeBaseProvider>
  );
}
