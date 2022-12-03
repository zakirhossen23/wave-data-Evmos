
export default async function handler(req, res) {
  try {
    let FixCors = await import("../../../../contract/fixCors.js");
    await FixCors.default(res);
  } catch (error) {}


    let useContract = await import("../../../../contract/useContract.ts");
    let { contract, signerAddress } = await useContract.default();
  
    if (req.method !== 'POST') {
      res.status(405).json({ status: 405, error: "Method must have POST request" })
      return;
    }
  
    const { trialid,userid } = req.body;
 
    await contract.CreateOngoingTrail(Number(trialid),Number(userid),(new Date()).toISOString());
    res.status(200).json({ status: 200, value: "Created" })
  
  }
  