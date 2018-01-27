package com.commerceproject;

import com.facebook.react.ReactActivity;
import com.reactnativecomponent.splashscreen.RCTSplashScreen;  
import android.os.Bundle;

public class MainActivity extends ReactActivity {
    @Override
    protected String getMainComponentName() {
        return "commerceProject";
    }
    @Override
protected void onCreate(Bundle savedInstanceState) {
    RCTSplashScreen.openSplashScreen(this);   //open splashscreen
    //RCTSplashScreen.openSplashScreen(this, true, ImageView.ScaleType.FIT_XY);   //open splashscreen fullscreen
    super.onCreate(savedInstanceState);
}
}
