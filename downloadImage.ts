/**
 *  @function 下载图片到本地
 * */
export default function downloadImage(base64: string, name: string) {
  if (base64) {
    const a = document.createElement('a');
    a.download = name; // 设置图片的名字
    a.href = base64;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }
  throw 'base64为空字符串';
}
