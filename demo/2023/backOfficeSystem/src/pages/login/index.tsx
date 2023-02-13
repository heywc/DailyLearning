/*
 * @Author: heywc “1842347744@qq.com”
 * @Date: 2023-01-16 17:26:33
 * @LastEditors: heywc “1842347744@qq.com”
 * @LastEditTime: 2023-02-13 13:08:39
 * @FilePath: /DailyLearning/demo/2023/backOfficeSystem/src/pages/login/index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Button, message } from "antd";
import React, { useState } from "react";
import { loginApi } from "../../api/auth";
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

import '../../styles/login/login.scss'

interface loginInterface {
    mobile?: string;
    password?: string;
    verifyCode?: string;
    authCode?: string;
}
const LoginPage: React.FC = ()=>{
    const [loginType, setLoginType] = useState(2); // 登录方式 1: 验证码 2: 密码 3: 钉钉  4 找回密码
    const [loginParams, setLoginParams] = useState<loginInterface>({});
    const [pwdShow, setPwdShow] = useState<boolean>(false);
    const [time, setTime] = useState<number>(11);
    const [btnContent, setBtnContent] = useState<string>('获取验证码');
    const [btnDisabled, setBtnDisabled] = useState<boolean>(false);

    // 登录
    const tologin = () => {
        // 参数处理...
        // if (loginType === 1) {
        //     params.mobile = loginParams.mobile;
        //     params.verifyCode = loginParams.verifyCode;
        //     params.source = 'MANAGEMENT'; // 后台管理系统编码
        // } else if (loginType === 2) {
        //     params.mobile = loginParams.mobile;
        //     params.password = loginParams.password;
        // }
        // 发起请求...
        loginRequest();
     
    };
    // 改变密码
    const toChangePad = () => {
        console.log('改变密码')
        // app.request({
        //     url: 'POST /auth/modifyStaffPassword',
        //     domain: 'apitest',
        //     data: {
        //         ...loginParams,
        //         source: 'MANAGEMENT', // 后台管理系统编码
        //     },
        // })
        //     .then((res) => {
        //         const { code, data, msg } = res.data;
        //         if (code == 200) {
        //             toast.success('修改成功');
        //             changeLoginType(2);
        //         } else {
        //             toast.error('修改失败');
        //         }
        //     })
        //     .catch(() => {
        //         toast.error('修改失败');
        //     });
    };
    const changeLoginType = (type: number) => {
        setLoginParams({});
        setLoginType(type);
    };
    const changeParams = (e: any, field: string) => {
        e.persist();
        setLoginParams({
            ...loginParams,
            [field]: e.target.value,
        });
    };
    const clock = () => {
        if (!loginParams.mobile) {
            return;
        }
        getVerificationCode();
        let ti = time;
        let timer = setInterval(function() {
            if (ti > 1) {
                ti = ti - 1;
                setTime(ti);
                setBtnContent(ti + 's后可重新获取');
                setBtnDisabled(true);
            } else {
                setTime(11);
                setBtnContent('获取验证码');
                clearInterval(timer);
                setBtnDisabled(false);
            }
        }, 1000);
    };
    // 获取验证码
    const getVerificationCode = () => {
        // 验证码按钮进入倒计时 逻辑待补充
        if (!loginParams.mobile) {
            message.error('手机号不能为空!');
            return;
        }

        // 发起获取验证码接口请求
        // app.request({
        //     url: 'GET /auth/sms/send/code',
        //     domain: 'apitest',
        //     data: {
        //         mobile: loginParams.mobile,
        //         source: 'MANAGEMENT', // 来源用 系统编码表示
        //     },
        // })
        //     .then((res) => {
        //         const { code, data, msg } = res.data;
        //         if (code == 200) {
        //             // 获取成功
        //         } else {
        //             // 获取失败
        //             toast.error('验证码获取失败');
        //         }
        //     })
        //     .catch(() => {
        //         toast.error('验证码获取失败');
        //     });
    };
    // 登录请求
    const loginRequest = () => {
        console.log('调用接口进行登录，');
        
        // app.request({
        //     url: 'POST /ygl-auth/loginByManagement',
        //     domain: 'apitest',
        //     data: params,
        // })
        //     .then((res) => {
        //         const { code, data, msg }: any = res.data;
        //         if (code == 200) {
        //             setStore(storeKeys.accessToken, data.authVo.accessToken);
        //             setStore(storeKeys.permissionToken, data.code);
        //             setStore(storeKeys.userInf, data.authVo);
        //             setStore(storeKeys.userName, data.authVo.userName);
        //             setStore(storeKeys.avatar, data.authVo.avatar);
        //             getRoleMenuList();
        //             getUserRights();
        //             toast.success('登录成功');
        //         } else {
        //             toast.error('登录失败');
        //         }
        //     })
        //     .catch(() => {
        //         toast.error('登录失败');
        //     });
    };
    return (
        <div className="login">
            <div className="loginContainer">
                <div className="title">
                    <div className="title-main">通用项目模版</div>
                    <div className="title-sub">xx管理后台</div>
                </div>
                <div className="main">
                    <div className="subTitles">
                        {loginType === 3 ? (
                            <>
                                <div className="subTitle_act subTitle">扫码登录</div>
                                <div className="otherTitle" onClick={() => changeLoginType(2)}>
                                    使用账密登录
                                </div>
                            </>
                        ) : loginType === 4 ? (
                            <>
                                <div className="subTitle_act subTitle">找回密码</div>
                                <div className="otherTitle" onClick={() => changeLoginType(2)}>
                                    返回登录
                                </div>
                            </>
                        ) : (
                            <>
                                <div
                                    onClick={() => changeLoginType(1)}
                                    className={
                                        loginType === 1 ? 'subTitle_act subTitle' : 'subTitle'
                                    }
                                >
                                    验证码登录
                                </div>
                                <div
                                    onClick={() => changeLoginType(2)}
                                    className={
                                        loginType === 2 ? 'subTitle_act subTitle' : 'subTitle'
                                    }
                                >
                                    密码登录
                                </div>
                            </>
                        )}
                    </div>
                    {/* 验证码登录 */}
                    <div
                        className="inputContainer"
                        style={{ display: loginType === 1 ? 'block' : 'none' }}
                    >
                        <div className="inputItem">
                            <div className="inputItem-left"> 手机号 </div>
                            <div className="inputItem-right">
                                <input
                                    value={loginParams.mobile || ''}
                                    onChange={(e) => changeParams(e, 'mobile')}
                                    placeholder="请填写手机号"
                                />
                            </div>
                        </div>
                        <div className="inputItem">
                            <div className="inputItem-left"> 验证码 </div>
                            <div className="inputItem-right">
                                <input
                                    value={loginParams.verifyCode || ''}
                                    onChange={(e) => changeParams(e, 'verifyCode')}
                                    placeholder="请输入验证码"
                                />
                                <Button
                                    className="verifyCodeBtn"
                                    onClick={clock}
                                    disabled={btnDisabled}
                                    style={{ padding: '0 10px' }}
                                >
                                    {btnContent}
                                </Button>
                            </div>
                        </div>
                    </div>
                    {/* 密码登录 */}
                    <div
                        className="inputContainer"
                        style={{ display: loginType === 2 ? 'block' : 'none' }}
                    >
                        <div className="inputItem">
                            <div className="inputItem-left"> 账号 </div>
                            <div className="inputItem-right">
                                <input
                                    value={loginParams.mobile || ''}
                                    onChange={(e) => changeParams(e, 'mobile')}
                                    placeholder="请填写账号"
                                />
                            </div>
                        </div>
                        <div className="inputItem">
                            <div className="inputItem-left"> 密码 </div>
                            <div className="inputItem-right">
                                <input
                                    value={loginParams.password || ''}
                                    onChange={(e) => changeParams(e, 'password')}
                                    placeholder="请输入密码"
                                    type={pwdShow ? '' : 'password'}
                                />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <span onClick={() => setPwdShow(!pwdShow)}>
                                        <EyeInvisibleOutlined
                                            style={{
                                                fontSize: '16px',
                                                color: '#08c',
                                                marginRight: '10px',
                                                display: pwdShow ? 'block' : 'none',
                                            }}
                                        />
                                        <EyeOutlined
                                            style={{
                                                fontSize: '16px',
                                                color: '#08c',
                                                marginRight: '10px',
                                                display: pwdShow ? 'none' : 'block',
                                            }}
                                        />
                                    </span>
                                    <span
                                        className="verifyCodeBtn"
                                        onClick={() => changeLoginType(4)}
                                    >
                                        忘记密码
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 找回密码 */}
                    <div
                        className="inputContainer"
                        style={{ display: loginType === 4 ? 'block' : 'none' }}
                    >
                        <div className="inputItem">
                            <div className="inputItem-wole">
                                <input
                                    value={loginParams.mobile || ''}
                                    onChange={(e) => changeParams(e, 'mobile')}
                                    placeholder="请输入手机号"
                                />
                            </div>
                        </div>
                        <div className="inputItem">
                            <div className="inputItem-wole">
                                <input
                                    value={loginParams.verifyCode || ''}
                                    onChange={(e) => changeParams(e, 'verifyCode')}
                                    placeholder="请输入短信验证码"
                                />
                                <div className="verifyCodeBtn" onClick={getVerificationCode}>
                                    获取验证码
                                </div>
                            </div>
                        </div>
                        <div className="inputItem">
                            <div className="inputItem-wole">
                                <input
                                    value={loginParams.password || ''}
                                    onChange={(e) => changeParams(e, 'password')}
                                    placeholder="设置密码（8-20个字,包含字母和数字）"
                                />
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingTop: '25px', display: 'flex', justifyContent: 'center' }}>
                        <Button
                            type="primary"
                            style={{
                                padding: '0 30px',
                                display: loginType === 1 || loginType === 2 ? 'block' : 'none',
                            }}
                            onClick={tologin}
                        >
                            登录
                        </Button>
                        <Button
                            type="primary"
                            style={{
                                padding: '0 30px',
                                display: loginType === 4 ? 'block' : 'none',
                            }}
                            onClick={toChangePad}
                        >
                            确认修改
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage