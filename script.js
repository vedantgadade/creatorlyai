const topic=document.getElementById("topic"), tool=document.getElementById("toolSelect"), result=document.getElementById("result"), generate=document.getElementById("generate"), copy=document.getElementById("copy");
const presets={
 title:t=>`1. ${t}: The Complete Guide\n2. 7 Things You Need to Know About ${t}\n3. I Tried ${t} — Here's What Happened\n4. ${t} Tips That Actually Work\n5. Beginner's Guide to ${t}`,
 hook:t=>`"Stop scrolling — if you care about ${t}, you need to see this."\n\n"Most people get ${t} wrong. Here's the simple way."\n\n"I wish I knew this before starting with ${t}."`,
 script:t=>`HOOK (0–3s): Most people don't know this about ${t}.\n\nVALUE (3–35s): Explain the main idea in 2–3 simple points. Show examples and keep each point short.\n\nCTA (35–45s): Follow for more simple tips about ${t}.`,
 caption:t=>`🚀 Let's talk about ${t}.\n\nHere are a few simple things every creator should know. Save this post and share it with someone who needs it!\n\nWhat do you think? 👇`,
 hashtags:t=>`#${clean(t)} #ContentCreator #YouTube #Instagram #CreatorTips #SocialMedia #ContentCreation #AITools #CreatorEconomy`,
 thumbnail:t=>`Create a high-click YouTube thumbnail about "${t}". One clear subject, strong facial expression, bold 2–4 word text, high contrast, clean background, professional creator style, 16:9.`,
 ad:t=>`Headline: Make ${t} easier today\n\nBody: Save time and get started with a simple solution for ${t}. Try it now and see the difference.\n\nCTA: Get Started`,
 ideas:t=>`1. Beginner mistakes in ${t}\n2. 5 quick tips for ${t}\n3. Myths about ${t}\n4. ${t}: what nobody tells beginners\n5. A step-by-step ${t} tutorial\n6. Reacting to common ${t} mistakes\n7. ${t} tools you should try`
};
function clean(s){return s.toLowerCase().replace(/[^a-z0-9]+/g,"").slice(0,20)}
function make(){const t=topic.value.trim();if(!t){result.textContent="Please enter a topic first.";copy.hidden=true;return}result.textContent=presets[tool.value](t);copy.hidden=false}
generate.onclick=make;
document.querySelectorAll(".tool-card").forEach(c=>c.onclick=()=>{tool.value=c.dataset.tool;document.querySelector(".demo").scrollIntoView({behavior:"smooth"});topic.focus()});
copy.onclick=()=>{navigator.clipboard.writeText(result.textContent);copy.textContent="Copied ✓";setTimeout(()=>copy.textContent="Copy result",1200)};
document.getElementById("topic").addEventListener("keydown",e=>{if(e.key==="Enter")make()});
