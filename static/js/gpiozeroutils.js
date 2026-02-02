import React from "react";

/**
 * SourceClass 组件 - 显示类定义
 * @param {string} funname - 类名（如 gpiozero.Button）
 * @param {string} funargs - 构造函数参数
 */
export const SourceClass = ({ funname, funargs }) => {
    return (
        <div className="source-class-wrapper">
            <span className="source-class-keyword">class </span>
            <span className="source-class-name">{funname}</span>
            <span className="source-class-args">({funargs})</span>
        </div>
    );
}

/**
 * SourceProp 组件 - 显示方法或属性
 * @param {string} propname - 属性/方法名
 * @param {string} propargs - 参数（如果有）
 * @param {string} type - 类型：'property', 'method', 或 'auto'（默认自动检测）
 */
export const SourceProp = ({ propname, propargs, type = 'auto' }) => {
    const hasArgs = propargs && propargs.trim() !== '';
    
    // 自动检测类型：有参数的是方法，无参数的是属性
    let actualType = type;
    if (type === 'auto') {
        actualType = hasArgs ? 'method' : 'property';
    }
    
    const isProperty = actualType === 'property';
    const isMethod = actualType === 'method';
    
    return (
        <div className={`source-prop-wrapper ${isProperty ? 'source-prop-property' : 'source-prop-method'}`}>
            {isProperty && <span className="source-prop-keyword">property </span>}
            <span className="source-prop-name">{propname}</span>
            {hasArgs && <span className="source-prop-args">({propargs})</span>}
        </div>
    );
}

/**
 * SourceFunc 组件 - 显示函数定义
 * @param {string} funname - 函数名（如 gpiozero.fonts.load_font_7seg）
 * @param {string} funargs - 函数参数
 */
export const SourceFunc = ({ funname, funargs }) => {
    return (
        <div className="source-func-wrapper">
            <span className="source-func-name">{funname}</span>
            <span className="source-func-args">({funargs})</span>
        </div>
    );
}