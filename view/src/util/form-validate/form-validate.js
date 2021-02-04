/**
 * 表单验证基类
 * @param msg 需要回显的信息
 * @param mode 应用场景，即验证级别
 **/
import Mode from "__protocol__/Mode";

class FormValidate {
    /**
     * 构造函数
     * @param msg 验证不通过时显示消息
     * @param mode 场景类型
     */
    constructor(msg, mode) {
        if (msg === null || msg === undefined) {
            this.msg = "";
        } else {
            this.msg = msg;
        }
        if (mode === null || mode === undefined || mode === "") {
            this.mode = Mode.ERROR;
        } else {
            this.mode = mode;
        }
    }

    /**
     * 验证函数规则
     * 验证通过返回true，验证失败返回false
     * @return boolean
     */
    validate(value) {

    }
}

export default FormValidate;