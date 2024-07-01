// cloudinary.provider.ts

import { v2 as cloudinary } from 'cloudinary';

export const CloudinaryProvider = {
  provide: 'CLOUDINARY',
  useFactory: () => {
    return cloudinary.config({
        cloud_name: process.env.dhflgszgo,
        api_key: process.env['648667473212993'],
        api_secret:
          process.env['0fI9EQZ2KM-CAAbs1N_briggWKU'],
    });
  },
};

