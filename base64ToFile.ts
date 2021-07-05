/**
 *  @function 将base64转换为File对象(File对象才可上传)
 * */
export function base64ToFile(base64: string, name: string) {
  if (base64) {
    const arr = base64.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    const blob = new Blob([u8arr], { type: mime });
    const now = new Date();
    blob['lastModifiedDate'] = now;
    blob['lastModified'] = now.valueOf();
    blob['name'] = name;
    blob['uid'] = now.valueOf();
    return blob;
  }
  throw 'base64为空字符串';
}
