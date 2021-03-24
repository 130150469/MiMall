/**
 * 因为是给webpack用的
 * 所以需要commonJS规范
 */
module.exports = {
     //前端代理
     devServer:{  
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:"http://mall-pre.springboot.cn", // 需要代理的位置
                changeOrigin:true,// 是否要将主机头的源点更改为目标url节点
                pathRewrite:{
                    '/api':'',
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            alias:{
                "assets":"@/assets",
                "network":"@/network",
                "common":"@/common",
                "views":"@/views",
                "components":"@/components",
                "pages":"@/pages",
                "storage":"@/storage"
            }
        }
    },
   
}