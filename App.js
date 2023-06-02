import { Text, View } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./app.sytle";
export default function App() {
      return(
            <SafeAreaProvider>
                  <SafeAreaView style = { s.app }>
                        <View style={s.header}>
                              <Text>HeaderTest</Text>
                        </View>
                        <View style={s.body}>
                              <Text>Body</Text>
                        </View>
                              
                        <View style={s.footer}>
                              <Text>Footer</Text>
                        </View>
                            
                  </SafeAreaView>  
            </SafeAreaProvider>
                 
      );
}


