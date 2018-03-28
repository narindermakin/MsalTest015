export class AppSettings {

    public static tenant = "incometechnologiesdev.onmicrosoft.com";
    public static clientId = 'babd6756-48bd-4df7-b6e7-a312516286d2';
    public static signUpSignInPolicy = "B2C_1_basic";
    public static b2cScopes = ["openid"];//[ "https://incometechnologiesdev.onmicrosoft.com/litwebdev/read"]; 
   // public static WebApi = [ "https://incometechnologiesdevhello.azurewebsites.net/hello"];
    public static authorityOnly = "https://login.microsoftonline.com/tfp/"+ AppSettings.tenant + "/";
    public static authority = AppSettings.authorityOnly + AppSettings.signUpSignInPolicy; 
    public static B2C_AD_RedirectUri_MobileDevice = "msal"+AppSettings.clientId+"://auth";
    //public static B2C_AD_RedirectUri_Browser = "http://localhost:6420";
    public static B2C_AD_RedirectUri =  AppSettings.B2C_AD_RedirectUri_MobileDevice;

}