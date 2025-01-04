//0x5FbDB2315678afecb367f032d93F642f64180aa3
import chatAppJSON from "./ChatApp.json"

export const ChatAppAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"

export const ChatAppABI = chatAppJSON.abi

const networks = {
    localhost: {
        chainId: `0x${Number(31337).toString(16)}`,
        chainName: "localhost",
        nativeCurrency: {
            name: "GO",
            symbol: "GO",
            decimals: 18
        },
        rpcUrls: ["http://127.0.0.1:8545/"],
        blockExplorerUrls: ["https://bscscan.com"]
    }
}

const changeNetwork = async ({ networkName }) => {
    try {
        if (!window.ethereum) {
            console.error("MetaMask is not installed!");
            return;
        }

        const networkDetails = networks[networkName];

        // Request to switch to the network
        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: networkDetails.chainId }]
        });
    } catch (error) {
        // If the network is not added, add it
        if (error.code === 4902) {
            try {
                const networkDetails = networks[networkName];
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: networkDetails.chainId,
                            chainName: networkDetails.chainName,
                            nativeCurrency: networkDetails.nativeCurrency,
                            rpcUrls: networkDetails.rpcUrls,
                            blockExplorerUrls: networkDetails.blockExplorerUrls
                        }
                    ]
                });
            } catch (addError) {
                console.error("Failed to add network:", addError);
            }
        } else {
            console.error("Failed to switch network:", error);
        }
    }
}

export const handleNetworkSwitch = async () => {
    const networkName = "localhost"
    await changeNetwork({ networkName })
}