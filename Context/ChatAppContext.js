import { ERROR_TOAST, SUCCESS_TOAST } from '@/constants/constants'
import { CheckIfWalletConnected, connectingWithContract, connectToWallet } from '@/utils/apiFeature'
import { ethers } from 'ethers'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export const ChatAppContext = React.createContext()

export const ChatAppProvider = ({ children }) => {
    const [account, setAccount] = useState("")
    const [userName, setUserName] = useState("")
    const [fiendList, setFiendList] = useState([])
    const [friendMsg, setFriendMsg] = useState([])
    const [loading, setLoading] = useState(false)
    const [userLists, setUserLists] = useState([])
    const [error, setError] = useState(null)
    const [toast, setToast] = useState({ show: false, type: '', message: "" })
    const [currentUsername, setCurrentUsername] = useState("")
    const [currentUserAddress, setCurrentUserAddress] = useState("")

    const router = useRouter()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const contract = await connectingWithContract()
            const connectAccount = await connectToWallet()
            setAccount(connectAccount)
            const userName = await contract.getUserName(connectAccount)
            setUserName(userName)

            const friendList = await contract.getMyFriendList()
            setFiendList(friendList)

            const userList = await contract.getAllAppUsers()
            setUserLists(userList)

        } catch (error) {
            console.log(error)
            if (error.reason !== 'user not fount') setError("Please install and connect your wallet")
        }
    }

    const readMessage = async (friendAddress) => {
        try {
            const contract = await connectingWithContract()
            const read = await contract.readMessage(friendAddress)
            setFriendMsg(read)

        } catch (error) {
            console.log(error)
            setToast({ show: true, type: ERROR_TOAST, message: "Currently you have no message" })
        }
    }

    const createAccount = async ({ name, accountAddress }) => {
        try {
            if (!name || !accountAddress) return setToast({ show: true, type: ERROR_TOAST, message: 'Please fill all fields' })
            setLoading(true)
            const contract = await connectingWithContract()
            const getCreatedUser = await contract.createAccount(name)
            await getCreatedUser.wait()
            window.location.reload()
            setToast({ show: true, type: SUCCESS_TOAST, message: 'Account created successfully' })
        } catch (error) {
            console.log(error)
            setToast({ show: true, type: ERROR_TOAST, message: error?.reason || "Something went wrong" })
        } finally {
            setLoading(false)
        }
    }

    const addFriend = async ({ name, accountAddress }) => {
        try {
            if (!name || !accountAddress) return setToast({ show: true, type: ERROR_TOAST, message: "Fields cannot empty" })

            setLoading(true)
            const contract = await connectingWithContract()
            const addMyFriend = await contract.addFriend(accountAddress, name)
            await addMyFriend.wait()
            window.location.reload()
        } catch (error) {
            console.log(error)
            setToast({ show: true, type: ERROR_TOAST, message: error?.reason || "Something went wrong" })
        } finally {
            setLoading(false)
        }
    }

    const sendMsg = async ({ msg, address }) => {
        try {
            if (!msg || !address) return setToast({ show: true, type: ERROR_TOAST, message: "Fields cannot empty" })

            const contract = await connectingWithContract()
            const addMsg = await contract.sendMessage(address, msg)
            setLoading(true)
            await addMsg.wait()
            window.location.reload()
        } catch (error) {
            console.log(error)
            setToast({ show: true, type: ERROR_TOAST, message: error?.reason || "Something went wrong" })
        } finally {
            setLoading(false)
        }
    }

    const readUserInfo = async (userAddress) => {
        const contract = await connectingWithContract()
        const userName = await contract.getUsername(userAddress)
        setCurrentUsername(userName)
        setCurrentUserAddress(userAddress)
    }

    return (
        <ChatAppContext.Provider value={{
            readMessage,
            createAccount,
            addFriend,
            sendMsg,
            readUserInfo,
            connectToWallet,
            CheckIfWalletConnected,
            account,
            userName,
            fiendList,
            friendMsg,
            loading,
            userLists,
            error,
            currentUsername,
            currentUserAddress,
            toast,
            setToast
        }}>
            {children}
        </ChatAppContext.Provider>
    )
}