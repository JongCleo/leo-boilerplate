import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import http from 'http';
// import WebSocket from 'ws';

dotenv.config();

const app = express();
export const server = http.createServer(app);

// Attach WebSocket server to the HTTP server
// const wss = new WebSocket.Server({ server });

// wss.on('connection', (ws: WebSocket) => {
//   console.log('New Connection Initiated');

//   let recognizeStream: ReturnType<typeof client.streamingRecognize> | null =
//     null;

//   ws.on('message', (message: WebSocket.Data) => {
//     const msg = JSON.parse(message.toString());
//     switch (msg.event) {
//       case 'connected':
//         console.log(`A new call has connected.`);
//         break;
//       case 'start':
//         console.log(`Starting Media Stream ${msg.streamSid}`);
//         // Create Stream to the Google Speech to Text API
//         if (!client) {
//           console.error('Google Speech to Text client is not initialized');
//           return;
//         }
//         if (!request) {
//           console.error(
//             'Request configuration for Google Speech to Text is not defined',
//           );
//           return;
//         }
//         recognizeStream = client
//           .streamingRecognize(request)
//           .on('error', console.error)
//           .on('data', (data: any) => {
//             const transcript = data.results[0]?.alternatives[0]?.transcript;
//             if (transcript) {
//               console.log(transcript);
//               wss.clients.forEach((client: WebSocket) => {
//                 if (client.readyState === WebSocket.OPEN) {
//                   client.send(
//                     JSON.stringify({
//                       event: 'interim-transcription',
//                       text: transcript,
//                     }),
//                   );
//                 }
//               });
//             }
//           });
//         break;
//       case 'media':
//         if (recognizeStream) {
//           recognizeStream.write(msg.media.payload);
//         }
//         break;
//       case 'stop':
//         console.log(`Call Has Ended`);
//         if (recognizeStream) {
//           recognizeStream.destroy();
//         }
//         break;
//     }
//   });
// });
app.get('/', (req: Request, res: Response) => {
  res.send(`Yepaa it's healthy!`);
});


