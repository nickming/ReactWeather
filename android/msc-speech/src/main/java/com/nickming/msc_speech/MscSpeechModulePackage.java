package com.nickming.msc_speech;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * class description here
 *
 * @author nickming
 * @version 1.0.0
 * @since 2017-07-21 上午9:07
 * Copyright (c) 2017 nickming All right reserved.
 */

public class MscSpeechModulePackage implements ReactPackage {



    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> nativeModuleList=new ArrayList<>();
        nativeModuleList.add(new MscSpeechModule(reactContext));
        return nativeModuleList;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}
