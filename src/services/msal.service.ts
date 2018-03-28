import {UserAgentApplication, User, Logger, LogLevel} from './msal';
import { Injectable } from '@angular/core';
import {AppSettings} from  '../app/app.settings';
declare var window: any;
declare var cordova: any;


@Injectable()
export class MsalService{
    public access_token: string;
    public user: string;
    private authority: string;
    private tenantConfig: any;
    private clientApplication: any;
 
    constructor() {
        this.initAuthApp();
       
    }
    public loggerCallback(logLevel, message, piiLoggingEnabled) {
        console.log(message);
    }

    protected initAuthApp() {
        var __this=this;
        var logger = new Logger(this.loggerCallback, { level: LogLevel.Verbose, correlationId:'12345' }); // level and correlationId are optional parameters.
		//Logger has other optional parameters like piiLoggingEnabled which can be assigned as shown aabove. Please refer to the docs to see the full list and their default values.
	
        this.tenantConfig = {
            tenant: AppSettings.tenant, 
            clientID: AppSettings.clientId,
            signUpSignInPolicy:AppSettings.signUpSignInPolicy,
            b2cScopes: AppSettings.b2cScopes,
           // webApi: AppSettings.WebApi,
        };
        this.authority =AppSettings.authority; // "https://login.microsoftonline.com/tfp/" + this.tenantConfig.tenant + "/" + this.tenantConfig.signUpSignInPolicy;
        this.clientApplication = new UserAgentApplication(
            this.tenantConfig.clientID, this.authority,
            function (errorDesc: any, token: any, error: any, tokenType: any) {
                
                // Called after loginRedirect or acquireTokenPopup
                // alert('1:' + token);

                // __this.setLoggedInUserData(token);

                // alert('2:' + token);
            }
            , {logger: logger,cacheLocation:"localStorage",navigateToLoginRequestUrl:false, redirectUri:AppSettings.B2C_AD_RedirectUri}
        );

       // this.clientApplication.redirectUri = AppSettings.B2C_AD_RedirectUri;
    }
    // public setLoggedInUserData(token:string):void{      
        
    //     super.setLoggedInUserData(token, this.createUser(token ));
    // }

    public login(): void {
      //  this.initAuthApp();
        this.clientApplication.loginRedirect(this.tenantConfig.b2cScopes);
    }
   
    public  acquireTokenSilent():Promise<any>
    {
      
      return   this.clientApplication.acquireTokenSilent(this.tenantConfig.b2cScopes)
    }

    public   logout(): void {
        
        this.clientApplication.logout();
    };

    public    isOnline(): boolean {
        
        return this.clientApplication.getUser() != null; 
    };

 }
