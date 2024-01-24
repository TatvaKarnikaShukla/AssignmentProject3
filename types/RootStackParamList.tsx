type RootStackParamList = {
    Login: undefined;
    Registration: undefined;
    ForgotPassword: undefined;
    Product: undefined,
    Cart: {cartItems: ProductItem[]},
    Orders: {orderItems: ProductItem[]},
    Home: undefined,
    Profile: undefined,
    Settings: undefined,
    TabScreens: undefined,
    DrawerScreens: undefined,
    PrivacyPolicy: undefined,
    AboutPage: undefined
}

export default RootStackParamList;