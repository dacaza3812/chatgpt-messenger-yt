// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi';

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

    const {prompt, chatId, model, session} = req.body;

    if(!prompt){
        res.status(400).json({answer: "Por favor introduzca un prompt"});
        return;
    }

    if(!chatId){
        res.status(400).json({answer: "Por favor proporcione un ID valido"});
        return;
    }

    //ChatGPT query
    const response = await query(prompt, chatId, model);

    const message: Message = {
        text: response || "ChatGPT no ha podido encontrar la respuesta a eso",
        
    }

  res.status(200).json({ name: 'John Doe' })
}
