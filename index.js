
const Replicate = require("replicate");
require("dotenv").config();

// const OpenAI = require("openai");
// const openai = new OpenAI({
//  apiKey: "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"
// });
// const openFun=async()=>{
  
//  const prompt_text = "hello"
// const chatCompletion = await openai.chat.completions.create({
//    model: "text-davinci-003",
//    prompt: prompt_text,
//    messages: [{"role": "user", "content": "YOUR PROMPT TEXT",}],
//    max_tokens:100
//  });
//  console.log(chatCompletion.choices[0].message.content);
// }
// openFun();

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});



(async() =>{
  const model = "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b";
  const input = { prompt: "8k , cinematic , chines ,kungufu , cartoon" };
  const output = await replicate.run(model,{
    input: {
      width: 1024,
      height: 1024,
      prompt: "",
      refine: "expert_ensemble_refiner",
      scheduler: "KarrasDPM",
      num_outputs: 4,
      guidance_scale: 7.5,
      high_noise_frac: 0.8,
      prompt_strength: 0.8,
      num_inference_steps: 50
    }
  }
    );
  console.log(output);
})();




