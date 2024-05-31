

// create a variable to hold your NFT's
const NFTs=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,eyeColour,shirtType,bling) {
const NFT={
  "Name":name,
  "EyeColour":eyeColour,
  "ShirtType":shirtType,
  "Bling":bling
}

NFTs.push(NFT);
console.log("Minted: " + name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++)
      {
      console.log("\nID : "+ i+1);
      console.log("Name : "+NFTs[i].Name);
      console.log("Eye Coulour : "+NFTs[i].EyeColour);
      console.log("Shirt Type : "+NFTs[i].ShirtType);
      console.log("Bling : "+NFTs[i].Bling +"\n");
      }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log(NFTs.length);
}

// call your functions below this line
mintNFT("Nandan","Black","T-shirt","Silver Chain");
mintNFT("Ashish","Black","Hoody","Golden Watch");
mintNFT("Shashank","Brown","T-shirt","Ring");
mintNFT("Prince","Black","T-shirt","Golden Chain");
listNFTs();
getTotalSupply();
