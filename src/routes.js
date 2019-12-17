import Body from './public-body.vue'
    import Two from './course-management.vue';
        import Mycourse from './my-course.vue'
        import Savevideo from './save-video.vue'
        import Uploadsuccess from './upload-success.vue'
        import Header from './Public-header.vue'
        import Vedioright from './vedio-right.vue'
            import Auditrelease from './audit-body-release.vue'
            import Vedioexamine from './audit-body-examine.vue'
            import Vedionopass from './audit-no-pass.vue'

    import One from './essential-information.vue'
        import Password from './login-password.vue'
        import Message from './my-message.vue'   
        import Editing from './editing-information.vue'
        import Authentication from './authentication.vue'
        import Authenticationfail from './authentication-fail.vue'
        import Authenticationloading from './authentication-loading.vue'
        import Authenticationsuccess from './authentication-success.vue'

    import Three from './my-questions.vue';
        import Qaright from './qa-right.vue'
            import Qarightbody from './qa-right-body.vue'
            import myanswers from './my-answers.vue';

    import Four from './my-income.vue'

    import Five from './personal-center.vue'

import Footer from './Public-footer.vue'

import lecturerlg from './lecturer-login.vue'
    import lectureright from './lecturer-login-right.vue'
    import lecturerwechat from './lecturer-wechat-login.vue'
    import phoneregister from './phone-register.vue'
    import yzmlogin from './yzm-login.vue'

import xxx from './xxx.vue'

export const routes = [
    {path: '/home', component: Body,children:[

        { path: '/home',name:'five',component: Five,},

        { path: '/course-managemen',name:'Two',component: Two,children:[
            { path: '/my-course',name:'my-course',component: Mycourse,},
            { path: '/save-video',name:'save-video',component: Savevideo,},
            { path: '/upload-success',name:'upload-success ',component: Uploadsuccess,},
            { path: '/header',name:'Header',component: Header,},
            { path: '/course-managemen',name:'vedio-right',component: Vedioright,children:[
                { path: '/course-managemen',name:'audit-release',component: Auditrelease,},
                { path: '/audit-examine',name:'audit-examine',component: Vedioexamine,},
                { path: '/no-pass',name:'no-pass',component: Vedionopass,},
            ]},
        ]},

        { path: '/my-questions',name:'my-questions',component: Three,children:[
            { path: '/my-questions',name:'qa-right',component: Qaright,children:[
                { path: '/my-questions',name:'qa-right-body',component: Qarightbody,},
                { path: '/my-answers',name:'my-answers',component: myanswers,}
            ]},
            
        ]},

        { path: '/my-income',name:'home',component: Four,},


        { path: '/left',name:'left',component: One,children:[
            { path: '/password',name:'password',component: Password,},
            { path: '/left',name:'message',component: Message},
            { path: '/editing',name:'editing',component:  Editing},
            { path: '/authentication',name:'authentication',component:  Authentication},
            { path: '/authentication-fail',name:'authentication-fail',component:  Authenticationfail},
            { path: '/authentication-loading',name:'authentication-loading',component:  Authenticationloading},
            { path: '/authentication-success',name:'authentication-success',component:  Authenticationsuccess},

            ]
        }, 
        
    ]
},

{path: '/',component: lecturerlg,children:[
    {path: '/',component: lectureright},
    {path: '/lecturerwechat',component: lecturerwechat},
    {path: '/phoneregister',component: phoneregister},
    {path: '/yzmlogin',component: yzmlogin},
]},

    {path: '/lecturerbg',component: Footer},

    {path: '/xxx',component: xxx},
   
    {path: '*'}


]
