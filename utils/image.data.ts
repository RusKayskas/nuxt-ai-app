import type { IImageResolutionOptions, TImagesAmountOptions } from "~/types/image.types";

export const IMAGERESOLUTINOPTIONS: IImageResolutionOptions[] = [
  {
    value: '256x256',
    text: '256x256'
  },
  {
    value: '512x512',
    text: '512x512'
  },
  {
    value: '1024x1024',
    text: '1024x1024'
  }
];

// export const IMAGEAMOUNTOPTIONS: IImageResolutionOptions[] = [
//   {
//     value: '1',
//     text: '1 photo'
//   },
//   {
//     value: '2',
//     text: '2 photo'
//   },
//   {
//     value: '3',
//     text: '3 photo'
//   },
//   {
//     value: '4',
//     text: '4 photo'
//   }
// ];
export const IMAGEAMOUNTOPTIONS: TImagesAmountOptions[] = [
  {
    value: '1',
    text: '1 photo'
  },
  {
    value: '2',
    text: '2 photo'
  },
  {
    value: '3',
    text: '3 photo'
  },
  {
    value: '4',
    text: '4 photo'
  }
];