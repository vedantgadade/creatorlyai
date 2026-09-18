export default async function handler(req,res){
  if(req.method!=="POST") return res.status(405).json({error:"Method not allowed"});
  const key=process.env.OPENAI_API_KEY;
  if(!key) return res.status(500).json({error:"AI backend is not configured. Add OPENAI_API_KEY in your hosting environment."});

  try{
    const {tool,topic}=req.body||{};
    if(!topic || !tool) return res.status(400).json({error:"Topic and tool are required."});

    const prompts={
      title:"Create 10 YouTube titles. Make them clear, clickable, natural, and not misleading.",
      hook:"Create 10 short hooks for the first 2 seconds of a YouTube Short/Reel. Make them punchy but not fake.",
      script:"Write a 45-60 second YouTube Short script. Start with a hook, give useful value, and end with a simple CTA.",
      caption:"Write 5 Instagram captions for this topic. Keep them natural, useful and easy to read. Add a CTA.",
      hashtags:"Give 25 relevant hashtags for this topic. Mix broad and niche tags. Return only hashtags grouped by spaces.",
      thumbnail:"Write 5 detailed AI image prompts for a high-click YouTube thumbnail about this topic. Include subject, emotion, composition and 2-4 word text idea.",
      ad:"Write 3 short ad variations for this topic: headline, body and CTA. Do not make unsupported claims.",
      ideas:"Give 20 useful YouTube/Instagram content ideas around this topic. Mix tutorials, mistakes, comparisons, stories and quick tips."
    };

    const instruction=prompts[tool]||prompts.ideas;
    const input=`Topic: ${topic}\n\nTask: ${instruction}\nUse simple language. Do not mention that you are an AI.`;

    const response=await fetch("https://api.openai.com/v1/responses",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${key}`
      },
      body:JSON.stringify({
        model:"gpt-5.6-luna",
        input
      })
    });

    const data=await response.json();

    if(!response.ok)
      return res.status(response.status).json({
        error:data.error?.message||"AI provider error"
      });

    const output=data.output_text ||
      data.output?.flatMap(x=>x.content||[])
      .map(x=>x.text||"").join("\n") || "";

    if(!output)
      return res.status(500).json({error:"No text returned by AI."});

    return res.status(200).json({output});

  }catch(e){
    return res.status(500).json({error:"Server error. Please try again."})
  }
}
