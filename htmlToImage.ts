import html2canvas from 'html2canvas';
/**
 *  @function 将html转化为canvas，最后将canvas转化为base64编码的图片
 * */
export default async function htmlToImage(
  id: string, // dom元素id
  imageType: 'png' | 'jpg' = 'png' // 图片格式
): Promise<string> {
  const element = document.getElementById(id);
  let canvas: HTMLCanvasElement;
  try {
    element &&
      (canvas = await html2canvas(element, {
        useCORS: true // 开启跨域
      }));
    return canvas.toDataURL(`image/${imageType}`);
  } catch (error) {
    return '';
  }
}
