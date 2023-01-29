import * as dd from 'dingtalk-jsapi'; 
import $ from 'jquery';
import APP_TOOLS from './tools';
import apiConfig from './apiConfig';
import { message } from 'antd';

const { DING_SIGNATURE_URL,PARTNER_APP } = apiConfig;

const DD_TOOLS = {
    //钉钉配置
    setupDDconfig: function () {
        $.ajax({
            url: DING_SIGNATURE_URL + '?url=' + window.location.href,
            cache: false,
            success: (config:any) => {
                APP_TOOLS.setCookie('YGL_corpid', config.corpid, 1);
                if (!this.ddEnv().inDingTalk) return;
                dd.config({
                    agentId: PARTNER_APP,
                    corpId: config.corpid,
                    timeStamp: config.timestamp,
                    nonceStr: config.noncestr,
                    signature: config.signature,
                    jsApiList: [
                        'biz.user.get',
                        'biz.navigation.setTitle',
                        'biz.util.openLocalFile',
                        'biz.util.uploadImage',
                        'biz.util.previewImage',
                        'device.geolocation.get',
                        'biz.map.locate',
                        'biz.map.view',
                        'biz.contact.choose',
                        'biz.chat.pickConversation',
                        'biz.ding.create',
                        'biz.ding.post',
                        'biz.contact.complexPicker',
                        'device.notification.alert',
                        'device.notification.confirm',
                    ],
                });
            },
        });
    },
    //钉钉用户信息
    setupDDuser: function (callback:any, errcb:any) {
        $.ajax({
            url: DING_SIGNATURE_URL + '?url=' + window.location.href,
            cache: false,
            success: (config:any) => {
                APP_TOOLS.setCookie('YGL_corpid', config.corpid, 1);
                if (!this.ddEnv().inDingTalk) return;
                dd.config({
                    agentId: PARTNER_APP,
                    corpId: config.corpid,
                    timeStamp: config.timestamp,
                    nonceStr: config.noncestr,
                    signature: config.signature,
                    jsApiList: [
                        'biz.user.get',
                        'biz.navigation.setTitle',
                        'biz.util.openLocalFile',
                        'biz.util.uploadImage',
                        'biz.util.previewImage',
                        'device.geolocation.get',
                        'biz.map.locate',
                        'biz.map.view',
                        'biz.contact.choose',
                        'biz.chat.pickConversation',
                        'biz.ding.create',
                        'biz.ding.post',
                        'biz.contact.complexPicker',
                        'biz.util.openSlidePanel',
                        'device.notification.alert',
                        'device.notification.confirm',
                    ],
                });
                dd.ready(function () {
                    dd.biz.user.get({
                        onSuccess: function (info:any) {
                            console.log('userGet success: ' + JSON.stringify(info));
                            window.localStorage.setItem('YGL_DingUserId', info.emplId);
                            window.localStorage.setItem('YGL_DingUserName', info.nickName);
                            if (callback != null) {
                                callback(info);
                            }
                        },
                        onFail: function (err:any) {
                            console.log('dd error: ' + JSON.stringify(err));
                            message.info('获取用户信息失败user');
                            if (errcb != null) {
                                errcb(err);
                            }
                        },
                    });
                });

                dd.error(function (err) {
                    console.log('dd error: ' + JSON.stringify(err));
                    message.info('获取用户信息失败ready');
                    if (errcb != null) {
                        errcb(err);
                    }
                });
            },
            error: function (err:any) {
                if (typeof errcb === 'function') errcb(err);
            },
        });
    },
    ddEnv: function () {
        return {
            inDingTalk: dd.env.platform === 'notInDingTalk' ? false : true, // 是否在钉钉环境中
            platform: dd.env.platform, // 钉钉客户端类型（pc、android、ios、other）
            appType: dd.env.appType,
        };
    },
}
export default DD_TOOLS;