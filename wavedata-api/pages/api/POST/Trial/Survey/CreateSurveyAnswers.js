import { ethers } from 'ethers';
export default async function handler(req, res) {
  try {
    let FixCors = await import("../../../../../contract/fixCors.js");
    await FixCors.default(res);
  } catch (error) {}


  let useContract = await import("../../../../../contract/useContract.ts");
  let { contract, signerAddress } = await useContract.default();

  if (req.method !== 'POST') {
    res.status(405).json({ status: 405, error: "Method must have POST request" })
    return;
  }
  const data =Object.keys(req.body)[0];
  let alldata = JSON.parse(data);
  
  for (let i = 0; i < alldata.length; i++) {
    const item = alldata[i];
    const { trialid,userid,surveyid, sectionid,questionid ,answer  } = item;
    await contract.CreateQuestionAnswer(Number(trialid),Number(userid),Number(surveyid),Number(sectionid),Number(questionid) ,answer ,{
      gasLimit: 6000000,
      gasPrice: ethers.utils.parseUnits('100.0', 'gwei'),
    });    
  }

 
  res.status(200).json({ status: 200, value: "Created" })

}
