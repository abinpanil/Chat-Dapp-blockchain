const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const ChatAppModule = buildModule("ChatAppModule", (m) => {
    const chatApp = m.contract("ChatApp");

    return { chatApp };
});

module.exports = ChatAppModule;