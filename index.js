const Replicate = require("replicate");
require("dotenv").config();

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
      prompt: "alien in on the ground , spaceship in the skye, cinematic",
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