/*
 * @Descripttion: 
 * @version: 
 * @Author: 唐帆
 * @Date: 2020-03-16 15:47:43
 * @LastEditors: 唐帆
 * @LastEditTime: 2020-03-16 17:27:40
 */

import React, { Component } from 'react';
import UEditor from "./Ueditor";
 
export default class AddMessage extends Component {
 
  state = {
    content: ''
  };
 
  handleChange = (content) => {
    this.state.content = content;
  };
 
  render() {
 
    let { content } = this.state;
 
    return (
 
      <div style={{width:600,textAlign:50,marginLeft:50}}>
        <UEditor content={content} onChange={this.handleChange} editorHandle={this.editorHandle} ue={this.ue} />
      </div>
    );
  }
}