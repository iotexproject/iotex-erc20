import BigNumber from "bignumber.js";
import { Account } from "iotex-antenna/lib/account/account";
import { DecodeData } from "./erc20";
import { IRpcMethod } from "iotex-antenna/lib/rpc-method/types";
export interface IERC20TokenInfo {
    erc20TokenAddress: string;
    balance: BigNumber;
    decimals: BigNumber;
    symbol: string;
    name: string;
    balanceString: string;
}
export interface IERC20TokenDict {
    [index: string]: ERC20Token;
}
export interface IERC20TokenInfoDict {
    [index: string]: IERC20TokenInfo;
}
export declare class ERC20Token {
    private readonly erc20;
    private static readonly erc20Refs;
    private static readonly erc20TokenRefs;
    constructor(erc20TokenAddress: string, provider: IRpcMethod);
    static getToken(erc20TokenAddress: string, provider: IRpcMethod): ERC20Token;
    decode(data: string): DecodeData;
    checkValid(): Promise<boolean>;
    getInfo(walletAddress: string): Promise<IERC20TokenInfo>;
    transfer(to: string, value: BigNumber, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
}
