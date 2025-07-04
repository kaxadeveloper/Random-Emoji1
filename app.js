const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const emoji = [];

async function getEmoji(){
   let response = await fetch("https://emoji-api.com/emojis?access_key=996249c9212b9f75df7b3c1558c14eaf599fd01e");

   data = await response.json();
   
   for (let i = 0; i < 1500; i++){
      emoji.push({
        emojiName: data[i].character,
        emojiCode: data[i].unicodeName,
      });
   }
};

getEmoji();

btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiName;
    emojiNameEl.innerText = emoji[randomNum].emojiCode;
});