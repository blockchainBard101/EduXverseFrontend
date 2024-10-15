import { SUI_CLIENT } from "./suiClient.ts";

export class SuiService {
    async getFormattedBalance(owner: string) {
        const res = await SUI_CLIENT.getBalance({
            owner,
        });
        return Number(Number(res.totalBalance) / 1000_000_000).toFixed(2);
    }

}

// let ss = new SuiService()

// console.log(ss.getFormattedBalance("0x2fe3a3c705a0b53592e8a71e281f22520b78b53b2db83ee88c63ef4e4acf0a72"))