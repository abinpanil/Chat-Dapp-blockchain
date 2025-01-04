// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity >=0.7.0 <0.9.0;

contract ChatApp {
    struct user {
        string name;
        friend[] friendList;
    }

    struct friend {
        address pubkey;
        string name;
    }

    struct message {
        address sender;
        uint256 timestamp;
        string msg;
    }

    struct AllUserStruck {
        string name;
        address accountAddress;
    }

    AllUserStruck[] getAllUsers;

    mapping(address => user) userList;
    mapping(bytes32 => message[]) allMessages;

    //check if user exists
    function checkUserExist(address pubkey) public view returns (bool) {
        return bytes(userList[pubkey].name).length > 0;
    }

    event UserCreated(string name, address indexed userAddress);

    //create account
    function createAccount(string calldata name) external {
        require(!checkUserExist(msg.sender), "User already exists");
        require(bytes(name).length > 0, "Name cannot be empty");

        userList[msg.sender].name = name;

        getAllUsers.push(AllUserStruck(name, msg.sender));

        emit UserCreated(name, msg.sender); // Emit event
    }

    //get username
    function getUserName(address pubkey) external view returns (string memory) {
        require(checkUserExist(pubkey), "user not fount");
        return userList[pubkey].name;
    }

    //add friend
    function addFriend(address friend_key, string calldata name) external {
        require(checkUserExist(msg.sender), "Create an account first");
        require(checkUserExist(friend_key), "User not found");
        require(msg.sender != friend_key, "Cannot add yourself as friend");
        require(
            checkFriendExist(msg.sender, friend_key) == false,
            "Friend already exists"
        );

        _addFriend(msg.sender, friend_key, name);
        _addFriend(friend_key, msg.sender, userList[msg.sender].name);
    }

    //check if friend exists
    function checkFriendExist(
        address pubkey1,
        address pubkey2
    ) internal view returns (bool) {
        if (
            userList[pubkey1].friendList.length >
            userList[pubkey2].friendList.length
        ) {
            address tmp = pubkey1;
            pubkey1 = pubkey2;
            pubkey2 = tmp;
        }

        for (uint256 i = 0; i < userList[pubkey1].friendList.length; i++) {
            if (userList[pubkey1].friendList[i].pubkey == pubkey2) return true;
        }
        return false;
    }

    //add friend
    function _addFriend(
        address me,
        address friend_key,
        string memory name
    ) internal {
        friend memory newFriend = friend(friend_key, name);
        userList[me].friendList.push(newFriend);
    }

    //get friend
    function getMyFriendList() external view returns (friend[] memory) {
        return userList[msg.sender].friendList;
    }

    //get chat code
    function _getChatCode(
        address pubkey1,
        address pubkey2
    ) internal pure returns (bytes32) {
        if (pubkey1 < pubkey2) {
            return keccak256(abi.encodePacked(pubkey1, pubkey2));
        } else return keccak256(abi.encodePacked(pubkey2, pubkey1));
    }

    //send message
    function sendMessage(address friend_key, string calldata _msg) external {
        require(checkUserExist(msg.sender), "Create an account first");
        require(checkUserExist(friend_key), "User not found");
        require(
            checkFriendExist(msg.sender, friend_key),
            "User not your friend"
        );

        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        message memory newMsg = message(msg.sender, block.timestamp, _msg);
        allMessages[chatCode].push(newMsg);
    }

    //read message
    function readMessage(
        address friend_key
    ) external view returns (message[] memory) {
        bytes32 chatCode = _getChatCode(msg.sender, friend_key);
        return allMessages[chatCode];
    }

    //get all users
    function getAllAppUsers() public view returns (AllUserStruck[] memory) {
        return getAllUsers;
    }
}
