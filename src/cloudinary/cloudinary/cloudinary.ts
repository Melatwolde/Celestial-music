// cloudinary.provider.ts

import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
        cloud_name: "",
        api_key: process.env['xxxxxx'],
        api_secret:
          process.env['xxxxxxxxxx'],
    });
  },
};

