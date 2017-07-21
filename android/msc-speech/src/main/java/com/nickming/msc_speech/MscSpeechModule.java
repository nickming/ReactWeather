package com.nickming.msc_speech;

import android.os.Bundle;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.GuardedAsyncTask;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.iflytek.cloud.InitListener;
import com.iflytek.cloud.SpeechConstant;
import com.iflytek.cloud.SpeechError;
import com.iflytek.cloud.SpeechSynthesizer;
import com.iflytek.cloud.SpeechUtility;
import com.iflytek.cloud.SynthesizerListener;

/**
 * class description here
 *
 * @author nickming
 * @version 1.0.0
 * @since 2017-07-21 上午9:06
 * Copyright (c) 2017 nickming All right reserved.
 */

public class MscSpeechModule extends ReactContextBaseJavaModule implements ISpeechAction {

    private static final String TAG = "MscSpeechModule";

    private SpeechSynthesizer mSpeechSynthesizer;


    public MscSpeechModule(ReactApplicationContext reactContext) {
        super(reactContext);
        init(reactContext);
    }

    /**
     * 初始化讯飞语音合成模块
     *
     * @param reactContext
     */
    private void init(ReactApplicationContext reactContext) {
        SpeechUtility.createUtility(reactContext, SpeechConstant.APPID + "=59714a9e");
        mSpeechSynthesizer = SpeechSynthesizer.createSynthesizer(reactContext, new InitListener() {
            @Override
            public void onInit(int i) {
                Log.i(TAG, "onInit: 讯飞语音初始化完成");
            }
        });
        //设置网络模式
        mSpeechSynthesizer.setParameter(SpeechConstant.ENGINE_MODE, SpeechConstant.TYPE_CLOUD);
        //设置音调
        mSpeechSynthesizer.setParameter(SpeechConstant.PITCH, "50");
        //设置音量
        mSpeechSynthesizer.setParameter(SpeechConstant.VOLUME, "50");
    }

    @Override
    public String getName() {
        return "MSCSpeechModule";
    }

    @ReactMethod
    @Override
    public void speak(final String content, final Callback callback) {
        new GuardedAsyncTask<Void, Void>(getReactApplicationContext()) {

            @Override
            protected void doInBackgroundGuarded(Void... params) {

                try {
                    if (mSpeechSynthesizer == null)
                        init(getReactApplicationContext());
                    if (mSpeechSynthesizer.isSpeaking())
                        mSpeechSynthesizer.stopSpeaking();
                    if (content == null)
                        callback.invoke("content is null");
                    mSpeechSynthesizer.startSpeaking(content, new SynthesizerListener() {
                        @Override
                        public void onSpeakBegin() {

                        }

                        @Override
                        public void onBufferProgress(int i, int i1, int i2, String s) {

                        }

                        @Override
                        public void onSpeakPaused() {

                        }

                        @Override
                        public void onSpeakResumed() {

                        }

                        @Override
                        public void onSpeakProgress(int i, int i1, int i2) {

                        }

                        @Override
                        public void onCompleted(SpeechError speechError) {
                            callback.invoke("speak completed!", true);
                        }

                        @Override
                        public void onEvent(int i, int i1, int i2, Bundle bundle) {

                        }
                    });
                } catch (Exception e) {
                    callback.invoke(e.getMessage());
                }
            }
        }.execute();
    }

    @ReactMethod
    @Override
    public void isSpeaking(final Callback callback) {
        new GuardedAsyncTask<Void, Void>(getReactApplicationContext()) {

            @Override
            protected void doInBackgroundGuarded(Void... params) {
                try {
                    if (mSpeechSynthesizer.isSpeaking())
                        callback.invoke(true);
                    else
                        callback.invoke(false);
                } catch (Exception e) {
                    callback.invoke(e.getMessage());
                }
            }
        }.execute();
    }

    @ReactMethod
    @Override
    public void pauseSpeaking() {
        if (mSpeechSynthesizer.isSpeaking())
            mSpeechSynthesizer.pauseSpeaking();
    }

    @ReactMethod
    @Override
    public void resumeSpeaking() {
        mSpeechSynthesizer.resumeSpeaking();
    }

    @ReactMethod
    @Override
    public void stopSpeaking() {
        mSpeechSynthesizer.stopSpeaking();
    }
}
