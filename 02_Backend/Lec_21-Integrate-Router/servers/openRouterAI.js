import openRouter from "../config/openrouter.js";

export const Airesponse = async ({ model, messages }) => {

    const completion = await openRouter.chat.send({

        chatRequest: {
            model,
            messages,
            maxTokens: 3000,
        },

    });

    const aiReply = completion.choices[0]?.message?.content;

    if (!aiReply) {
        throw new Error("AI response is empty");
    }

    const promptTokens = completion.usage?.promptTokens || 0;
    const completionTokens = completion.usage?.completionTokens || 0;

    return {
        aiReply,
        usage: {
            promptTokens,
            completionTokens,
            totalTokens: promptTokens + completionTokens,
        },
    };
};