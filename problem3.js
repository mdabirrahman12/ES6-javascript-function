function countHashtags(caption) {
    if(typeof caption == "number"|| caption.length < 2)
        return "Invalid"
    const word = caption.split(" ");
    const hashtags = word.filter(word => word.startsWith("#"));
    let longestHashtages = "";
    // for(let i = 0; i< hashtags.length;i++){
    //     const tag = hashtags[i].slice(1)
    //     if(tag.length > longestHashtages.length){
    //         longestHashtages = tag;
    //     }
    hashtags.forEach(hashtag=>{
        const tag = hashtag.slice(1);
        if(tag.length > longestHashtages.length){
            longestHashtages = tag
        }
    })
        
    
        
    
        return {hashtagCount: hashtags.length,longestTag: longestHashtages}
}

const result = countHashtags("Loving this weather today #sunny #vibes #weekend")
console.log(result)
const result2 = countHashtags("No hashtags here")
console.log(result2)
const result3 = countHashtags("#ai #ml data science")
console.log(result3)
const result4 = countHashtags(123)
console.log(result4)
const result5 = countHashtags(["#fun"])
console.log(result5)