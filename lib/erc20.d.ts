import BigNumber from "bignumber.js";
import { Account } from "iotex-antenna/lib/account/account";
import { IRpcMethod } from "iotex-antenna/lib/rpc-method/types";
export interface Method {
    name: string;
    inputsNames: [string];
    inputsTypes: [string];
}
export interface DecodeData {
    method: string;
    data: {
        [key: string]: any;
    };
}
export interface IERC20 {
    address: string;
    name(callerAddress: string): Promise<string>;
    symbol(callerAddress: string): Promise<string>;
    decimals(callerAddress: string): Promise<BigNumber>;
    totalSupply(callerAddress: string): Promise<BigNumber>;
    balanceOf(owner: string, callerAddress: string): Promise<BigNumber>;
    transfer(to: string, value: BigNumber, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
    allowance(owner: string, spender: string, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
    approve(spender: string, value: BigNumber, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
    transferFrom(from: string, to: string, value: BigNumber, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
    decode(data: string): DecodeData;
}
export declare class ERC20 implements IERC20 {
    address: string;
    private contract;
    provider: IRpcMethod;
    private methods;
    static create(address: string, provider: IRpcMethod): IERC20;
    name(callerAddress: string): Promise<string>;
    symbol(callerAddress: string): Promise<string>;
    decimals(callerAddress: string): Promise<BigNumber>;
    totalSupply(callerAddress: string): Promise<BigNumber>;
    balanceOf(owner: string, callerAddress: string): Promise<BigNumber>;
    transfer(to: string, value: BigNumber, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
    allowance(owner: string, spender: string, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
    approve(spender: string, value: BigNumber, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
    transferFrom(from: string, to: string, value: BigNumber, account: Account, gasPrice: string, gasLimit: string): Promise<string>;
    private readMethod;
    private executeMethod;
    decode(data: string): DecodeData;
}
