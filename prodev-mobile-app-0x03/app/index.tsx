import { Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "@/styles";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

    export default function Index() {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                {/* navbar */}
                <View style={styles.navGroup}>
                    <Ionicons name="arrow-back" size={25} />
                    <Image source={require('@/assets/images/logo.png')} />
                </View>

                {/* Home Texts */}
                <Text style={styles.largeText}>
                    Sign in to your
                </Text>
                <Text style={styles.largeText}>
                    Account
                </Text>
                <Text style={styles.smallText}>
                    Enter your email and password to sign in.
                </Text>

                {/* Sign in form */}
                <View style={styles.formGroup}>
                    <View>
                        <Text style={styles.placeholderText}>Email</Text>
                        <TextInput keyboardType="email-address" style={styles.inputField} />
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={styles.placeholderText}>Password</Text>
                        
                        <View style={styles.passwordGroup}>
                        <TextInput style={{ flex: 1 }} />
                        <FontAwesome name="eye-slash" size={24} color='#7e7b7b' /> 
                        </View>
                    </View>

                    <Text style={styles.forgotPasswordText}>Forgot password?</Text>
                </View>

                <TouchableOpacity style={styles.button}>
                    <Text>Sign In</Text>
                </TouchableOpacity>

                <View style={styles.dividerGroup}>
                    <View style={styles.divider}>
                        <Text style={styles.dividerText}>OR</Text>
                    </View>
                    <View style={styles.divider}></View>
                </View>

                <View style={styles.socialMediaButtonGroup}>
                    <TouchableOpacity style={styles.socialMediaButton}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5}}>
                            <Image source={require('@/assets/images/google.png')} />
                            <Text style={styles.socialMediaButtonText}>Continue with Google</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialMediaButton}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5}}>
                            <Image source={require('@/assets/images/facebook.png')} />
                            <Text style={styles.socialMediaButtonText}>Continue with Facebook</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* Call to action */}
                <View style={styles.subTextGroup}>
                    <Text style={styles.subText}>Don&apos;t have an account?</Text>
                    <Text style={styles.subTextJoin}>Join now</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}