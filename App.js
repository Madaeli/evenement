import { Text } from "react-native"
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function App() {
      return(
            <SafeAreaProvider>
                  <SafeAreaView>
                        <View>
                              <Text>Header</Text>
                        </View>
                              <Text>Body</Text>
                        <View>
                              <Text>Footer</Text>
                        </View>
                            
                  </SafeAreaView>  
            </SafeAreaProvider>
                 
      );
}


