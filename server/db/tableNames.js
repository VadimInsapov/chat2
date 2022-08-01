module.exports = {
    USER: {
        tableName: `user`,
        columns: {
            ID: (short) => short ? `id` : `user.id`,
            EMAIL: (short) => short ? `email` : `user.email`,
            PASSWORD: (short) => short ? `password` : `user.password`,
            NAME: (short) => short ? `name` : `user.name`,
            LAST_NAME: (short) => short ? `lastName` : `user.lastName`,
            BIRTH_DATE: (short) => short ? `birthDate` : `user.birthDate`,
            PHONE: (short) => short ? `phone` : `user.phone`,
            AVATAR: (short) => short ? `avatar` : `user.avatar`,
            ACTIVE_STATUS: (short) => short ? `activeStatus` : `user.activeStatus`,
        },
    },
    FRIENDS: {
        tableName: `friends`,
        columns: {
            USER_ID: (short) => short ? `userId` : `friends.userId`,
            USER_ID2: (short) => short ? `userId2` : `friends.userId2`,
        },
    },
    CHAT: {
        tableName: `chat`,
        columns: {
            ID: (short) => short ? `id` : `chat.id`,
            NAME: (short) => short ? `name` : `chat.name`,
            LOGO: (short) => short ? `logo` : `chat.logo`,
        },
    },
    USER_CHAT: {
        tableName: `user_chat`,
        columns: {
            USER_ID: (short) => short ? `userId` : `user_chat.userId`,
            CHAT_ID: (short) => short ? `chatId` : `user_chat.chatId`,
            IS_ADMIN: (short) => short ? `isAdmin` : `user_chat.isAdmin`,
        },
    },
    MESSAGE: {
        tableName: `message`,
        columns: {
            ID: (short) => short ? `id` : `message.id`,
            BODY: (short) => short ? `body` : `message.body`,
            CHAT_ID: (short) => short ? `chatId` : `message.chatId`,
            USER_ID: (short) => short ? `userId` : `message.userId`,
            IS_READ: (short) => short ? `isRead` : `message.isRead`,
            IS_IMPORTANT: (short) => short ? `isImportant` : `message.isImportant`,
            CREATED_AT: (short) => short ? `createdAt` : `message.createdAt`,
            UPDATED_AT: (short) => short ? `updatedAt` : `message.updatedAt`,
        },
    },
}