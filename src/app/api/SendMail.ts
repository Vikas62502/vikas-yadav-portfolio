import { NextApiRequest, NextApiResponse } from "next"


const SendMail = (req: NextApiRequest, res: NextApiResponse) => {
    // Send mail code
    res.send('Mail sent successfully')
}

export default SendMail