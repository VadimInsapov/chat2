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
}