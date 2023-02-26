// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi';
import admin from "firebase-admin"
import { adminDb } from '../../firebaseAdmin';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {prompt , chatId, model, session} = req.body;

    if(!prompt){
        res.status(404).json({answer: "Por favor introduzca un prompt"});
        return;
    }

    if(!chatId){
        res.status(404).json({answer: "Por favor proporcione un chatid valido"});
        return;
    }

    // ChatGPT Query

    const response = await query(prompt, chatId, model)

    const message: Message = {
        text: response || "ChatGPT no ha podido encontrar una respuesta para eso",
        createdAt: admin.firestore.Timestamp.now(),
        user: {
          _id: 'ChatGPT',
          name: 'ChatGPT',
          avatar: 'https://1000logos.net/wp-content/uploads/2023/02/ChatGPT-Logo.png',
        }
    }

    await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text })
}
