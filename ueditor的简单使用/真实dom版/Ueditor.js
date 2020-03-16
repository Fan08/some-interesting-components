/*
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-03-16 15:43:20
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-03-16 19:18:21
 */


import React, { Component } from 'react';
 
 
export default class UEditor extends Component {
    state={
        content: null,
    }
 
    componentDidMount() {
            let UE = window.UE;
            var ue = UE.getEditor("container", {
                UEDITOR_HOME_URL: '../static/ueditor/',
                // 文档上传地址
                // serverUrl: null,
                initialFrameHeight: 300,
                toolbars: [
                    [
                        'undo', //撤销 
                        'redo', //重做 
                        'bold', //加粗 
                        'italic', //斜体 
                        'underline', //下划线 
                        'strikethrough', //删除线 
                        'subscript', //下标 
                        'superscript', //上标 
                        // 'source', //源代码 
                        // 'blockquote', //引用 
                        // 'pasteplain', //纯文本粘贴模式 
                        'horizontal', //分隔线 
                        'removeformat', //清除格式 
                        // 'unlink', //取消链接 
                        'inserttitle', //插入标题 
                        // 'simpleupload', //单图上传 
                        // 'insertimage', //多图上传 
                        // 'link', //超链接 
                        // 'spechars', //特殊字符 
                        // 'searchreplace', //查询替换 
                        // 'map', //Baidu地图 
                        // 'insertvideo', //视频 
                        'justifyleft', //居左对齐 
                        'justifyright', //居右对齐 
                        'justifycenter', //居中对齐 
                        'justifyjustify', //两端对齐  
                        'fullscreen', //全屏 
                        'imagecenter', //居中 
                        // 'edittip ', //编辑提示 
                        // 'customstyle', //自定义标题 
                        // 'scrawl', //涂鸦 
                        // 'music', //音乐 
                        'inserttable', //插入表格 
                        // 'charts', // 图表 
                        'fontfamily', //字体 
                        'fontsize', //字号 
                        'insertcode', //代码语言 
                        'insertorderedlist', //有序列表 
                        'insertunorderedlist', //无序列表
                        'lineheight', //行间距  
                        'rowspacingtop', //段前距 
                        'rowspacingbottom', //段后距 
                        'forecolor', //字体颜色 
                        'backcolor', //背景色              
                        'preview', //预览 

                        'kityformula'
                    ]
                ]
            });
 
            this.editor = ue;
 
            ue.addListener('contentChange', () => {
                this.props.onChange(ue.getContent())
            })
    }
 
    componentWillUnmount() {
        this.editor.destroy();
 
        let child = document.getElementById("edui_fixedlayer")
        child.parentNode.removeChild(child);
    }

    testSubmit=()=>{
        let UE = window.UE;
        // console.log(UE.getEditor('container').getContent())
        this.setState({
            content: UE.getEditor('container').getContent()
        })
    }
 
    render() {
        return (
            <div>
                <textarea id="container" name="blog" type="text/plain" onChange={() => { }}
                    value={this.props.content} style={{ margin: "15px 0" }}>
                </textarea>
                <button onClick={this.testSubmit}>保存</button>
                <div dangerouslySetInnerHTML={{__html:this.state.content}} />
            </div>
        )
    }
}