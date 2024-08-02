// import fs from 'fs';
// import path from 'path';

// async function getVideoFileNames() {
//   const fileNames: string[] = [];
//   const directoryPath: string = '/videos'

//   // Read all files in the directory 'videos' and filter out non-MP4 files
//   try {
//     const files = await fs.promises.readdir(directoryPath);

//     for (const file of files) {
//       const filePath = path.join(directoryPath, file);
//       const stats = await fs.promises.stat(filePath);

//       if (stats.isFile() && path.extname(file) === '.mp4') {
//         fileNames.push(file);
//       }
//     }
//   } catch (error) {
//     console.error(`Error reading directory: ${error}`);
//   }

//   return fileNames;
// }

// // Return a list of `params` to populate the [slug] dynamic segment
// export async function generateStaticParams() {
//   const videoFileNames = await getVideoFileNames();

//   return videoFileNames.map((fileName) => ({
//     params: { slug: fileName }
//   }));
// }

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`

import Video from "../components/video";

export default function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  return (
    <Video videoName={`/${slug}`} />
  );
}