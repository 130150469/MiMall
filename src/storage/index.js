/**
 * 项目中用到的 所以要用ES6规范
 * Storage封装
 */
const Storage_Key = "mall"

export default {
    //存储值
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value; 
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(Storage_Key,JSON.stringify(val));
        }
    
    },
    //获取某一个模块下面的属性
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
    
        return this.getStorage()[key];
    },
    getStorage(){
        //将字符串对象转化为JSON对象
        return JSON.parse(window.sessionStorage.getItem(Storage_Key || '{}'));
    },
    clear(key,module_name){
        let val = this.getStorage();
        if(module_name){
            if(val[!module_name]) return ;
            delete val[module_name][key]
        }else{
            delete val[key]
        }
        window.sessionStorage.setItem(Storage_Key,JSON.stringify(val));
    }
}