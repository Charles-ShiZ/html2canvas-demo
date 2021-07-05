// 编程猫项目依赖
import CDNClient from '@frontend/cdn-uploader';
import { config } from 'src/utils/config';
import { cdnUploadEnvMap } from 'src/constant/common';

export default async function uploadFile(
  file: File,
  filename,
  successCb,
  errorCb?
) {
  const { env } = config();
  const cdnEnv = cdnUploadEnvMap[env];
  const uploadClient = new CDNClient({
    env: cdnEnv,
    projectName: 'crm_web_rocket'
  });
  const uploader = await uploadClient.create(file, {
    filename,
    insertOnly: true,
    onprogress: e => {},
    onsuccess: successCb,
    onerror: errorCb
  });
  uploader.start();
}
