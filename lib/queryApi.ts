import openai from "./chatgpt";

const query = async(prompt: string, chatId: string, model: string) => {
    const res = await openai.createCompletion({
        model,
        prompt,
        temperature: 0.7,
        top_p: 1,
        max_tokens: 500,
        frequency_penalty: 0,
        presence_penalty: 0,
    }).then(res => res.data.choices[0].text)
    .catch(
        (err) => 
        `ChatGPT no ha podido encontrar una respuesta a tu pregunta! (Error: ${err.message})`
    );

    return res;
};

export default query;