import upload from './upload';
// 上传榜单图片到cdn
export default function uploadFileToCDN(file: File) {
  return new Promise((resolve, reject) => {
    upload(
      file,
      file.name,
      res => {
        resolve(res.url);
      },
      err => {
        reject(err);
      }
    );
  });
}
