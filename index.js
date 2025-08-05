const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');


function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
let xitem = ["Willy the Goblin" , "Big Daddy" , "Father Christmas"];
let yitem = ["the soup kitchen" , "Disneyland" , "the White House" ];
let zitem = ["spontaneously combusted","melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);

function result() {
  
  let newStory = storyText;
  let insertx = randomValueFromArray(xitem);
  let inserty = randomValueFromArray(yitem);
  let insertz = randomValueFromArray(zitem);

  newStory = storyText.replaceAll(':insertx:', insertx).replaceAll(':inserty:', inserty).replaceAll(':insertz:', insertz);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll("Bob",name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + ' stones';
    const temperature =  Math.round((94 - 32) * 5/9) + ' centigrade';
    newStory = newStory.replaceAll("94 fahrenheit" , temperature).replaceAll("300 pounds" , weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

