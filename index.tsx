import React, { Component, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';
import htmlToImage from './htmlToImage';
import downloadImage from './downloadImage';
import base64ToFile from './base64ToFile';
import uploadFileToCDN from './uploadFileToCDN';

function App() {
  useEffect(() => {
    downloadUploadImage('image1', 'image1');
  }, []);
  async function downloadUploadImage(
    elementId: HtmlElement,
    name: string,
    type: 'png' | 'jpg' = 'png'
  ) {
    const image = await htmlToImage(elementId, type);
    downloadImage(image, name);
    const file = base64ToFile(image, name);
    // uploadFileToCDN(file);
  }
  return (
    <div
      id="image1"
      style={{
        background: 'yellow'
      }}
    >
      我是图片
    </div>
  );
}

render(<App />, document.getElementById('root'));
