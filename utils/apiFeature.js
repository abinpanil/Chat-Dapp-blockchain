import { ethers } from "ethers";
import Web3Modal from "web3modal"
import { ChatAppAddress, ChatAppABI } from "@/Context/constant";

export const CheckIfWalletConnected = async () => {
    try {
        if (!window.ethereum) throw new Error('No crypto wallet found');

        const accounts = await window.ethereum.request({
            method: "eth_accounts",
        })

        return accounts[0];
    } catch (e) {
        console.log(e)
    }
}

export const connectToWallet = async () => {
    try {
        if (!window.ethereum) throw new Error('No crypto wallet found');

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        return accounts[0];
    } catch (e) {
        console.log(e)
    }
}

const fetchContract = (signerOrProvider) => new ethers.Contract(ChatAppAddress, ChatAppABI, signerOrProvider)

export const connectingWithContract = async () => {
    try {
        if (!window.ethereum) throw new Error('No crypto wallet found');
        const web3Modal = new Web3Modal();
        const connection = await web3Modal.connect();
        const provider = new ethers.providers.Web3Provider(connection);
        const signer = provider.getSigner();
        const contract = fetchContract(signer);
        return contract
    } catch (e) {
        console.log(e)
    }
}

export const convertTime = (time) => {
    const newTime = new Date(time.toNumber())

    const realTime = newTime.getHours() +
        "/" +
        newTime.getMinutes() +
        "/" +
        newTime.getSeconds() +
        " Date:" +
        newTime.getDate() +
        "/" +
        (newTime.getMonth() + 1) +
        "/" +
        newTime.getFullYear()

    return realTime
}