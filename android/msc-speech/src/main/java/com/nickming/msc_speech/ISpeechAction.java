package com.nickming.msc_speech;

import com.facebook.react.bridge.Callback;

/**
 * class description here
 *
 * @author nickming
 * @version 1.0.0
 * @since 2017-07-21 下午2:23
 * Copyright (c) 2017 nickming All right reserved.
 */

public interface ISpeechAction {

    void speak(String content, Callback callback);

    void isSpeaking(Callback callback);

    void pauseSpeaking();

    void resumeSpeaking();

    void stopSpeaking();

}
